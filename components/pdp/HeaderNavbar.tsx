'use client';

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';

export const HeaderNavbar: React.FC = () => {
  const totalItemsCount = useCartStore((state) => state.getTotalItemsCount());
  const setDrawerOpen = useCartStore((state) => state.setDrawerOpen);

  return (
    <header className="sticky top-0 z-40 w-full bg-void-black/95 backdrop-blur-md border-b border-tech-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none focus:ring-1 focus:ring-brand-orange rounded">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-orange flex items-center justify-center rounded-[2px] transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-void-black fill-current">
              <path d="M12 2L2 22h5l5-10 5 10h5L12 2z" />
            </svg>
          </div>
          <span className="text-white font-display font-black text-lg sm:text-xl md:text-2xl tracking-tighter uppercase">
            ASTĀVIK
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-[#C4C7C7]">
          <Link
            href="/bicicletas"
            className="text-white hover:text-brand-orange transition-colors flex items-center gap-1.5 py-2 font-bold"
          >
            <span>[</span> BICICLETAS <span>]</span>
          </Link>
          <Link
            href="/equipamiento"
            className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-2"
          >
            <span>[</span> EQUIPAMIENTO <span>]</span>
          </Link>
          <Link
            href="/indumentaria"
            className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-2"
          >
            <span>[</span> INDUMENTARIA <span>]</span>
          </Link>
          <Link
            href="/taller"
            className="text-brand-orange hover:text-brand-orange-hover transition-colors flex items-center gap-1.5 py-2 font-bold"
          >
            <span>[</span> TALLER <span>]</span>
          </Link>
        </nav>

        {/* Right Action Icons & Auth Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Trigger */}
          <button
            type="button"
            aria-label="Abrir buscador técnico"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#C4C7C7] hover:text-white hover:bg-surface-low rounded-tech border border-transparent hover:border-tech-border transition-all"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
          </button>

          {/* Cart Trigger with Counter */}
          <button
            type="button"
            aria-label={`Ver carrito de compras, ${totalItemsCount} productos`}
            onClick={() => setDrawerOpen(true)}
            className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#C4C7C7] hover:text-white hover:bg-surface-low rounded-tech border border-transparent hover:border-tech-border transition-all"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-orange text-void-black text-[10px] font-mono font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Iniciar Sesión Button */}
          <button
            type="button"
            className="border border-[#404040] hover:border-brand-orange hover:text-brand-orange text-white text-xs font-mono uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-tech transition-all flex items-center gap-2 min-h-[40px] sm:min-h-[44px]"
          >
            <User className="w-3.5 h-3.5 hidden sm:inline-block" strokeWidth={1.75} />
            <span>INICIAR SESIÓN</span>
          </button>
        </div>

      </div>
    </header>
  );
};
