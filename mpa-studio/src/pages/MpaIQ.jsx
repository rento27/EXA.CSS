import React from 'react';

const MpaIQ = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex h-full grow flex-col">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-5">
          <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border-dark pb-4">
            <div className="flex items-center gap-4 text-white">
              <img alt="Logo de Mi Pequeño Astronauta" className="h-10 w-10 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASxHh2E07592TssT9F2HPu8XfbvjkEE4ycOLN5amJniI5z3EGV-xbmjanqfO218zcPZsXf2QAiuDK4604DUCcJNkhmdGpehY7Y5JA81rCHcbtJ-FCbN_qNLFSSrNrCq9fWDgDM5c9TzbpE1hbYKmQknLD9I8faLyEkEMP4TK92bqS1CVBpv_oYBtfOFbniupWV6bt0_pmfX7Gv9XlVsLjls7w7LHikb23pJwLJyvlo4TEYKwowlLZ8AfDq-oCQKdiTPvMy7-PzVTY"/>
              <h1 className="text-xl font-bold">MPA IQ</h1>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 text-primary text-sm font-bold shadow-glow-primary">
                <p>YouTube</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-dark/60 hover:bg-card-dark px-4 text-text-muted hover:text-text-light transition-colors">
                <p>TikTok</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-dark/60 hover:bg-card-dark px-4 text-text-muted hover:text-text-light transition-colors">
                <p>Instagram Reels</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-dark/60 hover:bg-card-dark px-4 text-text-muted hover:text-text-light transition-colors">
                <p>Facebook Reels</p>
              </button>
            </div>
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-card-dark pl-4 pr-2 text-sm font-medium text-text-light">
              <p>Últimos 28 días</p>
              <span className="material-symbols-outlined text-text-muted">expand_more</span>
            </button>
          </header>
          <main className="flex-1 py-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2 rounded-lg p-5 bg-card-dark border border-border-dark">
                <p className="text-base font-medium text-text-muted">Vistas totales</p>
                <p className="text-3xl font-bold text-text-light">1.2M</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-positive text-base">arrow_upward</span>
                  <p className="text-positive text-sm font-medium">+15.2%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-lg p-5 bg-card-dark border border-border-dark">
                <p className="text-base font-medium text-text-muted">Tiempo de reproducción (h)</p>
                <p className="text-3xl font-bold text-text-light">8.5K</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-negative text-base">arrow_downward</span>
                  <p className="text-negative text-sm font-medium">-2.1%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-lg p-5 bg-card-dark border border-border-dark">
                <p className="text-base font-medium text-text-muted">Retención promedio</p>
                <p className="text-3xl font-bold text-text-light">65%</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-negative text-base">arrow_downward</span>
                  <p className="text-negative text-sm font-medium">-0.5%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-lg p-5 bg-card-dark border border-border-dark">
                <p className="text-base font-medium text-text-muted">Suscriptores nuevos</p>
                <p className="text-3xl font-bold text-text-light">+2,345</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-positive text-base">arrow_upward</span>
                  <p className="text-positive text-sm font-medium">+8.9%</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="rounded-xl bg-card-dark border border-border-dark p-6">
                  <h2 className="text-xl font-bold text-text-light">Radar de ideas cósmicas</h2>
                  <p className="text-sm text-text-muted mt-1">Generadas con IA según el rendimiento del canal y eventos astronómicos.</p>
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg p-4 bg-background-dark border border-border-dark">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="inline-block rounded bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">Alta</span>
                          <span className="inline-block rounded bg-secondary/20 px-2 py-0.5 text-xs font-bold text-secondary">30-45 s</span>
                        </div>
                        <p className="mt-2 font-medium text-text-light">¿Qué pasaría si cayeras en un agujero negro cercano a la Tierra?</p>
                        <div className="mt-2 flex items-center gap-2 text-text-muted">
                          <span className="material-symbols-outlined text-base">smart_display</span>
                          <span className="material-symbols-outlined text-base">music_note</span>
                        </div>
                      </div>
                      <button className="flex h-10 w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        <span className="material-symbols-outlined text-lg">add_circle</span>Crear proyecto
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg p-4 bg-background-dark border border-border-dark">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="inline-block rounded bg-yellow-500/20 px-2 py-0.5 text-xs font-bold text-yellow-400">Media</span>
                          <span className="inline-block rounded bg-secondary/20 px-2 py-0.5 text-xs font-bold text-secondary">45-60 s</span>
                        </div>
                        <p className="mt-2 font-medium text-text-light">Explorando las lunas de Júpiter en 60 segundos.</p>
                        <div className="mt-2 flex items-center gap-2 text-text-muted">
                          <span className="material-symbols-outlined text-base">smart_display</span>
                          <span className="material-symbols-outlined text-base">music_note</span>
                          <span className="material-symbols-outlined text-base">camera_roll</span>
                        </div>
                      </div>
                      <button className="flex h-10 w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        <span className="material-symbols-outlined text-lg">add_circle</span>Crear proyecto
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg p-4 bg-background-dark border border-border-dark">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="inline-block rounded bg-blue-500/20 px-2 py-0.5 text-xs font-bold text-blue-400">Experimental</span>
                          <span className="inline-block rounded bg-secondary/20 px-2 py-0.5 text-xs font-bold text-secondary">15-25 s</span>
                        </div>
                        <p className="mt-2 font-medium text-text-light">Un dato curioso sobre la constelación de Orión.</p>
                        <div className="mt-2 flex items-center gap-2 text-text-muted">
                          <span className="material-symbols-outlined text-base">smart_display</span>
                        </div>
                      </div>
                      <button className="flex h-10 w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        <span className="material-symbols-outlined text-lg">add_circle</span>Crear proyecto
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-card-dark border border-border-dark p-6">
                  <h2 className="text-xl font-bold text-text-light">Últimos videos publicados</h2>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-xs text-text-muted uppercase">
                        <tr>
                          <th className="py-3 pr-3" colspan="2" scope="col">Video</th>
                          <th className="px-3 py-3" scope="col">Fecha</th>
                          <th className="px-3 py-3" scope="col">Vistas (48h)</th>
                          <th className="px-3 py-3" scope="col">Retención</th>
                          <th className="pl-3 py-3" scope="col">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border-dark">
                          <td className="py-3 pr-2"><img alt="Miniatura de video sobre agujeros negros" className="h-10 w-16 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCc0EbEWi1uV_gJwZNB8V2fUEIGLKazsONd3jjakqL0PsJa7_QDnAPrlS1lVSfVNUheYQJZ9g0CyPZintoWBc7zlsuaaDU9cIElMAr2B9ZvNDTHdIsTd2uIsQ61zmGNjCcaRF8vTOlMa2ziWHpJapJZWRy3aNyqucbFrPvuS-P5Tv1NBkFQbsggkyft-5kmNXn2mvrORiHDSq6o_SxIraffO2kP7CLYrqKKNI71koMkSPCPRGIGRubcDXcHMMmd0_eCqySPd1Ye8E"/></td>
                          <td className="py-3 pr-3 text-text-light font-medium">El sonido de un Agujero Negro...</td>
                          <td className="px-3 py-3 text-text-muted">Hace 1 día</td>
                          <td className="px-3 py-3 text-text-light">120K</td>
                          <td className="px-3 py-3 text-text-light">72%</td>
                          <td className="pl-3 py-3">
                            <div className="flex items-center gap-1 text-positive">
                              <span className="material-symbols-outlined text-base">trending_up</span><span className="text-xs font-bold">En crecimiento</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border-dark">
                          <td className="py-3 pr-2"><img alt="Miniatura de video sobre eclipses" className="h-10 w-16 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK0XNbLTlCYkoPfHAuGEfBTp9Db8IBd3KL1an-LHo5zjzvK79BV1Oc2nA5P085TkCTr-GfRky1kXQnkz3s75uQib5zvAMcPH2BF1wSdMWRiUDy72hbx7eIsn-orYOsix0AmvUtTKHrLzHRlQfB0VjNm5XRTZtU4rKTQJOO4ASlnjyMHWAlDYeUc0pdIZ5jMfhXFvx5JZ-sbKK7dJwyNbw5BAGniQDpw6sovo__3I-2tx4mz1c8DFDI-bXrdlcHUxjkDMvNRvE7IdI"/></td>
                          <td className="py-3 pr-3 text-text-light font-medium">El Gran Eclipse de 2024</td>
                          <td className="px-3 py-3 text-text-muted">Hace 3 días</td>
                          <td className="px-3 py-3 text-text-light">85K</td>
                          <td className="px-3 py-3 text-text-light">65%</td>
                          <td className="pl-3 py-3">
                            <div className="flex items-center gap-1 text-text-muted">
                              <span className="material-symbols-outlined text-base">trending_flat</span><span className="text-xs font-bold">Normal</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-2"><img alt="Miniatura de video sobre cometas" className="h-10 w-16 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApygjQxHbQ1tlrBKNQK_PAjB6ANazJCPIOXJJmZnGDlACRvnx9QW1pwAN98sNGJN5qrmQeVlTMMvJThHnWvrMci4Iei4x8bXcVkh48cfuzWuBgST3FlS4unTzSPlWKFtUoM-10xLYmduiekEQaRuHuMz0Lxk-El2t2X-DNugA0dEq21xecNTikiMnyokgZDL_CJlhWLAKg9kXlNEJ3QBv-YHfHD2RPBw6CiQLPTrG1QwlOW-hHzE10QAS7EgMRvK1x0FXz7fk6x3Q"/></td>
                          <td className="py-3 pr-3 text-text-light font-medium">¿Viste el Cometa Diablo?</td>
                          <td className="px-3 py-3 text-text-muted">Hace 5 días</td>
                          <td className="px-3 py-3 text-text-light">42K</td>
                          <td className="px-3 py-3 text-text-light">58%</td>
                          <td className="pl-3 py-3">
                            <div className="flex items-center gap-1 text-negative">
                              <span className="material-symbols-outlined text-base">trending_down</span><span className="text-xs font-bold">En caída</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="rounded-xl bg-card-dark border border-border-dark p-6">
                  <h2 className="text-xl font-bold text-text-light">Temas que mejor funcionan</h2>
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Agujeros negros</span>
                        <span className="inline-block rounded bg-positive/20 px-2 py-0.5 text-xs font-bold text-positive">Oportunidad alta</span>
                      </div>
                      <div className="w-full bg-background-dark rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{width: "90%"}}></div></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Eclipses</span>
                        <span className="inline-block rounded bg-yellow-500/20 px-2 py-0.5 text-xs font-bold text-yellow-400">Media</span>
                      </div>
                      <div className="w-full bg-background-dark rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{width: "75%"}}></div></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Explosiones de supernova</span>
                        <span className="inline-block rounded bg-positive/20 px-2 py-0.5 text-xs font-bold text-positive">Oportunidad alta</span>
                      </div>
                      <div className="w-full bg-background-dark rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{width: "60%"}}></div></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Cometas</span>
                        <span className="inline-block rounded bg-negative/20 px-2 py-0.5 text-xs font-bold text-negative">Saturado</span>
                      </div>
                      <div className="w-full bg-background-dark rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{width: "40%"}}></div></div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-card-dark border border-border-dark p-6">
                  <h2 className="text-xl font-bold text-text-light">Inspector de títulos y etiquetas</h2>
                  <input className="mt-4 w-full rounded-lg border-border-dark bg-background-dark text-text-light text-sm focus:border-primary focus:ring-primary" type="text" value="¿Por qué el cielo es azul y no morado?"/>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-positive">check_circle</span> Incluye palabra clave principal</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-positive">check_circle</span> Es claro en menos de 60 caracteres</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-negative">cancel</span> Genera curiosidad sin clickbait</li>
                  </ul>
                  <h3 className="mt-4 text-sm font-bold text-text-muted">Hashtags sugeridos</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">#universo</span>
                    <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">#astronomia</span>
                    <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">#ciencia</span>
                    <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">#espacio</span>
                  </div>
                </div>
                <div className="rounded-xl bg-card-dark border border-border-dark p-6">
                  <h2 className="text-xl font-bold text-text-light">Competencia galáctica</h2>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <img alt="Avatar del canal Astro Explorador" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDepbs25Y8tqoa7FIDNUaEeUG1HO2s9I7IiXS8aiH7A1Am_evGhhkPOjjPAz38V4Wns9U4oj0nB1MuVGiiFxZ59ewp9WV0A7XOHXr81994Cp8dUySAijex7eMLIImeT5HNGJ58WloMmsYHbmtWIaxRXxRBXdUIJ0YmNmyzNuD955Ap-LU_EEGpgFduqk21JRVJlgy_0rjR2gGPJHXyKsUboIZyt1U-4oo5ckM7S49IRR_n5OodQzzd6ubU9Lrfa-wxG1RRZo609Y7I"/>
                      <div className="flex-1">
                        <p className="font-medium text-text-light">Astro Explorador</p>
                        <p className="text-xs text-text-muted">Promedio vistas: 89K</p>
                      </div>
                      <button className="flex h-8 items-center justify-center rounded-lg bg-card-dark/60 hover:bg-background-dark px-3 text-xs font-bold text-secondary transition-colors">Ver ideas</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <img alt="Avatar del canal Cosmos Curioso" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVU0Ov8g35cNBU6r7u-bgFYbvs6ov7jJaU81IkxtqubiiWsve6bFyGhFtrK9rHf7OVmtDkTv46YMHYlFVE1URP2zU1PXuaYh1UpWgqmeiVl9mY7cLUVQzw9j69dZDMndOGSVWHnPzzak8NsclxUcYcx4BMqniJGcbR5cEq2WSiLadIu376Le4_Wcb3cotBt7j6vRwbapFXsK7mI6eWQBqcj0TrRy384bYwnTCrsroy32lc7leagbq9UOSY6PtFkuQbzyCBdMhKPZ8"/>
                      <div className="flex-1">
                        <p className="font-medium text-text-light">Cosmos Curioso</p>
                        <p className="text-xs text-text-muted">Promedio vistas: 75K</p>
                      </div>
                      <button className="flex h-8 items-center justify-center rounded-lg bg-card-dark/60 hover:bg-background-dark px-3 text-xs font-bold text-secondary transition-colors">Ver ideas</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className="sticky bottom-0 mt-auto w-full bg-card-dark/80 backdrop-blur-sm border-t border-border-dark">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-text-light">Siguiente acción recomendada</h3>
              <p className="text-sm text-text-muted">Graba hoy un short sobre <span className="font-bold text-primary">Agujeros Negros</span> para YouTube y TikTok. Mejor horario: <span className="font-bold text-secondary">18:30hs</span>.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-secondary/20 px-4 text-sm font-bold text-secondary transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-lg">edit_note</span>Crear guion automático
              </button>
              <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-lg">movie_edit</span>Abrir editor de video
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MpaIQ;
