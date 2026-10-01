import React from 'react';
import Link from 'next/link';

interface BreadcrumbsBarProps {
  category: string;
  productName: string;
  sku: string;
  frameMatrix: string;
}

export const BreadcrumbsBar: React.FC<BreadcrumbsBarProps> = ({
  category,
  productName,
  sku,
  frameMatrix,
}) => {
  return (
    <div className="w-full border-b border-tech-border bg-surface-dim/50 py-3">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-2 text-[11px] sm:text-xs font-mono">
        
        {/* Left: Hierarchical Breadcrumb & SKU Badge */}
        <div className="flex items-center flex-wrap gap-2 text-[#8E9192]">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/bicicletas" className="hover:text-white transition-colors">
            Bicicletas
          </Link>
          <span>/</span>
          <span className="text-[#C4C7C7]">{category}</span>
          <span>/</span>
          <span className="text-white font-medium">{productName} 2025</span>
          
          {/* SKU Technical Badge */}
          <span className="ml-1.5 px-2 py-0.5 rounded-sm bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-[10px] font-bold tracking-wider">
            ID: {sku}
          </span>
        </div>

        {/* Right: Technical Frame Matrix */}
        <div className="text-[#8E9192] tracking-wider text-[11px] flex items-center gap-1.5">
          <span className="text-[#5F5E5E]">FRAME MATRIX:</span>
          <span className="text-[#C4C7C7] font-semibold">{frameMatrix}</span>
        </div>

      </div>
    </div>
  );
};
