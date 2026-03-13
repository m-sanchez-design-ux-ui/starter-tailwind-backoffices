import localFont from "next/font/local";
import "../../app/globals.css";
import FlowbiteInit from '@/components/FlowbiteInit';
import Header from '@/components/Header';
import Sidebar from "@/components/sidebar/Sidebar";

// Configuración de Montserrat Local con toda la familia de fuentes
const montserrat = localFont({
  src: [
    { path: "../../fonts/Montserrat-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../fonts/Montserrat-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../../fonts/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "../../fonts/Montserrat-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/Montserrat-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/Montserrat-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../fonts/Montserrat-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../fonts/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../fonts/Montserrat-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../../fonts/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../fonts/Montserrat-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: 'swap',
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FlowbiteInit />
      <div className={`${montserrat.variable} antialiased flex h-screen w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        {/* SIDEBAR: Bloque fijo a la izquierda */}
        <Sidebar />

        {/* CONTENEDOR DERECHO */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          
          {/* HEADER: Navbar superior */}
          <Header />

          {/* ÁREA DE CONTENIDO: Con scroll vertical independiente */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-white dark:bg-gray-950">
            <div className="max-w-350 mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}