// page.tsx

"use client";

import StreamingAvatar from "@/components/StreamingAvatar";


export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
        <div className="w-full">
          {/* Aquí puedes decidir cuál componente mostrar directamente */}
          <StreamingAvatar />
          {/* O */}
          {/* <StreamingAvatarCode /> */}
        </div>
      </div>
    </div>
  );
}


