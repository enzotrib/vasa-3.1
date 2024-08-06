// Importaciones necesarias para el componente

import { AVATARS, VOICES } from "@/app/lib/constants";
import {
  Configuration,
  NewSessionData,
  StreamingAvatarApi,
} from "@heygen/streaming-avatar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
  Tooltip,
} from "@nextui-org/react";
import { Microphone, MicrophoneStage } from "@phosphor-icons/react";
import { useChat } from "ai/react";
import clsx from "clsx";
import OpenAI from "openai";
import { useEffect, useRef, useState } from "react";
import StreamingAvatarTextInput from "./StreamingAvatarTextInput";

// Configuración de la instancia de OpenAI
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function StreamingAvatar() {
  // Estados para controlar diferentes aspectos del componente
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isLoadingRepeat, setIsLoadingRepeat] = useState(false);
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [debug, setDebug] = useState<string>();
  const [avatarId, setAvatarId] = useState<string>("");
  const [voiceId, setVoiceId] = useState<string>("");
  const [data, setData] = useState<NewSessionData>();
  const [text, setText] = useState<string>("");
  const [initialized, setInitialized] = useState(false);
  const [recording, setRecording] = useState(false);

 
  // Referencias para elementos del DOM y objetos
  const mediaStream = useRef<HTMLVideoElement>(null);
  const avatar = useRef<StreamingAvatarApi | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // Hook useChat para manejar la conversación con ChatGPT
  const { input, setInput, handleSubmit } = useChat({
    onFinish: async (message) => {
      console.log("ChatGPT Response:", message);

      if (!initialized || !avatar.current) {
        setDebug("Avatar API not initialized");
        return;
      }

      // Enviar la respuesta de ChatGPT al Streaming Avatar
      await avatar.current
        .speak({
          taskRequest: { text: message.content, sessionId: data?.sessionId },
        })
        .catch((e) => {
          setDebug(e.message);
        });
      setIsLoadingChat(false);
    },
    initialMessages: [
      {
        id: "1",
        role: "system",
        content: "You are a helpful assistant.",
      },
    ],
  });

  // Función para obtener el token de acceso del servidor
  async function fetchAccessToken() {
    try {
      const response = await fetch("/api/get-access-token", {
        method: "POST",
      });
      const token = await response.text();
      console.log("Access Token:", token);
      return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
      return "";
    }
  }

  // Función para iniciar una sesión con el avatar
  async function startSession() {
    setIsLoadingSession(true);
    await updateToken();
    if (!avatar.current) {
      setDebug("Avatar API is not initialized");
      return;
    }
    try {
      const res = await avatar.current.createStartAvatar(
        {
          newSessionRequest: {
            quality: "low",
            avatarName: avatarId,
            voice: { voiceId: voiceId },
          },
        },
        setDebug
      );
      setData(res);
      setStream(avatar.current.mediaStream);
    } catch (error) {
      console.error("Error starting avatar session:", error);
      setDebug(
        `There was an error starting the session. ${voiceId ? "This custom voice ID may not be supported." : ""}`
      );
    }
    setIsLoadingSession(false);
  }

  // Función para actualizar el token y configurar los manejadores de eventos
  async function updateToken() {
    const newToken = await fetchAccessToken();
    console.log("Updating Access Token:", newToken);
    avatar.current = new StreamingAvatarApi(
      new Configuration({ accessToken: newToken })
    );

    const startTalkCallback = (e: any) => {
      console.log("Avatar started talking", e);
    };

    const stopTalkCallback = (e: any) => {
      console.log("Avatar stopped talking", e);
    };

    console.log("Adding event handlers:", avatar.current);
    avatar.current.addEventHandler("avatar_start_talking", startTalkCallback);
    avatar.current.addEventHandler("avatar_stop_talking", stopTalkCallback);

    setInitialized(true);
  }

  // Función para interrumpir la tarea actual del avatar
 async function handleInterrupt() {
    if (!initialized || !avatar.current) {
      setDebug("Avatar API not initialized");
      return;
    }
    await avatar.current
      .interrupt({ interruptRequest: { sessionId: data?.sessionId } })
      .catch((e) => {
        setDebug(e.message);
      });
  }

  // Función para finalizar la sesión del avatar
  async function endSession() {
    if (!initialized || !avatar.current) {
      setDebug("Avatar API not initialized");
      return;
    }
    await avatar.current.stopAvatar(
      { stopSessionRequest: { sessionId: data?.sessionId } },
      setDebug
    );
    setStream(undefined);
  }

  // Función para hacer que el avatar hable un texto específico
  async function handleSpeak() {
    setIsLoadingRepeat(true);
    if (!initialized || !avatar.current) {
      setDebug("Avatar API not initialized");
      return;
    }
    await avatar.current
      .speak({ taskRequest: { text: text, sessionId: data?.sessionId } })
      .catch((e) => {
        setDebug(e.message);
      });
    setIsLoadingRepeat(false);
  }

  // Efecto para inicializar el avatar al cargar el componente
  useEffect(() => {
    async function init() {
      const newToken = await fetchAccessToken();
      console.log("Initializing with Access Token:", newToken);
      avatar.current = new StreamingAvatarApi(
        new Configuration({ accessToken: newToken, jitterBuffer: 200 })
      );
      setInitialized(true);
    }
    init();

    return () => {
      endSession();
    };
  }, []);

  // Efecto para manejar la reproducción del stream de video del avatar
  useEffect(() => {
    if (stream && mediaStream.current) {
      mediaStream.current.srcObject = stream;
      mediaStream.current.onloadedmetadata = () => {
        mediaStream.current!.play();
        setDebug("Playing");
      };
    }
  }, [mediaStream, stream]);

  // Función para iniciar la grabación de audio
  function startRecording() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, {
            type: "audio/wav",
          });
          audioChunks.current = [];
          transcribeAudio(audioBlob);
        };
        mediaRecorder.current.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  }

  // Función para detener la grabación de audio
  function stopRecording() {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  }

  // Función para transcribir el audio grabado usando la API de OpenAI
  async function transcribeAudio(audioBlob: Blob) {
    try {
      const audioFile = new File([audioBlob], "recording.wav", {
        type: "audio/wav",
      });
      const response = await openai.audio.transcriptions.create({
        model: "whisper-1",
        file: audioFile,
      });
      const transcription = response.text;
      console.log("Transcription: ", transcription);
      setInput(transcription);
    } catch (error) {
      console.error("Error transcribing audio:", error);
    }
  }

  //-------- Renderizado del componente
  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="border-1 border-lime-400">
        <CardBody className="h-[600px] flex flex-col justify-center items-center">
          {stream ? (
            //------ Renderiza el video del avatar si hay un stream
            <div className="h-[500px] w-[800px] justify-center items-center flex rounded-lg overflow-hidden">
              <video
                ref={mediaStream}
                autoPlay
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  }}
              >
                <track kind="captions" />
              </video>
              <div className="flex flex-col gap-2 absolute bottom-3 right-3">
                <Button
                  size="md"
                  onClick={handleInterrupt}
                  className="bg-gradient-to-tr from-lime-400 to-lime-200 text-slate-800 rounded-lg"
                  variant="shadow"
                >
                  Interrumpir
                </Button>
                <Button
                  size="md"
                  onClick={endSession}
                  className="bg-gradient-to-tr from-lime-400 to-lime-200 text-slate-800 rounded-lg"
                  variant="shadow"
                >
                  Terminar session
                </Button>
              </div>
            </div>
          ) : !isLoadingSession ? (
           

            //--------- Renderiza los controles de selección de avatar y voz si no hay sesión activa
<div className="h-full justify-center items-center flex flex-col gap-6 w-[500px] self-center">
  <div className="flex flex-col gap-2 w-full">
    <p className="text-sm text-center font-medium leading-none text-lime-400">
      Elige a tu VASA
    </p>
    <p className="text-xs text-center mb-5 font-medium leading-none text-white">
      Virtual Assistant Streaming Avatar
    </p>

    <div className="grid grid-cols-4 gap-10 justify-center">
      {AVATARS.map((avatar) => (
        <div
          className="card hover:border-white active:border-2 hover:text-lime-300 h-[150px] w-[120px] flex flex-col items-center justify-center cursor-pointer border-1 border-lime-300 rounded"
          key={avatar.avatar_id}
          onClick={() => setAvatarId(avatar.avatar_id)}
        >
          <img
            src={`/${avatar.avatar_id}.png`}
            alt={avatar.name}
            className="h-[80px] w-[80px] mb-2"
          />
          <div className="text-center">
            <h3 className="text-sm">{avatar.name}</h3>
          </div>
        </div>
      ))}
    </div>




                  





              {/*  <Select
                  placeholder="Or select one from these example avatars"
                  size="md"
                  onChange={(e) => {
                    setAvatarId(e.target.value);
                  }}
                >
                  {AVATARS.map((avatar) => (
                    <SelectItem
                      key={avatar.avatar_id}
                      textValue={avatar.avatar_id}
                    >
                      {avatar.name}
                    </SelectItem>
                  ))}
                </Select>*/}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-sm text-center font-medium leading-none  text-lime-400">
                  Elige la voz e idioma
                </p>
                
                <Select
                  placeholder="Selecciona entre estas voces"
                  size="md"
                  onChange={(e) => {
                    setVoiceId(e.target.value);
                  }}
                >
                  {VOICES.map((voice) => (
                    <SelectItem key={voice.voice_id} textValue={voice.voice_id}>
                      {voice.name} | {voice.language} | {voice.gender}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <Button
                size="md"
                onClick={startSession}
                className="bg-gradient-to-tr from-lime-200 to-lime-400 w-[200px] text-slate-800"
                variant="shadow"
              >
                Comenzar sesión
              </Button>
            </div>
          ) : (
            //--------- Muestra un spinner mientras se carga la sesión
            <Spinner size="lg" color="default" />
          )}
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-col gap-3">
           {/*---- Componente para hacer que el avatar repita texto------*/}
          <StreamingAvatarTextInput
            label="Repite"
            placeholder="Escribe algo para que el avatar repita"
            input={text}
            onSubmit={handleSpeak}
            setInput={setText}
            disabled={!stream}
            loading={isLoadingRepeat} 
          /> 
          {/*------ Componente para chatear con el avatar --------*/}
          <StreamingAvatarTextInput
            label="Chat"
            placeholder="Chatea con el avatar (usa ChatGPT)"
            input={input}
            onSubmit={() => {
              setIsLoadingChat(true);
              if (!input) {
                setDebug("Ingrese un texto para chatear con Chat GPT");
                return;
              }
              handleSubmit();
            }}
            setInput={setInput}
            loading={isLoadingChat}
            endContent={
              <Tooltip
                content={!recording ? "Empezar a grabar" : "Parar grabación"}
              >
                <Button
                  onClick={!recording ? startRecording : stopRecording}
                  isDisabled={!stream}
                  isIconOnly
                  className={clsx(
                    "mr-4 text-slate-800",
                    !recording
                      ? "bg-gradient-to-tr from-lime-400 to-indigo-300 text-white rounded-lg"
                      : ""
                  )}
                  size="sm"
                  variant="shadow"
                >
                  {!recording ? (
                    <Microphone size={20} />
                  ) : (
                    <>
                      <div className="absolute h-full w-full bg-gradient-to-tr from-lime-400 to-indigo-300 text-white rounded-lg animate-pulse -z-10"></div>
                      <MicrophoneStage size={20} />
                    </>
                  )}
                </Button>
              </Tooltip>
            }
            disabled={!stream}
          />
        </CardFooter>
      </Card>
      {/* --------Área de debug--------- */}
      <p className="font-mono text-right text-lime-400">
        <span>Consola:</span>
        <br />
        {debug}
      </p>
    </div>
  );
}