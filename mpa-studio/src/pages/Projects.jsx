import React from 'react';

const Projects = () => {
  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto">
      <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-10 py-4 bg-background-dark/50 backdrop-blur-lg">
        <div className="flex items-center gap-4">
          <h2 className="text-primary text-xl font-bold leading-tight tracking-[-0.015em] animate-softGlow">Proyectos</h2>
        </div>
        <div className="flex flex-1 justify-end items-center gap-6">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-[#102123] text-sm font-bold leading-normal tracking-[0.015em] shadow-glow-primary animate-pulse transition-transform hover:scale-105">
            <span className="material-symbols-outlined mr-2">add_circle</span>
            <span className="truncate">Nuevo Proyecto</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/50 shadow-glow-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWvsyO1NpuITxAeuD_L4LuihvUOwJExjfmhRUmwWyPM1Rr5TeIROY4NklOjHxZAd49w4xjubzUzDmPPzBr3lfKMcHqXwrYjft6uCcvCKYvT9jWkvaq8jd4EZGd-bFu4xYZCe166LC8Qs6RdtDE0Sm1HZbrUy91eau2TeNDQ_XMC5KfGH5X62Yd6Tvv7n7IEshiadCi0RtGFAmmnw9fStRNA7hBPyUsVDDT3uQL5Odn9j0dWRP1joW2AXNJb4gXCiNnILS38T5wXcY")'}}></div>
        </div>
      </header>
      <div className="flex-1 flex flex-col p-6 lg:p-10 gap-6">
        <div className="flex gap-4 p-3 rounded-lg border border-primary/20 bg-black/30 backdrop-blur-sm">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-4 transition-colors hover:bg-primary/30">
            <p className="text-primary text-sm font-medium leading-normal">ESTADO</p>
            <span className="material-symbols-outlined text-primary text-xl">arrow_drop_down</span>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-4 transition-colors hover:bg-primary/30">
            <p className="text-primary text-sm font-medium leading-normal">PLATAFORMA</p>
            <span className="material-symbols-outlined text-primary text-xl">arrow_drop_down</span>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-4 transition-colors hover:bg-primary/30">
            <p className="text-primary text-sm font-medium leading-normal">ORDENAR POR</p>
            <span className="material-symbols-outlined text-primary text-xl">arrow_drop_down</span>
          </button>
        </div>
        <div className="grid grid-cols-1 @[600px]:grid-cols-2 @[900px]:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-black/30 p-4 backdrop-blur-sm hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300">
            <div className="bg-cover bg-center flex flex-col rounded-lg justify-end aspect-video" style={{backgroundImage: 'linear-gradient(0deg, rgba(16, 33, 34, 0.6) 0%, rgba(16, 33, 34, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsPWi59A7iDbFddYZILqb_sl232i4Ys7dxVWueGDUbdcrvALSqeczOplk6ZlUAxkGI_tha2FfDkcHhRlvmV3zMBTftlc02JKAPjWwKodoZ7qaXaZsVKnngVDr-eJAZotXa7aHuY8DWK8MA6DOaNje4G6EzK_VhK02WrLpWGjQQRRiEHTiPKJo-_k1PLtEsV1RIzy4l6mdpt-IogkR-2lvYkHjfnqwP0-WrFezPJFnoOSWbu3i6W1PZvUmjAvyiHnJjVzTFjYQzDOM")'}}>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-mono text-primary/70">MPA-0012</p>
                <h3 className="text-white text-lg font-bold leading-tight">Misión Alpha-1</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Guion OK</p>
                </div>
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Assets OK</p>
                </div>
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-secondary/20 px-3">
                  <p className="text-secondary text-xs font-medium">Edición Final</p>
                </div>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full" style={{width: "66%"}}></div>
              </div>
              <div className="flex justify-between items-center text-xs text-primary/70">
                <p>Última Mod: 2024-07-21 14:30</p>
                <div className="flex gap-2 text-primary text-lg">
                  <span>YT</span><span>TT</span>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button className="flex-1 flex items-center justify-center rounded-lg h-9 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
                <button className="flex-1 flex items-center justify-center rounded-lg h-9 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-colors">
                  <span className="truncate">Editar en Video Lab</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-black/30 p-4 backdrop-blur-sm hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300">
            <div className="bg-cover bg-center flex flex-col rounded-lg justify-end aspect-video" style={{backgroundImage: 'linear-gradient(0deg, rgba(16, 33, 34, 0.6) 0%, rgba(16, 33, 34, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCoUSAc-4Go7gO3ltaDEl20Z0o2kxZGTFzJlrSmgN55joSVf3FL4BxzhkcGrpFNwZ9DG9r39tB0NKDhWyDSJ2n2MHesTa5qc6Edm7qldo1yNvmAAgXGbEkarrC5ZRwb_AdpF6wkxKRZlyKc_wClZQN55LTTMjkbFuJMilQUzH1bXm2GG_2qlj-zqmeigVRItH7bcSxzCB_FJTBi8-GuNlUAJotwGSgR-tpBI0UkxEolQU52ZZyRXZ54sBx3Bt1kUDmxyl9jXS6ULw")'}}>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-mono text-primary/70">MPA-0011</p>
                <h3 className="text-white text-lg font-bold leading-tight">Agujeros Negros - Explicación</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Guion OK</p>
                </div>
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Assets OK</p>
                </div>
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Edición Final</p>
                </div>
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Subtítulos OK</p>
                </div>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full" style={{width: "100%"}}></div>
              </div>
              <div className="flex justify-between items-center text-xs text-primary/70">
                <p>Última Mod: 2024-07-20 18:00</p>
                <div className="flex gap-2 text-primary text-lg">
                  <span>IG</span><span>FB</span>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button className="flex-1 flex items-center justify-center rounded-lg h-9 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
                <button className="flex-1 flex items-center justify-center rounded-lg h-9 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-colors">
                  <span className="truncate">Editar en Video Lab</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-black/30 p-4 backdrop-blur-sm hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300">
            <div className="bg-cover bg-center flex flex-col rounded-lg justify-end aspect-video" style={{backgroundImage: 'linear-gradient(0deg, rgba(16, 33, 34, 0.6) 0%, rgba(16, 33, 34, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRHknLJmnF6uJaDvCx1mmS6rzTG9sHIC5Ujublnwfi1Xzhq3ihZ1yvEsjNsXU5Ph9mdAYxXKDRkxxY7pP7-m88iKze2T2SD1m99Ht6xOXNlnSg2FyQjZRTOy4mY-ObH0OY7yZlw7ObLjhVZTL0GxtSzDg3mL40hhkD0hmsCYOdVwFAN0OJ_iwAZ3Y9iaf3Rn2oxQuKdsXAGTpT80y5ijdwkixmnzo14I5ztEstz5gZOog6CDS302wRf5hG6TC0-dGeQAc0TjeJYks")'}}>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-mono text-primary/70">MPA-0010</p>
                <h3 className="text-white text-lg font-bold leading-tight">Nebulosas Estelares</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-green-500/20 px-3">
                  <p className="text-green-400 text-xs font-medium">Guion OK</p>
                </div>
                <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-secondary/20 px-3">
                  <p className="text-secondary text-xs font-medium">Assets OK</p>
                </div>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full" style={{width: "45%"}}></div>
              </div>
              <div className="flex justify-between items-center text-xs text-primary/70">
                <p>Última Mod: 2024-07-22 09:15</p>
                <div className="flex gap-2 text-primary text-lg">
                  <span>YT</span>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button className="flex-1 flex items-center justify-center rounded-lg h-9 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
                <button className="flex-1 flex items-center justify-center rounded-lg h-9 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-colors">
                  <span className="truncate">Editar en Video Lab</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
