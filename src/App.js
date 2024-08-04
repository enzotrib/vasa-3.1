import React, { useEffect } from 'react';


const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);









  return (
    <>
    {/*start header*/}
    <header className="top-header">
      <nav className="navbar navbar-expand align-items-center gap-4">
        <div className="btn-toggle">
          <a href="javascript:;">
            <i className="material-icons-outlined">menu</i>
          </a>
        </div>
        <div className="search-bar flex-grow-1">
          <div className="position-relative">
            <h4>Virtual Assistant Streaming Avatar</h4>
            <div className="search-popup p-3">
              <div className="card rounded-4 overflow-hidden">
                <div className="card-header d-lg-none">
                  <div className="position-relative">
                    <input
                      className="form-control rounded-5 px-5 mobile-search-control"
                      type="text"
                      placeholder="Search"
                    />
                    <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50">
                      search
                    </span>
                    <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 mobile-search-close">
                      close
                    </span>
                  </div>
                </div>
                <div className="card-body search-content">
                  <p className="search-title">Recent Searches</p>
                  <div className="d-flex align-items-start flex-wrap gap-2 kewords-wrapper">
                    <a href="javascript:;" className="kewords">
                      <span>Angular Template</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                    <a href="javascript:;" className="kewords">
                      <span>Dashboard</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                    <a href="javascript:;" className="kewords">
                      <span>Admin Template</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                    <a href="javascript:;" className="kewords">
                      <span>Bootstrap 5 Admin</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                    <a href="javascript:;" className="kewords">
                      <span>Html eCommerce</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                    <a href="javascript:;" className="kewords">
                      <span>Sass</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                    <a href="javascript:;" className="kewords">
                      <span>laravel 9</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </a>
                  </div>
                  <div className="search-list d-flex flex-column gap-2"></div>
                </div>
                <div className="card-footer text-center bg-transparent">
                  <a href="javascript:;" className="btn w-100">
                    See All Search Results
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="navbar-nav gap-1 nav-right-links align-items-center">
          <li className="nav-item dropdown">
            <a className="" href="avascript:;" data-bs-toggle="dropdown">
              <img src="assets/images/county/01.png" width={100} alt="" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
              <div className="notify-list">
                <div>
                  <a
                    className="dropdown-item border-bottom py-2"
                    href="javascript:;"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="">
                        <img
                          src="assets/images/avatars/01.png"
                          className="rounded-circle"
                          width={45}
                          height={45}
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    {/*end top header*/}
    {/*start sidebar*/}
    <aside className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div className="logo-icon">
          <img src="assets/images/logo-icon.png" className="logo-img" alt="" />
        </div>
        <div className="logo-name flex-grow-1">
          <h5 className="mb-0">VASA</h5>
        </div>
        <div className="sidebar-close">
          <span className="material-icons-outlined">close</span>
        </div>
      </div>
      <div className="sidebar-nav">
        {/*navigation*/}
        <ul className="metismenu" id="sidenav">
          <li>
            <a href="#avatars" className="">
              <div className="parent-icon">
                <i className="material-icons-outlined menu-avatar-icon">face</i>
              </div>
              <div className="menu-title">Avatar</div>
            </a>
          </li>
          <li>
            <a href="#voces" className="">
              <div className="parent-icon">
                <i className="material-icons-outlined menu-voice-icon">
                  record_voice_over
                </i>
              </div>
              <div className="menu-title">Voz Idioma Tono</div>
            </a>
          </li>
          <li>
            <a href="#prompt" className="">
              <div className="parent-icon">
                <i className="material-icons-outlined menu-prompt-icon">
                  keyboard
                </i>
              </div>
              <div className="menu-title">Prompt</div>
            </a>
          </li>
          <li>
            <a href="#background" className="">
              <div className="parent-icon">
                <i className="material-icons-outlined menu-background-icon">
                  wallpaper
                </i>
              </div>
              <div className="menu-title">Background</div>
            </a>
          </li>
          <li className="menu-label">Forms &amp; Tables</li>
          <li>
            <a href="faq.html">
              <div className="parent-icon">
                <i className="material-icons-outlined">help_outline</i>
              </div>
              <div className="menu-title">FAQ</div>
            </a>
          </li>
          <li>
            <a href="pricing-table.html">
              <div className="parent-icon">
                <i className="material-icons-outlined">sports_football</i>
              </div>
              <div className="menu-title">Pricing</div>
            </a>
          </li>
          <li className="menu-label">Others</li>
          <li>
            <a href="javascrpt:;">
              <div className="parent-icon">
                <i className="material-icons-outlined">description</i>
              </div>
              <div className="menu-title">Documentation</div>
            </a>
          </li>
          <li>
            <a href="javascrpt:;">
              <div className="parent-icon">
                <i className="material-icons-outlined">support</i>
              </div>
              <div className="menu-title">Support</div>
            </a>
          </li>
        </ul>
        {/*end navigation*/}
      </div>
    </aside>
    {/*end sidebar*/}
    {/*start main wrapper*/}
    <main className="main-wrapper">
      <div className="main-content">{/*breadcrumb*/}</div>
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Configuración</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0"></ol>
          </nav>
        </div>
      </div>
      {/*end breadcrumb*/}
      <div id="avatars" className="section">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4 m-4">
          <div className="col">
            <div className="card card-avatar">
              <div className="card-body">
                <img
                  src="assets/images/gallery/08.png"
                  className="w-100 mb-4 rounded"
                  alt="..."
                />
                <p className="card-text text-center">Eric</p>
                <button
                  className="btn btn-outline-primary w-100"
                  data-avatar-id="Eric_public_pro2_20230608"
                >
                  Elegir VASA
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-avatar">
              <div className="card-body">
                <img
                  src="assets/images/gallery/05.png"
                  className="w-100 mb-4 rounded"
                  alt="..."
                />
                <p className="card-text text-center">Anna</p>
                <button
                  className="btn btn-outline-primary w-100"
                  data-avatar-id="Anna_public_3_20240108"
                >
                  Elegir VASA
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-avatar">
              <div className="card-body">
                <img
                  src="assets/images/gallery/06.png"
                  className="w-100 mb-4 rounded"
                  alt="..."
                />
                <p className="card-text text-center">Susan</p>
                <button
                  className="btn btn-outline-primary w-100"
                  data-avatar-id="Susan_public_2_20240328"
                >
                  Elegir VASA
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-avatar">
              <div className="card-body">
                <img
                  src="assets/images/gallery/09.png"
                  className="w-100 mb-4 rounded"
                  alt="..."
                />
                <p className="card-text text-center">Tyler</p>
                <button
                  className="btn btn-outline-primary w-100"
                  data-avatar-id="Tyler-incasualsuit-20220721"
                >
                  Elegir VASA
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
      <div className="section" id="voces">
        <div className="">
          <div className="card m-4 card-body">
            <h6 className="mb-3">Elige la voz e idioma</h6>
            <div className="product-table">
              <div className="table-responsive white-space-nowrap">
                <table className="table align-middle">
                  <thead className="table-basic-table">
                    <tr>
                      <th className="text-primary">Seleccionar</th>
                      <th className="text-primary">Nombre</th>
                      <th className="text-primary">Tono</th>
                      <th className="text-primary">Idioma</th>
                      <th className="text-primary">Genero</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="selec-idioma">
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          voice_id="131a436c47064f708210df6628ef8f32"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <div className="product-info">
                            <p className="mb-0 product-title">Paul</p>
                          </div>
                        </div>
                      </td>
                      <td>Natural</td>
                      <td>English</td>
                      <td>Female</td>
                    </tr>
                    <tr className="selec-idioma">
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          voice_id="0ebe70d83b2349529e56492c002c9572"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <div className="product-info ">
                            <p className="mb-0 product-title">Antoni</p>
                          </div>
                        </div>
                      </td>
                      <td>Friendly</td>
                      <td>English</td>
                      <td>Male</td>
                    </tr>
                    <tr className="selec-idioma">
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          voice_id="001cc6d54eae4ca2b5fb16ca8e8eb9bb"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <div className="product-info">
                            <p className="mb-0 product-title">Elias</p>
                          </div>
                        </div>
                      </td>
                      <td>Natural</td>
                      <td>Spanish</td>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="prompt" className="section">
        <div className="card m-5 card-body">
          <div className="mb-4">
            <h6 className="mb-3">System Prompt (opcional)</h6>
            <textarea
              id="systemPrompt"
              className="form-control prompt-textarea"
              cols={4}
              rows={6}
              placeholder="Escribe tu prompt de compartamiento..."
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div id="background" className="section">
        <div className="card m-5" id="background">
          <div className="card m-5 card-body">
            <h6 className="mb-3">Seleccionar Imagen de Fondo (opcional)</h6>
            <div className="row row-cols-1 row-cols-lg-2 g-3">
              <div className="col">
                <div
                  className="card shadow-none mb-0"
                  style={{
                    height: 250,
                    backgroundImage:
                      'url("assets/images/cat/pexels-karlsolano-2883049.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="card-body selec-background">
                    <h5 className="mb-0 text-white">Hand Watch</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card shadow-none mb-0"
                  style={{
                    height: 250,
                    backgroundImage:
                      'url("assets/images/cat/istockphoto-1500908481-1024x1024.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="card-body selec-background">
                    <h5 className="mb-0 text-white">Hand Watch</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card shadow-none mb-0"
                  style={{
                    height: 250,
                    backgroundImage:
                      'url("assets/images/cat/pexels-itsterrymag-2635038.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="card-body selec-background">
                    <h5 className="mb-0 text-white">Hand Watch</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card shadow-none mb-0 position-relative"
                  style={{ height: 250 }}
                >
                  <video
                    autoPlay=""
                    loop=""
                    muted=""
                    playsInline=""
                    className="position-absolute w-100 h-100"
                    style={{ objectFit: "cover" }}
                  >
                    <source
                      src="assets/images/cat/AdobeStock_187670254_Video_HD_Preview.mov"
                      type="video/mp4"
                    />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                  <div
                    className="card-body position-relative selec-background"
                    style={{ zIndex: 1 }}
                  >
                    <h5 className="mb-0 text-white">Hand Watch</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card shadow-none mb-0"
                  style={{
                    height: 250,
                    backgroundImage:
                      'url("assets/images/cat/medical-office.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="card-body selec-background">
                    <h5 className="mb-0 text-white">Hand Watch</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-none mb-0" style={{ height: 250 }}>
                  <div className="mb-4 selec-background">
                    <h6 className="mb-3">Subir Fondo (opcional)</h6>
                    <input
                      id="fancy-file-upload"
                      type="file"
                      name="files"
                      accept=".jpg, .png, image/jpeg, image/png"
                      multiple=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
      {/*<div id="background" class="section">
    <div class="card m-5" id="background">
      <div class="card m-5 card-body">
  <h6 class="mb-3">Seleccionar Imagen de Fondo (opcional)</h6>
  <div class="row row-cols-1 row-cols-lg-2 g-3">
    <div class="col">
      <div class="card shadow-none mb-0 "
        style="height: 250px; background-image: url('assets/images/cat/pexels-karlsolano-2883049.jpg'); background-size: cover; background-position: center;">
        <div class="card-body selec-background">
          <h5 class="mb-0 text-white">Hand Watch</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-none mb-0"
        style="height: 250px; background-image: url('assets/images/cat/istockphoto-1500908481-1024x1024.jpg'); background-size: cover; background-position: center;">
        <div class="card-body selec-background">
          <h5 class="mb-0 text-white">Hand Watch</h5>
        </div>
      </div>
    </div>
  
  
    <div class="col">
      <div class="card shadow-none mb-0"
        style="height: 250px; background-image: url('assets/images/cat/pexels-itsterrymag-2635038.jpg'); background-size: cover; background-position: center;">
        <div class="card-body selec-background">
          <h5 class="mb-0 text-white">Hand Watch</h5>
        </div>
      </div>
    </div>
  
    <div class="col">
      <div class="card shadow-none mb-0 position-relative" style="height: 250px;">
        <video autoplay loop muted playsinline class="position-absolute w-100 h-100" style="object-fit: cover;">
          <source src="assets/images/cat/AdobeStock_187670254_Video_HD_Preview.mov" type="video/mp4">
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div class="card-body position-relative selec-background" style="z-index: 1;">
          <h5 class="mb-0 text-white">Hand Watch</h5>
        </div>
      </div>
    </div>
  
  
    <div class="col">
      <div class="card shadow-none mb-0"
        style="height: 250px; background-image: url('assets/images/cat/medical-office.jpg'); background-size: cover; background-position: center;">
        <div class="card-body selec-background">
          <h5 class="mb-0 text-white">Hand Watch</h5>
        </div>
      </div>
    </div>
  
  
  
    <div class="col">
      <div class="card shadow-none mb-0" style="height: 250px;">
        <div class="mb-4 selec-background">
          <h6 class="mb-3">Subir Fondo (opcional)</h6>
          <input id="fancy-file-upload" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png"
            multiple="">
        </div>
      </div>
    </div>
  
  
  
  
  </div>
      </div>
    </div>
  </div>*/}
    </main>
    {/*end main wrapper*/}
    {/*start overlay*/}
    <div className="overlay btn-toggle" />
    {/*end overlay*/}
    {/*start footer*/}
    <footer className="page-footer">
      <p className="mb-0">Copyright © 2024. All right reserved.</p>
    </footer>
    {/*top footer*/}
    {/*start cart*/}
    {/*end cart*/}
    {/*start switcher*/}
    <button
      className="btn btn-grd btn-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#staticBackdrop"
    >
      <i className="material-icons-outlined">preview</i>Vista Previa
    </button>
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabIndex={-1}
      id="staticBackdrop"
    >
      {/*PANATALLA DE CHAT*********************************/}
      <div className="main-content">
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <div className="mb-3 console-container">
              <p id="status" className="mb-0 text-consola" />
            </div>
            <div className="chat-tab-menu mt-3">
              <ul className="nav nav-pills nav-justified" role="tablist"></ul>
            </div>
          </div>
          <div className="chat-sidebar-content">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-Chats">
                <div className="videoSectionWrap">
                  <div className="videoWrap">
                    <video
                      id="mediaElement"
                      className="videoEle show"
                      autoPlay=""
                      style={{ maxWidth: 340, padding: 10 }}
                    />
                    <canvas
                      id="canvasElement"
                      className="videoEle hide"
                      style={{ maxWidth: 340, padding: 10 }}
                    />
                  </div>
                  <div className="actionRow switchRow hide" id="bgCheckboxWrap">
                    <div className="switchWrap">
                      <span>Remove background</span>
                      <label className="switch">
                        <input type="checkbox" id="removeBGCheckbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <label>
                      Background (CSS)
                      <input
                        type="text"
                        id="bgInput"
                        defaultValue='url("assets/images/cat/AdobeStock_471333224_Video_HD_Preview.mov") center / cover no-repeat'
                      />
                    </label>
                  </div>
                </div>
                <div className="ps__rail-x" style={{ left: 0, bottom: "-200px" }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{ left: 0, width: 0 }}
                  />
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: 200, height: 300, right: 0 }}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 110, height: 164 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-header d-flex align-items-center">
          <div className="chat-toggle-btn">
            <i className="bx bx-menu-alt-left" />
          </div>
          <div>
            <h5 className="mb-0">Probar y ejecutar VASA</h5>
            <p className="mb-0">Virtual Assistant Streaming Avatar</p>
          </div>
          <div className="chat-top-header-menu ms-auto">
            <div className="col">
              <div className="">
                <button
                  id="newBtn"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Conectar
                </button>
                <button
                  id="startBtn"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Comenzar
                </button>
                <button
                  id="closeBtn"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Desconectar
                </button>
                <a href="javascript:;" className="" data-bs-dismiss="offcanvas">
                  <i className="material-icons-outlined">close</i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="chatContainer" className="chat-container">
          <div id="chatContent" className="chat-content">
            {/* Messages will be appended here */}
          </div>
        </div>
      </div>
      <div className="chat-footer d-flex align-items-center">
        <div className="flex-grow-1 pe-2">
          <div className="input-group">
            <span className="input-group-text">
              <a href="javascript:;" id="microphone-button">
                <i className="bx bx-microphone" />
              </a>
            </span>
            <input
              id="taskInput"
              type="text"
              className="form-control"
              placeholder="Type a message"
            />
          </div>
        </div>
        <div className="chat-footer-menu">
          {/* <button type="button" id="repeatBtn" class="btn btn-primary bx bxs-contact btn-circle raised rounded-circle d-flex gap-2 wh-48"><i class="material-icons-outlined">chat</i></button>
    <button type="button" id="talkBtn" class="btn btn-primary bx bx-microphone btn-circle raised rounded-circle d-flex gap-2 wh-48"><i class="material-icons-outlined">send</i></button>*/}
          {/*<button class="bx bxs-contact" >Repeat</button>
    <button class="bx bx-microphone" >Talk</button>*/}
          <a href="javascript:;" id="repeatBtn">
            <i className="bx bx-user-voice" />
          </a>
          <a href="javascript:;" id="talkBtn">
            <i className="bx bx-chat" />
          </a>
        </div>
      </div>
      {/*start chat overlay*/}
      <div className="overlay chat-toggle-btn-mobile" />
      {/*end chat overlay*/}
    </div>
    <div className="actionRowsWrap">
      <div className="actionRow">
        <label className="text-primary">
          AvatarName
          <input className="input-consola" id="avatarName" type="text" />
        </label>
        <label className="text-primary">
          VoiceID
          <input className="input-consola" id="voiceID" type="text" />
        </label>
        {/* <button id="newBtn">New</button>
          <button id="startBtn">Start</button>
          <button id="closeBtn">Close</button>*/}
      </div>
      {/*<div class="actionRow">
          
          
      
        </div>*/}
    </div>
  </>
  
  );
};

export default App; // Asegúrate de tener esta línea
