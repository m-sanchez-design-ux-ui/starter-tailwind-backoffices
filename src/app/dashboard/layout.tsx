export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* SIDEBAR: Bloque fijo a la izquierda */}
      <aside className="hidden md:flex w-64 flex-col bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shrink-0">
        <div className="h-16 flex items-center px-6 bg-gray-200 dark:bg-gray-800 font-bold tracking-tight">
          ORIGIN SOLUTIONS
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>
          <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>
          <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        </div>
      </aside>

      {/* CONTENEDOR DERECHO */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        
        {/* HEADER: Navbar superior */}
        <header className="h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center px-8 justify-between shrink-0">
          <div className="w-64 h-9 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md"></div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-100 dark:bg-gray-900 rounded"></div>
          </div>
        </header>

        {/* ÁREA DE CONTENIDO: Con scroll vertical independiente */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-white dark:bg-gray-950">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}