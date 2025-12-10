import React from 'react';

const ExportsAndSocial = () => {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="flex flex-col gap-4 rounded-xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-md">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-cyan-300">Versiones para Redes Sociales</h2>
          <div className="flex flex-col divide-y divide-cyan-500/20">
            {/* ListItem: YouTube Shorts */}
            <div className="flex items-center gap-4 py-4">
              <div className="text-red-500 flex items-center justify-center rounded-lg bg-white/10 shrink-0 size-12"><span className="material-symbols-outlined text-3xl">play_circle</span></div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-medium leading-normal text-white">YouTube Shorts</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal leading-normal text-cyan-300 text-glow-cyan">LISTO</p>
                  <p className="text-sm font-normal text-white/60">· Duración: 00:58</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm font-medium leading-normal text-cyan-300 hover:text-white">Previsualizar</button>
                <button className="rounded-md bg-[#FF00FF] px-4 py-2 text-sm font-bold text-white transition-all hover:glow-magenta">Exportar</button>
              </div>
            </div>
            {/* ListItem: TikTok */}
            <div className="flex items-center gap-4 py-4">
              <div className="text-white flex items-center justify-center rounded-lg bg-white/10 shrink-0 size-12"><span className="material-symbols-outlined text-3xl">music_note</span></div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-medium leading-normal text-white">TikTok</p>
                <div className="flex items-center gap-2">
                  <p className="animate-pulse text-sm font-normal leading-normal text-cyan-300 text-glow-cyan">EN PROCESO</p>
                  <p className="text-sm font-normal text-white/60">· Duración: 00:32</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm font-medium leading-normal text-cyan-300/50 cursor-not-allowed">Previsualizar</button>
                <button className="rounded-md bg-[#FF00FF]/50 px-4 py-2 text-sm font-bold text-white/50 cursor-not-allowed">Exportar</button>
              </div>
            </div>
            {/* ListItem: Instagram Reels */}
            <div className="flex items-center gap-4 py-4">
              <div className="text-pink-500 flex items-center justify-center rounded-lg bg-white/10 shrink-0 size-12"><span className="material-symbols-outlined text-3xl">movie</span></div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-medium leading-normal text-white">Instagram Reels</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal leading-normal text-magenta-400" style={{color:"#FF00FF", textShadow: "0 0 8px #FF00FF"}}>PENDIENTE</p>
                  <p className="text-sm font-normal text-white/60">· Duración: 00:58</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm font-medium leading-normal text-cyan-300 hover:text-white">Previsualizar</button>
                <button className="rounded-md bg-[#FF00FF] px-4 py-2 text-sm font-bold text-white transition-all hover:glow-magenta">Exportar</button>
              </div>
            </div>
            {/* ListItem: Facebook Reels */}
            <div className="flex items-center gap-4 py-4">
              <div className="text-blue-500 flex items-center justify-center rounded-lg bg-white/10 shrink-0 size-12"><span className="material-symbols-outlined text-3xl">ondemand_video</span></div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-medium leading-normal text-white">Facebook Reels</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal leading-normal text-cyan-300 text-glow-cyan">LISTO</p>
                  <p className="text-sm font-normal text-white/60">· Duración: 00:58</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm font-medium leading-normal text-cyan-300 hover:text-white">Previsualizar</button>
                <button className="rounded-md bg-[#FF00FF] px-4 py-2 text-sm font-bold text-white transition-all hover:glow-magenta">Exportar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="flex flex-col gap-6 rounded-xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-md">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-cyan-300">Metadatos de Publicación</h2>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <label className="mb-1 block text-sm font-medium text-cyan-200" htmlFor="title">Título</label>
              <input className="w-full rounded-md border border-cyan-500/30 bg-black/30 px-3 py-2 text-white placeholder-white/40 ring-cyan-400 focus:border-cyan-400 focus:ring-2" id="title" placeholder="El Misterio de la Materia Oscura..." type="text"/>
            </div>
            <div className="relative">
              <label className="mb-1 block text-sm font-medium text-cyan-200" htmlFor="description">Descripción</label>
              <textarea className="w-full rounded-md border border-cyan-500/30 bg-black/30 px-3 py-2 text-white placeholder-white/40 ring-cyan-400 focus:border-cyan-400 focus:ring-2" id="description" placeholder="Exploramos los confines del universo para desvelar..." rows="4"></textarea>
              <span className="absolute bottom-2 right-3 text-xs text-white/50">0/5000</span>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-cyan-200">Tags / Hashtags</label>
              <div className="flex flex-wrap items-center gap-2 rounded-md border border-cyan-500/30 bg-black/30 p-2">
                <span className="flex items-center gap-1 rounded bg-cyan-500/20 px-2 py-1 text-sm text-cyan-200">#Astronomia<button className="text-cyan-400">×</button></span>
                <span className="flex items-center gap-1 rounded bg-cyan-500/20 px-2 py-1 text-sm text-cyan-200">#Espacio<button className="text-cyan-400">×</button></span>
                <span className="flex items-center gap-1 rounded bg-cyan-500/20 px-2 py-1 text-sm text-cyan-200">#Ciencia<button className="text-cyan-400">×</button></span>
                <input className="min-w-24 flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none" placeholder="Añadir tag..." type="text"/>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-cyan-200" htmlFor="schedule">Programar Publicación</label>
              <div className="flex gap-2">
                <input className="w-full rounded-md border border-cyan-500/30 bg-black/30 px-3 py-2 text-white placeholder-white/40 ring-cyan-400 focus:border-cyan-400 focus:ring-2" type="date" value="2024-10-26"/>
                <input className="w-full rounded-md border border-cyan-500/30 bg-black/30 px-3 py-2 text-white placeholder-white/40 ring-cyan-400 focus:border-cyan-400 focus:ring-2" type="time" value="18:00"/>
              </div>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <div className="group relative flex flex-col items-center gap-3 rounded-lg border border-cyan-500/30 bg-black/30 p-4">
              <p className="text-sm font-medium text-cyan-200">Puntaje de Optimización MPA</p>
              <div className="relative flex items-center justify-center">
                <svg className="h-24 w-24 -rotate-90 transform">
                  <circle cx="48" cy="48" fill="none" r="40" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="8"></circle>
                  <circle cx="48" cy="48" fill="none" r="40" stroke="url(#scoreGradient)" strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round" strokeWidth="8"></circle>
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#FF00FF"}}></stop>
                      <stop offset="100%" style={{stopColor:"#00FFFF"}}></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute text-3xl font-bold text-white">85<span className="text-base text-white/70">/100</span></span>
              </div>
              <div className="absolute bottom-full mb-2 hidden w-64 rounded-lg border border-cyan-500/50 bg-[#050818] p-3 text-center text-sm text-white shadow-lg transition-opacity duration-300 group-hover:block">
                <p className="font-bold text-cyan-300">Consejos de Astro:</p>
                <p className="text-white/80">"¡Excelente! Para llegar a 100, considera añadir el hashtag #Universo en tu título."</p>
                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 transform bg-[#050818] border-b border-r border-cyan-500/50"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-cyan-400 text-black text-base font-bold leading-normal tracking-[0.015em] transition-all hover:glow-cyan">
                <span className="truncate">Programar Lanzamiento</span>
              </button>
              <div className="relative group">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 w-48 px-4 bg-[#FF00FF] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:glow-magenta">
                  <span className="truncate">Descargar a PC</span>
                </button>
                <div className="absolute bottom-full mb-2 hidden w-full flex-col overflow-hidden rounded-md border border-magenta-500/50 bg-[#050818] group-hover:flex">
                  <a className="px-4 py-2 text-sm text-white hover:bg-magenta-500/20" href="#">1080p (HD)</a>
                  <a className="px-4 py-2 text-sm text-white hover:bg-magenta-500/20" href="#">4K (UHD)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExportsAndSocial;
