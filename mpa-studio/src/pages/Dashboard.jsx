import React from 'react';

const Dashboard = () => {
  return (
    <div className="layout-content-container flex flex-col w-full max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-surface-dark p-6 rounded-xl border border-border-dark">
        <div className="flex flex-col gap-3">
          <p className="text-text-primary text-2xl font-bold leading-tight tracking-[-0.015em]">Bienvenido a MPA Studio</p>
          <p className="text-text-secondary text-base font-normal leading-normal max-w-lg">La plataforma para automatizar tus videos cortos. Genera guiones, produce y exporta contenido viral con la ayuda de IA.</p>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary-magenta text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Nuevo proyecto IA</span>
        </button>
      </div>
      <h2 className="text-text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 pb-3 pt-5">Mis Proyectos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        <div className="flex flex-col gap-4 bg-surface-dark p-4 rounded-xl border border-border-dark">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHI_Z8TRSWdQBC2VRvqQ4ElrivHRUB52jP4z0IJVs7-TW8IhLm-iUSeFaChme-rFTevdX2ofvBTPa-qxcQKKP4uX2KowHQ1xKgFqD-hR8wAF6Xng349FdXLwi8m0p1fE1z30Ixs11DhuBHq5T4WbFSdAggUzNTvkTp1BAooLj4z-hVZoGu3VDgJkIr93huoqIpL_ahbpFz12BkqthqckZ9utL6AzXy_RybvT-wgW83QBouHApW27zBfV12kyoOIZFsJoRBMRU9wmA")'}}></div>
          <div className="flex flex-col flex-grow">
            <p className="text-text-primary text-base font-medium leading-normal mb-2">Curiosidades de Júpiter</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Guion</span>
              <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Assets</span>
              <span className="inline-block px-2 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">Edición</span>
              <span className="inline-block px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">Listo para publicar</span>
            </div>
            <div className="flex items-center text-text-secondary text-sm mt-auto">
              <span className="material-symbols-outlined text-base mr-1">play_circle</span> Shorts
              <span className="material-symbols-outlined text-base ml-3 mr-1">music_note</span> TikTok
              <span className="material-symbols-outlined text-base ml-3 mr-1">movie</span> Reels
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-surface-dark p-4 rounded-xl border border-border-dark">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeLZqsSLfhAhFXzgi58-x3YF-RxKUJ7gzh-aj4qk9ZUDwQlBiZUW1DTV1gYDoc77swMxNxBn07-U0D5AcqnZrU6Ya6Ffg-raoNu_H8gT4Aq4muBsFskpgMrEa8USBgOg4Cs30F-Y3xxUy24Nc0jn4c0kc5g1H2ct4OBmN8ZmEeTqqzqlruDU8GgvYbd5s0tYF12kZhNGbaF-IIP775Th7PUYD4P566ksJL4Xr2c_BTP44Hu9b_t3Rr5U5mipwBBGG8HEJD2JeBC1Q")'}}></div>
          <div className="flex flex-col flex-grow">
            <p className="text-text-primary text-base font-medium leading-normal mb-2">Misterios de los Agujeros Negros</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Guion</span>
              <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Assets</span>
              <span className="inline-block px-2 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">Edición</span>
            </div>
            <div className="flex items-center text-text-secondary text-sm mt-auto">
              <span className="material-symbols-outlined text-base mr-1">play_circle</span> Shorts
              <span className="material-symbols-outlined text-base ml-3 mr-1">music_note</span> TikTok
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-surface-dark p-4 rounded-xl border border-border-dark">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk8v84fJE9onpuFilWDRcOaNtWE17yMGDIGrAhBM5rU-aqPWpYLtaO8f_1uM1QzsxfJOKJk_jgV_3mLK4r9mf7HJP6slvjCM230pJ2-EWIGkgaAo1o43rkS-KbEaH0bk5d8lnt9ZNKE4UTwueYp7tBrOLLu1lP5BazeVPIQU4YGwtJboGAtGiC7W9P_KT0zy7e3IlfWtI_AkWAcm85munak_jrODfaBhUAGmZA_vjxCM_MA4c83fDKfCV3YSfUHxBDKtGIIU9T1DY")'}}></div>
          <div className="flex flex-col flex-grow">
            <p className="text-text-primary text-base font-medium leading-normal mb-2">La Misión Artemis a la Luna</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Guion</span>
              <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Assets</span>
            </div>
            <div className="flex items-center text-text-secondary text-sm mt-auto">
              <span className="material-symbols-outlined text-base mr-1">play_circle</span> Shorts
              <span className="material-symbols-outlined text-base ml-3 mr-1">movie</span> Reels
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 bg-surface-dark p-4 rounded-xl border border-border-dark">
          <div>
            <h3 className="font-bold text-white mb-2">Estadísticas totales</h3>
            <div className="flex items-center text-text-secondary mb-2">
              <span className="material-symbols-outlined mr-2 text-primary-magenta">videocam</span>
              <span><strong className="text-white">28</strong> videos generados</span>
            </div>
            <div className="flex items-center text-text-secondary">
              <span className="material-symbols-outlined mr-2 text-secondary-cyan">visibility</span>
              <span><strong className="text-white">10.6M</strong> vistas estimadas</span>
            </div>
          </div>
          <button className="w-full mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary-cyan text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">Ver analíticas</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
