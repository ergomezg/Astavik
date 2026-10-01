'use client';

import React, { useState, useRef } from 'react';
import { RotateCw, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { GalleryThumbnail } from '../../types/bike';
import { PinchZoomModal } from './PinchZoomModal';

interface ProductGalleryProps {
  viewerVersion: string;
  resolutionLabel: string;
  has360Spin: boolean;
  weightKg: number;
  drivetrain: string;
  tireClearanceMm: number;
  inspectionPoints: number;
  items: GalleryThumbnail[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  viewerVersion,
  resolutionLabel,
  has360Spin,
  weightKg,
  drivetrain,
  tireClearanceMm,
  inspectionPoints,
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Competition Orange (item 1) as in mockup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIndex] || items[0];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    // Scroll mobile carousel if visible
    if (mobileScrollRef.current) {
      const child = mobileScrollRef.current.children[index] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  const handle360Spin = () => {
    setIsSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      count++;
      if (count >= items.length * 2) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 180);
  };

  return (
    <section className="flex flex-col gap-3 sm:gap-4 w-full">
      {/* ========================================================= */}
      {/* 1. DESKTOP VIEWER (HIDDEN ON MOBILE < 768px)               */}
      {/* ========================================================= */}
      <div className="hidden md:block relative w-full aspect-[3/2] bg-surface-dim rounded-card border border-tech-border overflow-hidden select-none group">
        
        {/* Top HUD Overlay */}
        <div className="absolute top-0 inset-x-0 p-4 sm:p-5 flex items-start justify-between z-10 pointer-events-none">
          <div className="flex flex-col gap-1 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-white font-mono font-bold text-xs uppercase tracking-wider">
                {viewerVersion}
              </span>
            </div>
            <span className="text-[#8E9192] font-mono text-[10px] tracking-wider">
              {resolutionLabel}
            </span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            {has360Spin && (
              <button
                type="button"
                onClick={handle360Spin}
                disabled={isSpinning}
                aria-label="Girar vista 360 grados"
                className="bg-surface-mid/80 hover:bg-surface-high border border-tech-border text-white text-xs font-mono px-3 py-1.5 rounded-tech flex items-center gap-1.5 transition-all hover:border-brand-orange"
              >
                <RotateCw className={`w-3.5 h-3.5 text-brand-orange ${isSpinning ? 'animate-spin' : ''}`} />
                <span>360° SPIN</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Abrir visor a pantalla completa con zoom"
              className="bg-surface-mid/80 hover:bg-surface-high border border-tech-border text-[#C4C7C7] hover:text-white p-2 rounded-tech transition-all hover:border-brand-orange"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center Main Image Canvas */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="w-full h-full flex items-center justify-center p-6 lg:p-8 cursor-zoom-in"
          title="Haz clic para inspeccionar en 4K con zoom"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeItem.imageSrc}
            alt={activeItem.altText}
            width={1200}
            height={800}
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Bottom HUD Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-void-black/95 via-void-black/70 to-transparent flex items-center justify-between text-xs font-mono text-[#C4C7C7] z-10 pointer-events-none">
          <div className="flex items-center gap-2 tracking-wide text-[11px] sm:text-xs">
            <span>WEIGHT: <strong className="text-white">{weightKg} KG</strong></span>
            <span className="text-[#5F5E5E]">•</span>
            <span>DRIVETRAIN: <strong className="text-white">{drivetrain}</strong></span>
            <span className="text-[#5F5E5E]">•</span>
            <span>TIRE CLEARANCE: <strong className="text-white">{tireClearanceMm}MM</strong></span>
          </div>

          <div className="flex items-center gap-1.5 text-brand-orange font-bold text-[11px] sm:text-xs bg-brand-orange/10 border border-brand-orange/30 px-2.5 py-1 rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INSPECCIÓN {inspectionPoints} PUNTOS</span>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE TOUCH CAROUSEL (PEEK DEL 15% DE LA SIGUIENTE)   */}
      {/* ========================================================= */}
      <div className="md:hidden flex flex-col gap-2">
        {/* HUD móvil superior */}
        <div className="flex items-center justify-between px-1 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-white font-bold">{viewerVersion}</span>
          </div>
          <span className="text-brand-orange text-[10px] font-bold border border-brand-orange/40 bg-brand-orange/10 px-2 py-0.5 rounded">
            DESLIZA PARA EXPLORAR →
          </span>
        </div>

        {/* Contenedor scroll horizontal táctil con peek del 15% */}
        <div
          ref={mobileScrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-3.5 pb-2 -mx-4 px-4 scroll-smooth"
        >
          {items.map((item, index) => {
            const isSelected = index === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsModalOpen(true);
                }}
                className={`w-[85vw] flex-shrink-0 snap-start aspect-[3/2] bg-surface-dim rounded-card border transition-all relative overflow-hidden flex items-center justify-center p-3 cursor-pointer ${
                  isSelected ? 'border-brand-orange' : 'border-tech-border'
                }`}
              >
                {/* Badge de miniatura */}
                <span className={`absolute top-2.5 right-2.5 text-[9px] font-mono px-2 py-0.5 rounded-sm font-bold ${
                  isSelected ? 'bg-brand-orange text-void-black' : 'bg-surface-mid text-[#C4C7C7]'
                }`}>
                  {item.badgeCode}
                </span>

                {/* Subtítulo flotante inferior */}
                <div className="absolute bottom-2 inset-x-2 px-2 py-1 bg-void-black/80 backdrop-blur-sm rounded flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white font-bold truncate">{item.title}</span>
                  <span className="text-[#8E9192] text-[9px] truncate ml-1">{item.subtitle}</span>
                </div>

                {/* Imagen del slide */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* Telemetría rápida para móvil */}
        <div className="flex items-center justify-between bg-surface-dim border border-tech-border p-2.5 rounded-tech text-[10px] font-mono text-[#C4C7C7]">
          <span>PESO: <strong className="text-white">{weightKg} KG</strong></span>
          <span>GRUPO: <strong className="text-white">{drivetrain}</strong></span>
          <span className="text-brand-orange font-bold">120 PUNTOS CERT.</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. THUMBNAIL SELECTOR BAR (DESKTOP & TABLET)              */}
      {/* ========================================================= */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
        {items.map((item, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleThumbnailClick(index)}
              className={`relative bg-surface-dim border rounded-tech p-2.5 text-left transition-all group focus:outline-none flex flex-col justify-between min-h-[92px] ${
                isSelected
                  ? 'border-brand-orange ring-1 ring-brand-orange bg-surface-low'
                  : 'border-tech-border hover:border-[#404040] hover:bg-surface-low/80'
              }`}
            >
              {/* Top thumbnail image + badge */}
              <div className="relative w-full aspect-[16/9] rounded-[2px] overflow-hidden bg-void-black mb-2 flex items-center justify-center p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                
                <span
                  className={`absolute top-1 right-1 text-[9px] font-mono px-1.5 py-0.5 rounded-[2px] font-bold ${
                    isSelected
                      ? 'bg-brand-orange text-void-black'
                      : 'bg-surface-mid/90 text-[#C4C7C7]'
                  }`}
                >
                  {isSelected ? 'ACTIVE' : item.badgeCode}
                </span>
              </div>

              {/* Text label */}
              <div>
                <h4 className="text-white font-mono font-bold text-xs uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h4>
                <p className="text-[#8E9192] text-[10px] font-mono truncate">
                  {item.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 4. PINCH TO ZOOM MODAL                                    */}
      {/* ========================================================= */}
      <PinchZoomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={activeItem.imageSrc}
        altText={activeItem.altText}
        title={activeItem.title}
        subtitle={activeItem.subtitle}
      />
    </section>
  );
};
