import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Astāvik Carbon Pro 2025 | Astāvik Performance Lab',
  description:
    'Bicicleta de alto rendimiento de carbono Toray T1100G con grupo electrónico Shimano Di2. Laboratorio de precisión y biomecánica en Bogotá, Colombia.',
  keywords: [
    'Astāvik',
    'Bicicleta de Ruta',
    'Carbon Pro',
    'Shimano Di2',
    'Biomecánica Ciclismo Bogotá',
    'Ciclismo de Élite Colombia',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-void-black text-[#E5E2E1] font-sans antialiased min-h-screen flex flex-col selection:bg-brand-orange selection:text-void-black">
        {children}
      </body>
    </html>
  );
}
