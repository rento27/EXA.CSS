import React from 'react';

const VideoEditor = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-dark px-6 py-3 shrink-0">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <img className="h-8 w-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAO9wnPaCtYkkO-pSAm85tmPqwplbTv5RqTODe4nBqynafoViIL0ZSG5CG0eN6OuEBatb2Z52Tes2KliOMbasGJ2697dQuBx0PBYiPIfv4l1TVKKKj4ZrSSHj3nABoM6OLuT_U9Jp0NoaggszcZpmjL7z7lADAWWExV81h616TzGdFb_q5VEsesv3ngdiyz28FAl-j2arMUTtUR0nVmqNu6pQXU7g_8HuUms90UgiXweDV4FI0GsCXKX-AdLFafYbcn5JAgFvJdrQ" />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">MPA Studio - The Viral Engine</h2>
        </div>
        <div className="flex flex-1 justify-end gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
            <span className="truncate">Guardar</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity">
            <span className="truncate">Exportar</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxleNJKH38_KDvjNI2VjcYB3Zd0044WT0W3W8Nms1kCwtrMOB1XtKsMhnYHsk8KGyBuYwzx8tDuydk_Uyb1kCLyUQD0AtSJdpvo8UHNw6whbVsIdm-iKTPrS69E94k791T8SPc6aMcWnOpBZHPKHDBh61n5eyHwijMo0qefp_MyOgCFNz_ILTAH4EIEwnFxctUHe-TMu3ZDBldKWN_XBV_lm2Jv4Wow3nB8GX6FF4nQAwmafeefhZafOHKFkT-iBdErmxSxnXgFqw")'}}></div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 flex flex-col bg-surface-dark/50 border-r border-surface-dark p-4 shrink-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">movie</span>
              <p className="text-sm font-medium leading-normal">Medios</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined">graphic_eq</span>
              <p className="text-white text-sm font-medium leading-normal">Audio</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined">title</span>
              <p className="text-white text-sm font-medium leading-normal">Texto</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined">magic_button</span>
              <p className="text-white text-sm font-medium leading-normal">Efectos</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-0 pt-4">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-1 pb-2 pt-4">Papelera de medios</h3>
            <div className="flex-1 overflow-y-auto pr-2 -mr-2">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3">
                <div className="w-full bg-center bg-no-repeat aspect-[9/16] bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWv2OEgV91jJMCG-Alc5Cd3EGY9mjO-RgqH26px0OS-MD3aGkcJOLvd78ZxSKH1IxpjZCjkM06_zRzvv2ZMNgvvSrbzDXQm2eQtRl3GpkJFpNiwkIMXykCmtmYUsJIUkVrbibp1Et0TsHzMkpSPibYFFNKal0-9w_-Qj2Tk28u86oJ2QBAsVWyFYB3k-Sjpr6YuW-cSztvzjitpUa9fP2A-cb0AUy4QRoEKLh-kE_6Czrt5UU5iiYTPDo87kqs3gnNC3OGnNIEp5E")'}}></div>
                <div className="w-full bg-center bg-no-repeat aspect-[9/16] bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6J7r0fG7Ez3-8Xkgvc1x32fiTfP1z3sv_LUdttCy4pFSqgoWxVN8ibEgnoOGiGqP03mXI1aLala_2_oliRHdfujm1-aYrG01jeEEwRqnxfU504gHmo8okl-4lvqWdEtgRL2Gw-VX3TKbw61OWqnaKfPmJcZQC3OGRjrnoNxUfPiT7ONeegF1kH93Xl6awkIsn2cMLRZ1Sk0LKsWLGIYlyOwGBgWcn1QzmWrKd7LVU3gLansbV1rgAVZZYyls-DOmr8HaJk-cYVQo")'}}></div>
                <div className="w-full bg-center bg-no-repeat aspect-[9/16] bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeWScTK_gSxLVdzyiOy0CX3Geqp9Aq3PaolTbEeMsHcvM9Jj8inno5dsGWqPqtx_un042TScmi8w1xQGRd7cGhgE8y5269eQ3zaaNtVdHbAjGnoUCIyTBs4jTgbOnfAhTXomQfheALH8SuCksNBQRAVNvSmljeuis0isvvviAn1tG5Lxwp_aBOpTNHfscfnIYoO4cEVkSv88vDqCKq8QuqdcTf1mcE-M1XOZgZ1rfPD-A5pVcayAOJNFJE7NER3I-FqU6kjANGkME")'}}></div>
                <div className="w-full bg-center bg-no-repeat aspect-[9/16] bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuf-zpKD0pfkLlxDDpiYbngP_NZBnsBrzYpvH8g0X7TZTvtVd5DiVJWcDorTyB2-Y1raBsBhAr7qY8GyKq-bcTIr-gGRWcY31vUxc-FArNRqdZaw-J_HMvW1ANv7jUD5-hQWtMe04V_q-AsqVR8Wf1duLHGCUro7w3wKAUZItow3X1FawjhVs7uC0HY72X127zOGqn8jJj0lk2B0l5JGVFmg3hnA4dq2ylAmNLCxYZ2pzkwQJEiWJ7v8a2oM6qnkY-JkDoaVSOya4")'}}></div>
                <div className="w-full bg-center bg-no-repeat aspect-[9/16] bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTtk5qVXIlboADIFy0iL3jG1Lhzp8TEbLN0EE4_G7EL_3fcRbVesPfMICCXyhtZK_KXkI-7jdqLXm05SFgrKTBSzhdLgy_B3qglfEAm1672pO0BX7urmpTgzLmGSqwTqKU8Kwxdpo6tDYel5zcQR3YZCW0EFLnLLJSkT9p0UR3BNOIghXFp4lavi8CncuE3b6oGVF49yivHSY5vDsRz7XqwLzrnH3kmFLlYDDBFa5HpjCU2l9zqM0RuBVuAJ1G9MMJoYpmQ9zxUOM")'}}></div>
                <div className="w-full bg-center bg-no-repeat aspect-[9/16] bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX-zNUmKx7-wWl7c3dYoWJJ1pnW4JOfIpI-ycJolMG-qmGe9kDxehTB2QVsNHjcDjPvSWbNqQofjU-KxLtbN8kvBqIbl6n9-1tOIT6ECDywGuZbpRgC_yB3YZCpRowtZ3-B6gZSoqh61kk6dR__X-9k9YeFIbI8qxqzT4h-hUvlLUB1Vjaxd1P3b5ewqTY5menBFAUMVEcePx1OIqRxVMdA1TpiSpIMaCNWNZJU9b-mMz7Tiw4nsS0Q2Dd2UKwA4oJav7Mxz60KE8")'}}></div>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-auto border-t border-surface-dark">
            <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity">
              <span className="material-symbols-outlined">upload_file</span>
              <span className="truncate">Subir archivos</span>
            </button>
          </div>
        </aside>
        <main className="flex-1 flex flex-col bg-background-dark p-6">
          <div className="flex-1 flex flex-col items-center justify-center pb-6">
            <div className="bg-black w-full max-w-sm aspect-[9/16] rounded-lg shadow-2xl relative flex items-center justify-center">
              <img className="object-cover h-full w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSqN1sTDqsnbI9m48pQp-lWigls-WZMYV3jsRl76cPA5Va7mHkAxHhVC38q1CDAAMPpbeyhP-LEzKHo1bW70CaCmpefBZcpC7S3NJMLAXENkT0aCLc_a8WicWjAWv55Ih9PUpib_c3kqRYnnUdddWDKydT9sunJawQk7o8kgGieiPWRtVghjbDbPDo4EH1ddTCVd-7_pYAycSVRl9OYFo_uA3GFN3N6Rn2jCFOI_4jmi31oLua6HIguzxvREXgrbZ07G9AHx6Ysf0" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-4xl cursor-pointer text-secondary hover:text-white transition-colors">play_circle</span>
                <span className="text-sm font-mono">00:12</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full">
                  <div className="w-1/3 h-1 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm font-mono">01:34</span>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex flex-col bg-surface-dark/50 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark text-sm hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-lg">content_cut</span> Dividir clip</button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark text-sm hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-lg">delete</span> Eliminar</button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark text-sm hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-lg">volume_up</span> Separar audio</button>
            </div>
            <div className="flex-1 overflow-x-auto relative">
              <div className="absolute top-0 bottom-0 z-20" style={{left: '30%'}}>
                <div className="w-0.5 h-full bg-primary"></div>
                <div className="absolute -top-2 -left-1.5 w-4 h-4 rounded-full bg-primary border-2 border-background-dark cursor-pointer"></div>
              </div>
              <div className="flex flex-col gap-1 min-w-max h-full">
                <div className="h-8 flex items-center relative"><span className="text-xs text-gray-400 w-28 shrink-0 pr-2 text-right">Video principal</span><div className="h-full flex-1 rounded"><div className="h-full bg-clip-video"></div></div></div>
                <div className="h-8 flex items-center relative"><span className="text-xs text-gray-400 w-28 shrink-0 pr-2 text-right">Overlays</span><div className="h-full flex-1 relative"><div className="absolute h-full bg-clip-video rounded w-1/4" style={{left: '10%'}}></div></div></div>
                <div className="h-8 flex items-center relative"><span className="text-xs text-gray-400 w-28 shrink-0 pr-2 text-right">Voz Astro</span><div className="h-full flex-1 relative"><div className="absolute h-full bg-clip-audio rounded w-2/3" style={{left: '5%'}}></div></div></div>
                <div className="h-8 flex items-center relative"><span className="text-xs text-gray-400 w-28 shrink-0 pr-2 text-right">Música</span><div className="h-full flex-1 relative"><div className="absolute h-full bg-clip-audio rounded w-full"></div></div></div>
                <div className="h-8 flex items-center relative"><span className="text-xs text-gray-400 w-28 shrink-0 pr-2 text-right">SFX</span><div className="h-full flex-1 relative"><div className="absolute h-full bg-clip-audio rounded w-1/6" style={{left: '55%'}}></div></div></div>
                <div className="h-8 flex items-center relative"><span className="text-xs text-gray-400 w-28 shrink-0 pr-2 text-right">Subtítulos</span><div className="h-full flex-1 relative"><div className="absolute h-full bg-clip-text rounded w-1/4" style={{left: '5%'}}></div><div className="absolute h-full bg-clip-text rounded w-1/3" style={{left: '40%'}}></div></div></div>
              </div>
            </div>
          </div>
        </main>
        <aside className="w-80 flex flex-col bg-surface-dark/50 border-l border-surface-dark p-6 shrink-0">
          <h3 className="text-lg font-bold mb-4">Propiedades del Clip</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-gray-300 border-b border-surface-dark pb-2">Video</h4>
              <div className="space-y-3">
                <label className="block text-xs text-gray-400">Opacidad</label>
                <input className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" value="100"/>
              </div>
              <div className="space-y-3">
                <label className="block text-xs text-gray-400">Escala</label>
                <input className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary" max="200" min="0" type="range" value="100"/>
              </div>
              <div className="space-y-2">
                <label className="block text-xs text-gray-400">Posición</label>
                <div className="flex gap-2">
                  <input className="w-full bg-surface-dark rounded border-none text-center text-sm p-1.5 focus:ring-primary focus:ring-2" type="text" value="0"/>
                  <input className="w-full bg-surface-dark rounded border-none text-center text-sm p-1.5 focus:ring-primary focus:ring-2" type="text" value="0"/>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-gray-300 border-b border-surface-dark pb-2">Audio</h4>
              <div className="space-y-3">
                <label className="block text-xs text-gray-400">Volumen</label>
                <input className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" value="80"/>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Silenciar</span>
                <button className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600 peer-checked:bg-primary focus:outline-none">
                  <span className="inline-block w-4 h-4 transform bg-white rounded-full transition-transform translate-x-1 peer-checked:translate-x-6"></span>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-gray-300 border-b border-surface-dark pb-2">Texto</h4>
              <div className="space-y-2">
                <label className="block text-xs text-gray-400">Contenido</label>
                <textarea className="w-full bg-surface-dark rounded border-none text-sm p-2 h-20 resize-none focus:ring-primary focus:ring-2">¡Explora el cosmos!</textarea>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="block text-xs text-gray-400">Tamaño</label>
                  <input className="w-full bg-surface-dark rounded border-none text-sm p-1.5 focus:ring-primary focus:ring-2" type="number" value="32"/>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="block text-xs text-gray-400">Color</label>
                  <div className="w-full h-8 rounded bg-white cursor-pointer border-2 border-surface-dark hover:border-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideoEditor;
