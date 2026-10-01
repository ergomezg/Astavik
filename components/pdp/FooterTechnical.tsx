import React from 'react';
import Link from 'next/link';

export const FooterTechnical: React.FC = () => {
  return (
    <footer className="w-full bg-void-black border-t border-tech-border pt-12 sm:pt-16 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-tech-border/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-orange flex items-center justify-center rounded-[2px]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-void-black fill-current">
                  <path d="M12 2L2 22h5l5-10 5 10h5L12 2z" />
                </svg>
              </div>
              <span className="text-white font-display font-black text-xl md:text-2xl tracking-tighter uppercase">
                ASTĀVIK
              </span>
            </div>

            <p className="text-[#8E9192] text-xs sm:text-sm font-sans max-w-sm leading-relaxed">
              Ingeniería ciclista de alta densidad de datos. Máquinas de competición certificadas por laboratorio y optimizadas para rendimiento biomecánico de élite.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-xs font-mono">
            {/* Col 1 */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-3">
                ECOSISTEMA
              </h4>
              <ul className="space-y-2 text-[#8E9192]">
                <li>
                  <Link href="/bicicletas" className="hover:text-brand-orange transition-colors">
                    Bicicletas de Ruta
                  </Link>
                </li>
                <li>
                  <Link href="/bicicletas" className="hover:text-brand-orange transition-colors">
                    Gravel Lab
                  </Link>
                </li>
                <li>
                  <Link href="/equipamiento" className="hover:text-brand-orange transition-colors">
                    Componentes CNC
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-3">
                GARANTÍA LAB
              </h4>
              <ul className="space-y-2 text-[#8E9192]">
                <li>
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    Proceso 120 Puntos
                  </span>
                </li>
                <li>
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    Certificación Biométrica
                  </span>
                </li>
                <li>
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    Reporte Ultrasonido
                  </span>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-3">
                SOPORTE
              </h4>
              <ul className="space-y-2 text-[#8E9192]">
                <li>
                  <Link href="/taller" className="hover:text-brand-orange transition-colors">
                    Taller Central Bogotá
                  </Link>
                </li>
                <li>
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    Envío Blindado
                  </span>
                </li>
                <li>
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    Contacto Técnico
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Location Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E9192]">
          <div>
            © 2026 Astāvik Precision Performance Lab. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Términos de Garantía</span>
            <span>•</span>
            <span className="text-brand-orange font-bold">BOGOTÁ, COLOMBIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
