import React from 'react';

const ScriptsAndSEO = () => {
  return (
    <main className="flex flex-col flex-1 p-8 gap-8">
      <div className="flex flex-wrap justify-between gap-3">
        <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Guiones y SEO</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <div className="holographic-panel rounded-xl p-6 flex flex-col gap-6">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Configuración de Misión</h2>
          <div className="flex flex-col gap-5">
            <label className="flex flex-col">
              <p className="text-primary/80 text-base font-medium leading-normal pb-2">Tema del video</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-primary/30 bg-primary/10 h-12 placeholder:text-white/40 px-4 text-base font-normal leading-normal transition-all duration-300 focus:border-primary focus:shadow-[0_0_8px_0_rgba(13,185,242,0.5)]" placeholder="Ej: ¿Qué son los agujeros negros?" value=""/>
            </label>
            <label className="flex flex-col">
              <p className="text-primary/80 text-base font-medium leading-normal pb-2">Audiencia</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-primary/30 bg-primary/10 h-12 placeholder:text-white/40 px-4 text-base font-normal leading-normal transition-all duration-300 focus:border-primary focus:shadow-[0_0_8px_0_rgba(13,185,242,0.5)]" placeholder="Ej: Entusiastas de la astronomía" value=""/>
            </label>
            <label className="flex flex-col">
              <p className="text-primary/80 text-base font-medium leading-normal pb-2">Tono del Guion</p>
              <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-primary/30 bg-primary/10 h-12 px-4 text-base font-normal leading-normal appearance-none bg-no-repeat bg-right transition-all duration-300 focus:border-primary focus:shadow-[0_0_8px_0_rgba(13,185,242,0.5)]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjyKvKPi0adHkH6tuutf9DOfNrdsVTb4nj1GfB-sNgHuqHYTz2g_93qWBXEf5D6zBL0EQmaQZhKUuVbdMHwnV36fHvR9GN9KduO4sD-Rr8tKelGbovwVYkoxVnTc8I3yvjnR68ulbPLRSyCMkac0P383pZFe8OOA8FPXrUaAp0Pi6RBGklVT4T4FPt5iPKRYDBVS2GyboONBfqFALldB6c68JsGwpZ8tCP3vBbzPy0mT2Mhisic3s2pwGlC3Jgd6voj-zj2ZArTMY")', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em'}}>
                <option>Informativo</option>
                <option>Humorístico</option>
                <option>Serio</option>
              </select>
            </label>
            <div className="flex items-center justify-between py-2">
              <p className="text-primary/80 text-base font-medium">Modo automático <span className="text-white/60">(24 palabras de voz de Astro)</span></p>
              <button className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-primary/20">
                <span className="inline-block w-4 h-4 transform bg-primary rounded-full transition-transform translate-x-1"></span>
              </button>
            </div>
          </div>
          <button className="flex mt-auto w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-background-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] transition-shadow button-glow">Generar guiones IA</button>
        </div>
        <div className="holographic-panel rounded-xl p-6 flex flex-col gap-6">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Guiones y Metadatos</h2>
          <div className="flex gap-2 border-b border-primary/20">
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-primary text-primary">YouTube Shorts</button>
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-white/50 hover:text-white transition-colors">TikTok</button>
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-white/50 hover:text-white transition-colors">Instagram Reels</button>
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-white/50 hover:text-white transition-colors">Facebook Reels</button>
          </div>
          <div className="flex flex-col gap-6 overflow-y-auto pr-2">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary">Guion de Astro</h3>
              <div className="font-mono text-sm text-white/80 p-4 bg-primary/10 rounded-lg space-y-3 border border-primary/20">
                <p><span className="text-primary font-bold">HOOK:</span> ¿Alguna vez te has preguntado qué sucede si caes en un agujero negro? Contrario a la creencia popular, no te aplastarías instantáneamente. Es algo mucho más extraño.</p>
                <p><span className="text-white/60 font-bold">ESCENA 1:</span> Imagina tu cuerpo estirándose como espagueti, un proceso llamado espaguetización. La gravedad en tus pies sería inmensamente más fuerte que en tu cabeza, alargándote infinitamente.</p>
                <p><span className="text-white/60 font-bold">ESCENA 2:</span> Mientras te estiras, el tiempo se deforma. Para un observador externo, parecerías congelado en el borde, pero para ti, los eones pasarían en un instante.</p>
                <p><span className="text-secondary font-bold">CTA:</span> Si te fascina el cosmos, síguenos para más viajes alucinantes por el universo. El próximo video te volará la mente. ¡No te lo pierdas!</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary">Metadatos SEO Avanzados</h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col col-span-2">
                  <p className="text-primary/80 text-sm font-medium pb-2">Título SEO</p>
                  <input className="form-input w-full rounded-lg text-white focus:outline-none border border-primary/30 bg-primary/10 h-10 placeholder:text-white/40 px-3 text-sm transition-all duration-300 focus:border-primary focus:shadow-[0_0_8px_0_rgba(13,185,242,0.5)]" value="¿Qué Pasa si Caes en un Agujero Negro? 🌌🚀 #ciencia"/>
                </label>
                <label className="flex flex-col col-span-2">
                  <p className="text-primary/80 text-sm font-medium pb-2">Descripción</p>
                  <textarea className="form-textarea w-full rounded-lg text-white focus:outline-none border border-primary/30 bg-primary/10 min-h-24 placeholder:text-white/40 p-3 text-sm transition-all duration-300 focus:border-primary focus:shadow-[0_0_8px_0_rgba(13,185,242,0.5)]" rows="3">Explora el misterio de los agujeros negros. Descubre qué es la espaguetización y cómo se deforma el tiempo en el evento más extremo del universo.</textarea>
                </label>
              </div>
              <div>
                <p className="text-primary/80 text-sm font-medium pb-2">Tags Sugeridos</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">#AgujeroNegro</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">#Espacio</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full border border-secondary/30">#Ciencia</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">#Astronomia</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">#Fisica</span>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4 pt-4">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-primary/80 text-sm font-medium pb-2">Puntaje de Optimización MPA</p>
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="gaugeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#0db9f2', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#ff00ff', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <circle className="gauge-ring" cx="50" cy="50" r="40"></circle>
                      <circle className="gauge-value" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">70%</span>
                  </div>
                </div>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-background-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] transition-shadow button-glow">Enviar a Production Studio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="holographic-panel rounded-lg p-4 mt-auto flex items-center gap-4 border border-secondary/30">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvEwGOGoKjAtwq1Ingz84b9SIoo69lzyvG8a2Ph-O8XNkfp-_B_TydZcgID3HwjZKW1DbmAo8pvmTGdrvXam_62lRsxey3opQp4JtKxONuYJf2-WkKZru0L2fSHdtfvAy6gQIjCK6DMYKWUeV7A6b-G49CcLR8QONPeOPr-ddUiu99rBc6poZWnAZKZwls0wdZjDAcWFNEXcKB7GyDwypqFbPU1VoLpMok043ruoTX5SWipubvrY9a0QybsILS51MlIXroNlL4HoY")'}}></div>
        <p className="text-sm text-white/80"><span className="font-bold text-secondary">Consejo de Astro:</span> Para maximizar el alcance, intenta usar 3 hashtags de alto volumen y 2 hashtags de nicho. El algoritmo favorece esta combinación para descubrir nuevas audiencias. ¡Buena suerte!</p>
      </div>
    </main>
  );
};

export default ScriptsAndSEO;
