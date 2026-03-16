import type { Metadata } from "next";
import "./globals.css";
import FlowbiteInit from '@/components/FlowbiteInit';

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
      <body className="font-sans antialiased">
        {/* Inicializador de Flowbite para componentes interactivos */}
        <FlowbiteInit />
        {children}
      </body>
    </html>
  );
}