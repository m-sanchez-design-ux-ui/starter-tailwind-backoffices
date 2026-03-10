import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FlowbiteInit from '@/components/FlowbiteInit';

// Configuración de Montserrat Local con toda la familia de fuentes
const montserrat = localFont({
  src: [
    { path: "../fonts/Montserrat-Thin.ttf", weight: "100", style: "normal" },
    { path: "../fonts/Montserrat-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../fonts/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Montserrat-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Montserrat-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Montserrat-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Montserrat-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../fonts/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Montserrat-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/Montserrat-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Origin Solutions - Backoffice Starter",
  description: "Next.js 16 + Tailwind v4 + Montserrat Local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        {/* Inicializador de Flowbite para componentes interactivos */}
        <FlowbiteInit />
        {children}
      </body>
    </html>
  );
}