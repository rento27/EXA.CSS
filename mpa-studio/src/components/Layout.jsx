import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { to: '/', text: 'Dashboard', icon: 'dashboard' },
    { to: '/projects', text: 'Proyectos', icon: 'folder_managed' },
    { to: '/scripts-and-seo', text: 'Script Studio', icon: 'draw' },
    { to: '/video-lab', text: 'Production Studio', icon: 'movie' },
    { to: '/video-editor', text: 'Editor de Video', icon: 'cut' },
    { to: '/exports-and-social', text: 'Exports & Social', icon: 'upload' },
    { to: '/video-analytics', text: 'Analíticas de Video', icon: 'analytics' },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-50 -translate-y-[150%] transition-transform focus:translate-y-0 bg-white text-black px-4 py-2 rounded-lg shadow-lg font-medium outline-none ring-2 ring-primary-magenta"
      >
        Skip to main content
      </a>
      <div className="flex h-full grow flex-row">
        <aside className="sticky top-0 flex h-screen min-h-[700px] w-64 flex-col justify-between bg-surface-dark p-4 border-r border-border-dark">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARcKTTViQszFxmwDBTpFfKx2aPo5IcLh2n-qNKPZ6lNMnoFMYc8eOo8Kru7iMwyu1r_bmXmHdsAEoz4HZ4LVEOBNFzwSdEKDlW6IvZamLICGMhIB_mFDj-laqfDlIS348g4pOfq_K5KZrfI7DvutZAHmCgF8OgEy7bv34ZbqbpOK1P_Gnn4aSx_nJCwPXLCY0VWDxBksKKejXvwK9lwoYHFVJ8mqBjNvXi-G-U9m5MCdPbVmIKM-QHtO82ZtQG2YyLkkN5gpBFRxM")'}}></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">MPA Studio</h1>
                <p className="text-text-secondary text-sm font-normal leading-normal">The Viral Engine</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'bg-primary-magenta/10 text-primary-magenta'
                      : 'text-text-secondary hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined" aria-hidden="true" style={location.pathname === link.to ? {fontVariationSettings: "'FILL' 1"} : {}}>{link.icon}</span>
                  <p className="text-sm font-medium leading-normal">{link.text}</p>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined" aria-hidden="true">settings</span>
              <p className="text-sm font-medium leading-normal">Configuración</p>
            </a>
          </div>
        </aside>
        <main id="main-content" className="flex-1 p-8" tabIndex="-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
