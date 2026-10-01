'use client';

import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatCOP } from '../../lib/format';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    items,
    isDrawerOpen,
    setDrawerOpen,
    removeItem,
    updateQuantity,
    getTotalCOP,
    clearCart,
  } = useCartStore();

  if (!isDrawerOpen) return null;

  const totalCOP = getTotalCOP();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Arsenal de Compra y Carrito Astāvik"
      className="fixed inset-0 z-50 overflow-hidden animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-dim border-l border-tech-border p-6 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-tech-border pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <h3 className="text-white font-display font-black text-lg uppercase tracking-tight">
                  ARSENAL / CARRITO
                </h3>
              </div>
              <p className="text-[11px] font-mono text-[#8E9192]">
                DESPACHO DIRECTO DE LABORATORIO BOGOTÁ
              </p>
            </div>

            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar carrito"
              className="p-2 text-[#8E9192] hover:text-white rounded-tech hover:bg-surface-low transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
            {items.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 gap-3 text-[#8E9192]">
                <Zap className="w-10 h-10 text-[#404040]" />
                <p className="font-display font-bold text-white text-base uppercase">Tu arsenal está vacío</p>
                <p className="text-xs font-mono max-w-xs">
                  Selecciona tu máquina de competición y agrega tu talla personalizada para iniciar el ensamblaje.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="bg-surface-low border border-tech-border rounded-tech p-3.5 flex gap-3.5 items-center"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-16 bg-void-black rounded-[2px] border border-tech-border overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      width={160}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-display font-bold text-xs uppercase truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E9192] mt-0.5">
                      <span>TALLA: <strong className="text-brand-orange">{item.selectedSize}</strong></span>
                      <span>•</span>
                      <span>SKU: {item.sku}</span>
                    </div>
                    <p className="text-brand-orange font-mono font-bold text-xs mt-1">
                      {formatCOP(item.priceCOP)}
                    </p>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id, item.selectedSize)}
                      aria-label={`Eliminar ${item.name} del carrito`}
                      className="text-[#8E9192] hover:text-[#FFB4AB] p-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-surface-mid border border-tech-border rounded-tech p-0.5 text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                        aria-label="Disminuir cantidad"
                        className="w-5 h-5 flex items-center justify-center text-[#C4C7C7] hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-bold text-white text-[11px]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                        aria-label="Aumentar cantidad"
                        className="w-5 h-5 flex items-center justify-center text-[#C4C7C7] hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="border-t border-tech-border pt-4 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#8E9192]">ENVÍO BLINDADO:</span>
                <span className="text-emerald-400 font-bold">GRATIS (COLOMBIA)</span>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-[#C4C7C7]">TOTAL TRANSACCIÓN:</span>
                <span className="text-brand-orange font-display font-black text-xl">
                  {formatCOP(totalCOP)}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8E9192] bg-surface-low p-2 rounded border border-tech-border">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <span>Pasarela Wompi integrada con encriptación bancaria SHA-256.</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onProceedToCheckout();
                }}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-void-black font-display font-black text-sm uppercase tracking-wider py-3.5 rounded-tech transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>PROCEDER AL CHECKOUT (WOMPI)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
