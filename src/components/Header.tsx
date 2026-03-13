'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotifications] = useState(true); // Mock de notificaciones

  // Lógica de Dark Mode para Tailwind
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="min-h-13 w-full sticky top-0 z-20">
      <div className="w-full px-7 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex justify-between lg:justify-end items-center">
        
        {/* Burger Menu (Solo Mobile) */}
        <button 
          type="button" 
          className="group inline-flex justify-center items-center size-8 bg-gray-100 hover:bg-gray-200 rounded-lg lg:hidden dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="size-6 fill-none stroke-gray-700 dark:stroke-gray-100" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          {/* Botón de Notificaciones */}
          <button className="group relative flex justify-center items-center size-8 bg-gray-100 hover:bg-gray-200 rounded-lg dark:bg-gray-700">
            {hasNotifications && (
              <div className="absolute top-1 right-1.5 size-2 bg-red-600 rounded-full border border-white dark:border-gray-900"></div>
            )}
            <svg viewBox="0 0 24 24" className="size-5 fill-gray-700 dark:fill-gray-100 group-hover:fill-primary">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
          </button>

          <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200">Admin Main</span>

          {/* Avatar & Perfil */}
          <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-4">
            <button className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 transition-transform active:scale-95">
              <Image
                className="w-8 h-8 rounded-full object-cover"
                src="/images/avatars/avatarNeilSims.png"
                alt="User"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}