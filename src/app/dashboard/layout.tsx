import Header from '@/components/Header';
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {/* Backoffice Menu */}
        <Sidebar />

        {/* Right Content Area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          
          {/* Top Navbar */}
          <Header />

          {/* Content Area with vertical scroll */}
          <main className="flex-1 overflow-y-auto px-7 py-4 lg:pl-71 bg-white dark:bg-gray-950">
            <div className="max-w-full mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}