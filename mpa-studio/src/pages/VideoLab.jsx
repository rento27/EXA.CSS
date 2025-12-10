import React from 'react';

const VideoLab = () => {
  return (
    <main className="flex-1 overflow-y-auto p-10">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Scene Card 1 */}
        <div className="bg-panel border border-panel-border rounded-xl p-6 backdrop-blur-sm">
          <h1 className="text-primary tracking-widest text-2xl font-bold leading-tight font-mono">ESCENA 1</h1>
          <p className="text-text-main text-base font-normal leading-normal pt-2 pb-6">Un fragmento corto del guion de Astro aparecerá aquí en una fuente digital limpia. Hablando sobre la Nebulosa de Orión.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">Imagen inicial</h3>
              <div className="aspect-[9/16] bg-black/50 border-2 border-dashed border-cyan-500/20 rounded-lg flex items-center justify-center">
                <p className="text-text-dim">9:16 Preview</p>
              </div>
              <input className="w-full bg-[#0A0D22] border border-cyan-500/30 rounded-md px-3 py-2 text-text-main placeholder-text-dim/70 transition-all input-glow" placeholder="Prompt de imagen inicial" type="text"/>
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold border border-primary/50 hover:bg-primary/40 hover:glow-cyan-sm transition-all">Generar imagen inicial</button>
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">Imagen final</h3>
              <div className="aspect-[9/16] bg-black/50 border-2 border-dashed border-cyan-500/20 rounded-lg flex items-center justify-center">
                <p className="text-text-dim">9:16 Preview</p>
              </div>
              <input className="w-full bg-[#0A0D22] border border-cyan-500/30 rounded-md px-3 py-2 text-text-main placeholder-text-dim/70 transition-all input-glow" placeholder="Prompt de imagen final" type="text"/>
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold border border-primary/50 hover:bg-primary/40 hover:glow-cyan-sm transition-all">Generar imagen final</button>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <div className="bg-black/50 border border-cyan-500/20 rounded-lg p-4 font-mono text-sm text-cyan-300">
              <span className="text-cyan-500">// PROMPT VEO 3.1</span><br/>
              <span>A breathtaking cinematic zoom out from a close-up of the Orion Nebula, revealing its vast, colorful gas clouds and newborn stars, transitioning into a wide shot of the Milky Way galaxy.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex-grow flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/80 text-background-dark text-sm font-bold glow-cyan-lg hover:bg-primary transition-all">Analizar imágenes y crear prompt de video (Veo 3.1)</button>
              <button className="flex-grow flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/80 text-background-dark text-sm font-bold glow-cyan-lg hover:bg-primary transition-all">Generar clip de video IA</button>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2 text-sm font-bold px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/50">
                <span className="material-symbols-outlined text-base">pending</span>
                <span>PENDIENTE</span>
              </div>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-secondary/80 text-white text-sm font-bold glow-magenta-lg hover:bg-secondary transition-all">Enviar a Editor</button>
            </div>
          </div>
        </div>
        {/* Scene Card 2 */}
        <div className="bg-panel border border-panel-border rounded-xl p-6 backdrop-blur-sm">
          <h1 className="text-primary tracking-widest text-2xl font-bold leading-tight font-mono">ESCENA 2</h1>
          <p className="text-text-main text-base font-normal leading-normal pt-2 pb-6">Un segundo fragmento del guion, quizás describiendo un viaje a través de un campo de asteroides.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">Imagen inicial</h3>
              <div className="aspect-[9/16] bg-black/50 border-2 border-dashed border-cyan-500/20 rounded-lg flex items-center justify-center">
                <img className="object-cover w-full h-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0n_1YMAHFRMOb0utY9tWoouomP2EI5ZX5Ki5ioB9HWR0MAMbBtJTQvA1ysWIPjCK7Jzmy7Q5Qsim7If07YhjAYyjhm1HEa7WEeBGmeU-86bPVOeCHe_r8MEgywXz3XQvtVzyLjjn6jGJ3Ata6KKTbCR4WpBbA_qot-VMDKSvbP0l-HpfoidETNaPJm4lCOk06EKB6HciGeMGW9Ml3x0KLXQcx-OePiqCGCfbf71yImP1smigKeKmYl8rPPdlU3vg3QMXR-BKnKg"/>
              </div>
              <input className="w-full bg-[#0A0D22] border border-cyan-500/30 rounded-md px-3 py-2 text-text-main placeholder-text-dim/70 transition-all input-glow" type="text" value="Close up on a single, large asteroid tumbling through space"/>
              <div className="w-full flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-600/30 text-gray-400 text-sm font-bold border border-gray-500/50">
                <span className="material-symbols-outlined text-lg mr-2 animate-spin">progress_activity</span>
                Generando...
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">Imagen final</h3>
              <div className="aspect-[9/16] bg-black/50 border-2 border-dashed border-cyan-500/20 rounded-lg flex items-center justify-center">
                <img className="object-cover w-full h-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClqFGm_jKlBgPFbI_seATRweojYMNB2toVzjYT1sYaXw2n0_PAJwKqIqpNIC7-IK1OqVR3L8tTNipDut3o6twc2uurFXQjSZL_GcoHanRGKxEZYP7c5h0Tml_5SdSYB0nSQMNjVheUN2pFZZzsU4TJIWnFBYicabcHjTJYkim7vno0gShLE9hrzsvOO-VdheNWIxOgZfPUTLaPV3s3X_y_UojO2mUcIB9gGIBc8ZFPS5RXn7LZ1dYBQVmuFrUS8yZssXZsCW1SoJA"/>
              </div>
              <input className="w-full bg-[#0A0D22] border border-cyan-500/30 rounded-md px-3 py-2 text-text-main placeholder-text-dim/70 transition-all input-glow" type="text" value="A small spaceship navigating through a dense asteroid field"/>
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold border border-primary/50 hover:bg-primary/40 hover:glow-cyan-sm transition-all">Generar imagen final</button>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <div className="bg-black/50 border border-cyan-500/20 rounded-lg p-4 font-mono text-sm text-cyan-300">
              <span className="text-cyan-500">// PROMPT VEO 3.1</span><br/>
              <span>Dynamic camera shot following a spaceship as it dodges and weaves through a dense asteroid field, with lens flares from a distant sun.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex-grow flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/80 text-background-dark text-sm font-bold glow-cyan-lg hover:bg-primary transition-all">Analizar imágenes y crear prompt de video (Veo 3.1)</button>
              <button className="flex-grow flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/80 text-background-dark text-sm font-bold glow-cyan-lg hover:bg-primary transition-all">Generar clip de video IA</button>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2 text-sm font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/50">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>CLIP LISTO</span>
              </div>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-secondary/80 text-white text-sm font-bold glow-magenta-lg hover:bg-secondary transition-all">Enviar a Editor</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideoLab;
