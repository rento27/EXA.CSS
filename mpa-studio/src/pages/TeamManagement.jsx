import React from 'react';

const TeamManagement = () => {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      <header className="flex-shrink-0 flex items-center justify-between whitespace-nowrap bg-black/10 backdrop-blur-md border-b border-solid border-primary/20 px-8 py-4">
        <div className="flex items-center gap-4 text-white">
          <p className="text-xl font-bold leading-tight tracking-wide pulsate holographic-text">Gestión de Equipo y Colaboradores</p>
        </div>
        <div className="flex flex-1 justify-end items-center gap-6">
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-white/5 hover:bg-primary/20 text-primary/80 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary pulsate" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYIq0BnR4G3iDJEEJnTeLs3Tsz7LllTJO6N5FBSFzhGGh12pwCJre2VIUveNhQ0bdJ2PZIc294K7my0hRi3P6I-Aw-ZsRN-Ww-XjiAGSpwyg1Ka4YPz5ije5qPkqpjJ-KBeAEaIk86MZkVvZ2SyMg2kGPnUW6Il2qZMiJ_yntHEev3ake2qHPMgN3ry6OIMQl1oOC2ZWslSqKzYxz_k53S6eKebYqMF7TE7HpWZetGMn2MVK9TEVx0V9xWr29WwppP9mnhCYz7cv4")'}}></div>
        </div>
      </header>
      <div className="flex-1 p-8 grid grid-cols-3 gap-8">
        <div className="col-span-3 lg:col-span-2 holographic-panel rounded-lg p-6 flex flex-col">
          <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 holographic-text">Miembros del Equipo</h2>
          <div className="mb-6">
            <label className="flex flex-col w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-12">
                <div className="text-primary flex bg-black/30 items-center justify-center pl-4 rounded-l-lg border border-r-0 border-primary/30">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-primary border border-l-0 border-primary/30 bg-black/30 h-full placeholder:text-primary/50 px-4 text-base font-normal leading-normal transition-all" placeholder="Buscar por nombre o email..." value=""/>
              </div>
            </label>
          </div>
          <div className="flex-1 overflow-y-auto -mr-3 pr-3">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-background-dark/50 backdrop-blur-sm">
                <tr>
                  <th className="p-3 text-sm font-semibold text-primary/70 uppercase tracking-wider">Nombre</th>
                  <th className="p-3 text-sm font-semibold text-primary/70 uppercase tracking-wider">Email</th>
                  <th className="p-3 text-sm font-semibold text-primary/70 uppercase tracking-wider">Rol</th>
                  <th className="p-3 text-sm font-semibold text-primary/70 uppercase tracking-wider text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                <tr className="hover:bg-primary/5">
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhlh36scswJwonfdOgtn0hwpBC6yphmT2FQYau9-6C5U1EedOmS0QhbevUQTw_TvM7DIYJX11d7eKzeTmunUbdp8xscDVDZPbmzeAssdT8pHrwk9BaE0lC-kX_4l8ohD8FLOxx0s18IFqZiXNFirkKPfZwmo9HVDUS5y4qQSS1dpuXIiU0WMuBQjVNm3neVodMcMBBSwsMlCEsAnGAKt2YMlTfQbmDqP7Pb4IzlOqXYnwyr7dE37DqtXBolyEk4HX6vgGFwO94XcI")'}}></div>
                      <span className="font-medium text-white">Astro</span>
                    </div>
                  </td>
                  <td className="p-3 text-white/70">astro@mpa.studio</td>
                  <td className="p-3"><span className="role-chip role-chip-magenta">Administrador</span></td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-primary/70 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                      <button className="text-magenta/70 hover:text-magenta transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbjSeERWjlqbAsrm5LZ5W0Ssh40wFqcsDHJ5SOdHTJRztTZ8JKel9nS7hZJkNdGCREeYEnvptRtlCCdhrHSgyjZi-gKdR8F4cSsAGkKtgW97r2VcCYZyo_E7TwWVMT_jlJgDYBHWCdbubrRzFr9SamVtONvj-CW4V7sQrUEs76nuiYYNREWhI3vM9KLruBnlCmIK3dOM-_Y5It2wvi__iVK4AwdxoNs-yVcHlxXNZiWcl8OKoI_DFmK4guoU8tKFCNXnvViQp6MrE")'}}></div>
                      <span className="font-medium text-white">Celeste</span>
                    </div>
                  </td>
                  <td className="p-3 text-white/70">celeste@mpa.studio</td>
                  <td className="p-3"><span className="role-chip role-chip-cyan">Editor</span></td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-primary/70 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                      <button className="text-magenta/70 hover:text-magenta transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnfqJ7oiPeTe7TAS861UIi_4Mv4PosHdMc2iEYSCeBt_iIXUa5lcvRCYDJPeMWBjslALCODB0weetuT2lWwI7h6saPacu7boC26fnKzbv4uaHXhHzoUeT4Da_tIvCWHrXabPE_w4KzPG2qFDUUlCQBJv9FvBhfQhHZ6WfRO9FgDAY4FPlrF9KuSIx0P1MhtwXxRnrhkdx-KTttferQvLFB7oED0Bctu4ASGWbJTfkSzLD4QqfGuIGInDag1rH0CAky-8C3qT9iQLM")'}}></div>
                      <span className="font-medium text-white">Orion</span>
                    </div>
                  </td>
                  <td className="p-3 text-white/70">orion@mpa.studio</td>
                  <td className="p-3"><span className="role-chip role-chip-purple">Revisor</span></td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-primary/70 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                      <button className="text-magenta/70 hover:text-magenta transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-magenta/50 flex items-center justify-center bg-black/50">
                        <span className="material-symbols-outlined text-magenta/70 text-lg">hourglass_empty</span>
                      </div>
                      <span className="font-medium text-white/70 italic">Nova</span>
                    </div>
                  </td>
                  <td className="p-3 text-white/70 italic">nova@example.com</td>
                  <td className="p-3"><span className="role-chip role-chip-magenta pending-pulse">Invitación pendiente</span></td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-primary/70 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">refresh</span></button>
                      <button className="text-magenta/70 hover:text-magenta transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 holographic-panel rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] holographic-text">Invitar Colaborador</h2>
          <p className="text-primary/70 -mt-4">Expande tu tripulación enviando una invitación.</p>
          <form className="flex flex-col gap-6">
            <div>
              <label className="text-sm font-medium text-primary/80 mb-2 block" htmlFor="email">Email del Colaborador</label>
              <input className="form-input w-full rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-black/30 placeholder:text-primary/50 transition-all h-12" id="email" name="email" placeholder="usuario@galaxia.com" type="email"/>
            </div>
            <div>
              <label className="text-sm font-medium text-primary/80 mb-2 block" htmlFor="role">Asignar Rol</label>
              <select className="form-select w-full rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-black/30 transition-all h-12" id="role" name="role">
                <option>Editor</option>
                <option>Revisor</option>
                <option>Administrador</option>
              </select>
            </div>
            <button className="flex items-center justify-center gap-3 w-full h-14 bg-primary text-background-dark font-bold text-lg rounded-lg shadow-[0_0_15px_theme('colors.primary/0.5')] hover:shadow-[0_0_25px_theme('colors.primary/0.8')] transition-all duration-300 pulsate" type="submit">
              <span className="material-symbols-outlined">rocket_launch</span>
              Enviar Invitación
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default TeamManagement;
