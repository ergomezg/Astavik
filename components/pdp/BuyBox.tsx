'use client';

import React, { useState } from 'react';
import { Zap, ShoppingBag, ShieldCheck, Wrench, Ruler, Check } from 'lucide-react';
import { BikeProduct, BikeSizeKey } from '../../types/bike';
import { useCartStore } from '../../stores/useCartStore';
import { useBiomechanicsStore } from '../../stores/useBiomechanicsStore';
import { formatCOP } from '../../lib/format';
import { BiomechanicalCalculatorModal } from './BiomechanicalCalculatorModal';
import { WompiCheckoutModal } from './WompiCheckoutModal';

interface BuyBoxProps {
  product: BikeProduct;
}

export const BuyBox: React.FC<BuyBoxProps> = ({ product }) => {
  const { activeSize, setActiveSize, setModalOpen } = useBiomechanicsStore();
  const addItem = useCartStore((state) => state.addItem);
  const [isWompiModalOpen, setIsWompiModalOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const availableSizes: BikeSizeKey[] = ['XS', 'S', 'M', 'L', 'XL'];
  const activeRecommendation = product.biometricRecommendations[activeSize];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      selectedSize: activeSize,
      sku: product.sku,
      priceCOP: product.priceCOP,
      imageSrc: product.gallery.items[1]?.imageSrc || product.gallery.items[0]?.imageSrc,
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyNow = () => {
    setIsWompiModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-5 sm:gap-6 w-full">
      
      {/* 1. Edition & Series Number Row */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-tech-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-white font-bold tracking-wider uppercase">
            {product.series.editionBadge}
          </span>
        </div>
        <div className="text-[#8E9192] tracking-wider">
          <span>SERIE: </span>
          <strong className="text-white">{product.series.unitNumber}/{product.series.totalUnits}</strong>
        </div>
      </div>

      {/* 2. Main Title & Technical Subtitle */}
      <div>
        <h1 className="text-white font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter uppercase leading-none">
          {product.name}
        </h1>
        <p className="text-[#8E9192] font-mono text-xs sm:text-[13px] tracking-wider mt-2 uppercase">
          {product.subtitle}
        </p>
      </div>

      {/* 3. Pricing Block */}
      <div className="bg-surface-low border border-tech-border rounded-card p-4 sm:p-5 flex flex-col gap-2">
        <span className="text-[#8E9192] font-mono text-[11px] tracking-wider uppercase">
          PRECIO ASTĀVIK LAB
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-brand-orange font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            ${new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(product.priceCOP)}
          </span>
          <span className="text-brand-orange font-display font-bold text-lg sm:text-xl">
            COP
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-tech-border/60 text-[#C4C7C7]">
          <span>IVA e inspección técnica incluidos</span>
          <span className="text-emerald-400 font-bold">Envío gratuito</span>
        </div>
      </div>

      {/* 4. Size Selection & Biomechanical Calculator */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono text-white font-bold tracking-wider">
            TALLA DEL CUADRO *
          </label>
          
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-brand-orange hover:text-brand-orange-hover text-xs font-mono flex items-center gap-1.5 transition-colors focus:outline-none"
          >
            <Ruler className="w-3.5 h-3.5" />
            <span className="underline underline-offset-2">Calculadora Biomecánica</span>
          </button>
        </div>

        {/* Size Buttons Grid */}
        <div className="grid grid-cols-5 gap-2">
          {availableSizes.map((sizeKey) => {
            const isSelected = activeSize === sizeKey;
            const inStock = product.sizes[sizeKey]?.inStock;

            return (
              <button
                key={sizeKey}
                type="button"
                onClick={() => setActiveSize(sizeKey)}
                aria-pressed={isSelected}
                className={`relative py-3.5 sm:py-4 px-2 rounded-tech font-mono text-xs font-bold transition-all flex flex-col items-center justify-center min-h-[48px] ${
                  isSelected
                    ? 'border-2 border-brand-orange bg-brand-orange/15 text-brand-orange shadow-[0_0_15px_rgba(255,77,0,0.25)]'
                    : 'border border-tech-border bg-surface-dim text-white hover:border-[#404040] hover:bg-surface-low'
                } ${!inStock && !isSelected ? 'opacity-40 text-[#8E9192]' : ''}`}
              >
                <span>{sizeKey}</span>
                {isSelected && (
                  <span className="text-[8px] font-mono text-brand-orange uppercase mt-0.5 tracking-tighter">
                    EN STOCK
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Biomechanical Recommendation Callout */}
        {activeRecommendation && (
          <div className="bg-surface-dim border border-tech-border rounded-tech p-3 flex items-start gap-2.5 text-xs font-mono text-[#C4C7C7]">
            <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <div className="leading-snug">
              <span>Recomendación para </span>
              <strong className="text-white">
                {activeRecommendation.heightMinCm} - {activeRecommendation.heightMaxCm} cm
              </strong>
              <span> con entrepierna de </span>
              <strong className="text-white">
                {activeRecommendation.inseamMinCm}-{activeRecommendation.inseamMaxCm} cm.
              </strong>
            </div>
          </div>
        )}
      </div>

      {/* 5. Primary CTAs */}
      <div className="flex flex-col gap-3 pt-2">
        {/* COMPRAR AHORA (WOMPI) */}
        <button
          type="button"
          onClick={handleBuyNow}
          className="w-full bg-brand-orange hover:bg-brand-orange-hover text-void-black font-display font-black text-sm uppercase tracking-wider py-4 rounded-tech transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,77,0,0.3)] min-h-[52px]"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>COMPRAR AHORA</span>
        </button>

        {/* AGREGAR AL CARRITO (ZUSTAND STORE) */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`w-full bg-surface-low hover:bg-surface-mid border border-tech-border text-white font-mono font-bold text-xs uppercase tracking-wider py-4 rounded-tech transition-all flex items-center justify-center gap-2 min-h-[48px] ${
            addedAnimation ? 'border-brand-orange text-brand-orange' : ''
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-4 h-4 text-brand-orange" />
              <span>AGREGADO AL ARSENAL</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>AGREGAR AL CARRITO</span>
            </>
          )}
        </button>
      </div>

      {/* 6. Stock & Dispatch Status */}
      <div className="flex items-center justify-between text-xs font-mono text-[#C4C7C7] border-y border-tech-border/60 py-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-white font-semibold">
            UNIDAD DISPONIBLE EN {product.stockStatus.location}
          </span>
        </div>
        <div className="text-[#8E9192]">
          DISPATCH: <strong className="text-white">{product.stockStatus.dispatchTime}</strong>
        </div>
      </div>

      {/* 7. Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-surface-dim border border-tech-border rounded-tech p-3 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-brand-orange flex-shrink-0" />
          <span className="text-[11px] font-mono text-[#C4C7C7] leading-tight">
            {product.guarantees.carbonWarrantyYears} años de garantía en cuadro de carbono
          </span>
        </div>

        <div className="bg-surface-dim border border-tech-border rounded-tech p-3 flex items-center gap-3">
          <Wrench className="w-5 h-5 text-brand-orange flex-shrink-0" />
          <span className="text-[11px] font-mono text-[#C4C7C7] leading-tight">
            Puesta a punto personalizada previa
          </span>
        </div>
      </div>

      {/* 8. Modals */}
      <BiomechanicalCalculatorModal recommendations={product.biometricRecommendations} />
      <WompiCheckoutModal
        isOpen={isWompiModalOpen}
        onClose={() => setIsWompiModalOpen(false)}
        product={product}
        selectedSize={activeSize}
      />
    </div>
  );
};
