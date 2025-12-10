import React from 'react';

const VideoAnalytics = () => {
  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-8 py-4 backdrop-blur-sm bg-background-dark/50 sticky top-0 z-10">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">MPA Studio - The Viral Engine</h2>
        </div>
        <div className="flex flex-1 justify-end items-center gap-6">
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-panel-dark text-white/80 hover:text-white hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/50 ring-offset-2 ring-offset-background-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNqh2MA275Gs17C-ntW5y72r3jCWpGp0OtyW4s4NKbS8DOT3y7TQidqjnUSBnUl0tY8jpcayU0fohWZvcGEo4_gtaifzVOBGk9YSpd_d5UQn6Xq6dnFEAtsF8x05UcS0Z3QYZwlCLj4wttjz2DqiEpVgdggPhRBXYPi5dPjQTIdvWSrRhCzXDTsSYmN6tfa7CcVrWO8k--Wo7LlkLIwlwyJtL2kqQMu8eRmYbxHO3_Bk8l6lrlJNf6SHqXhmLrfaUnjow2FxbzfRE")'}}></div>
        </div>
      </header>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Analíticas de Video</h1>
          <div className="flex gap-2">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-panel-dark text-text-light/80 hover:text-white hover:bg-primary/20 px-4 transition-colors">
              <p className="text-sm font-medium leading-normal">Últimos 28 días</p>
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-panel-dark text-text-light/80 hover:text-white hover:bg-primary/20 px-4 transition-colors">
              <p className="text-sm font-medium leading-normal">Todas las plataformas</p>
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <div className="bg-panel-dark p-6 rounded-xl holographic-border backdrop-blur-sm">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Rendimiento General</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/20 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-text-light/70 mb-1">Vistas Totales</p>
                  <p className="text-3xl font-bold text-primary">1.2M</p>
                  <div className="flex items-center text-primary text-sm mt-1">
                    <span className="material-symbols-outlined text-base">arrow_upward</span>
                    <span>15.2%</span>
                  </div>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-text-light/70 mb-1">Tiempo de Visualización (h)</p>
                  <p className="text-3xl font-bold text-primary">80.5K</p>
                  <div className="flex items-center text-primary text-sm mt-1">
                    <span className="material-symbols-outlined text-base">arrow_upward</span>
                    <span>8.1%</span>
                  </div>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-text-light/70 mb-1">Engagement Total</p>
                  <p className="text-3xl font-bold text-primary">250K</p>
                  <div className="flex items-center text-secondary text-sm mt-1">
                    <span className="material-symbols-outlined text-base">arrow_downward</span>
                    <span>-2.4%</span>
                  </div>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-text-light/70 mb-1">Nuevos Suscriptores</p>
                  <p className="text-3xl font-bold text-primary">12.3K</p>
                  <div className="flex items-center text-primary text-sm mt-1">
                    <span className="material-symbols-outlined text-base">arrow_upward</span>
                    <span>21.7%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-panel-dark p-6 rounded-xl holographic-border backdrop-blur-sm">
                <h3 className="text-white text-lg font-bold mb-4">Vistas por Plataforma</h3>
                <img className="w-full h-auto rounded-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD224CR922IRO8WFoHG3DRDgya1IM9uJD4uCUhKE98YT3PdCr7YNpShlTN0fYII9KBivgWBi40Mtf7P8Ed8atmq_g8aPYqNXOzWAEXAiyQE5HLk0K059Jk8mjydv8zF96P4G6saBeNPpd8L0oMqUUs7H2B7gtAHK37TrC1axLqOLj9VfHllN5viwGsYmcHFWg8m-yuJIHfs432RKyC6foDnNd5O1Bzg_zi5heyObq-nl74sSU4-tt9loFcKMmJSJZ2reo6FtLLpJmE"/>
              </div>
              <div className="bg-panel-dark p-6 rounded-xl holographic-border backdrop-blur-sm">
                <h3 className="text-white text-lg font-bold mb-4">Engagement por Video</h3>
                <img className="w-full h-auto rounded-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLE0H9YSYbJb0NIG4ScEKNWABNHV9h8j30K58mZDRJbiRMaw1DkSIMyAMLhz9BjnbtIVlEQ4gk4OeefKyQojI-6-0NZGbTCfd7RpbQbLf9Dp5d5hBA1y22ai89aOXSe8p1j13eQh6pvOUKBhRxLFabshoFKOavQwersuYVGYYuNL6pf7yLFNdtQ7bSdFe-5068ZEmHRSpxDJRfp176qBMZQHzws6rlf2z5cDywL-udL-FSRF4XEkZy8J2V_5KM5Hfall7jAfXGGdA"/>
              </div>
            </div>
            <div className="bg-panel-dark p-6 rounded-xl holographic-border backdrop-blur-sm">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Videos Principales</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-text-light/70 uppercase border-b border-primary/20">
                    <tr>
                      <th className="py-3 pr-6" scope="col">Video</th>
                      <th className="px-6 py-3" scope="col">Vistas</th>
                      <th className="px-6 py-3" scope="col">Likes</th>
                      <th className="px-6 py-3" scope="col">Comentarios</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10 hover:bg-primary/5">
                      <td className="py-4 pr-6 font-medium text-white whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img className="w-20 h-11 object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsI04umCKuJIjRDGvLi6kPYtdA_yEYh9oDEJH3duFffjsLMYfsIx8Ujb80y2Fjvfl05G3M5g4Ib8AbmlXXU63XJVdfV1Dg_3Bhn4ffF_aonjRDcZiUkiX61263Y2s99onEZCqRL_fduKKLt1mabRwZI4Cr2VMm_eFTFYy6pm_Bm0f45wTfMNTtZ3Ve-ZB6DkaOdpuI4yEakr1nyKb6yQf9MtqORLuODnqZh2vZTd-rzGOSeD3IFkgvF7Ry2EgJBDhxLe9l_mQS3M"/>
                          <span>El Misterio de los Agujeros Negros</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">450,123</td>
                      <td className="px-6 py-4">22.1k</td>
                      <td className="px-6 py-4">1.8k</td>
                    </tr>
                    <tr className="border-b border-primary/10 hover:bg-primary/5">
                      <td className="py-4 pr-6 font-medium text-white whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img className="w-20 h-11 object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7AODYvXUZXtG1kywtRskq9FwJ17DRfPtvIOX2yw6sMp1uF8rmFVYdikm-0dG3v0PHpjPqn-EHmyH68iAzEGRUSPJkkLAopbpNlGWMBrorizn1hyqDWZ_37DhX4qSVmk2Ss-w06oLvNvrao7vfdnooaTSwniaDMAZ1dlADXQyY9QgMndSdLN3pLAf-kJYINItYmGDJeDqe-zlsmjjdZXeivUSqDkRJ2r9KENRxAvJtHMPPMYN3syoyrT5DhkWhVyHYvGULfk7mCBM"/>
                          <span>Explorando las Nebulosas de Orión</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">312,987</td>
                      <td className="px-6 py-4">18.5k</td>
                      <td className="px-6 py-4">2.5k</td>
                    </tr>
                    <tr className="hover:bg-primary/5">
                      <td className="py-4 pr-6 font-medium text-white whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img className="w-20 h-11 object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUpY0W3ewZN5Udp6mZ7mK6Gj5kdMdQwV5YlGi76HPIN6oqMYnPg6qEhd8oRolRcxsBtrP4SllAC1XZ2bYBKCqhQLYF8IdMSWD94n2-vN-d1OvKGm4HAwIqt8eU2KCunnmyA6X5RZ1SBp51pYmsC9NupRILzE0kMcf7EQjl9i8cFHn2LMKxkPBiLxLVW6_8IdShgZ91Mg2HGTfLnWkIoM6Ty0Bvftax5Q42LnaZLMY7ln-Rk0XOkfKJ_b-mzNWstlVbdHaKdlBgfBM"/>
                          <span>¿Hay Vida en Marte? Últimos Descubrimientos</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">255,456</td>
                      <td className="px-6 py-4">15.2k</td>
                      <td className="px-6 py-4">1.2k</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <aside className="col-span-12 lg:col-span-4">
            <div className="bg-panel-dark p-6 rounded-xl holographic-border backdrop-blur-sm sticky top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-[0_0_20px_theme(colors.primary)]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhxj9Q6FcGPyxB-ZwxWzRO_Bg5CRruXmBkV_zNwEvJ96BgqGqoiAlxsbCS0Z7bPAq5Nkh4VFQH6oqfIXIe7AVD5MAYB8LMJvkfe4rbh65yHDds8pExQXI0E4bkIuLbLVOByZOFfDO64dZLErclDm4FSkzl68MiAOkFcqYdrLNqI6OWVYS8kaLa7fsaS1H97XEUL2k6RsuDkLPBfzciN7BfQXEet_WQkehb8MYo1BMy69tgQcUuEcEWDPLBBsE6Y9D0wYc9XiR-I5s")'}}></div>
                <div>
                  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Insights de Astro</h2>
                  <p className="text-sm text-primary">Análisis en tiempo real</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-text-light/90">
                <li className="flex items-start gap-3 p-3 bg-black/20 rounded-md">
                  <span className="material-symbols-outlined text-primary mt-1">rocket_launch</span>
                  <span>Tus videos sobre <b className="text-primary">agujeros negros</b> tienen un 25% más de tiempo de visualización. ¡Planifica una serie!</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-black/20 rounded-md">
                  <span className="material-symbols-outlined text-primary mt-1">trending_up</span>
                  <span>El engagement en videos cortos <b className="text-primary">(Shorts/Reels)</b> ha crecido un 40% este mes. Capitaliza esta tendencia.</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-black/20 rounded-md">
                  <span className="material-symbols-outlined text-secondary mt-1">schedule</span>
                  <span>La retención de audiencia decae después del minuto 3 en tus videos largos. Considera introducciones más dinámicas.</span>
                </li>
              </ul>
              <button className="mt-6 w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined">auto_awesome</span>
                Profundizar Análisis
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default VideoAnalytics;
