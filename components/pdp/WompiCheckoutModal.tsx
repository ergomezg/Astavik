'use client';

import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { formatCOP } from '../../lib/format';
import { BikeProduct, BikeSizeKey } from '../../types/bike';

interface WompiCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: BikeProduct;
  selectedSize: BikeSizeKey;
}

export const WompiCheckoutModal: React.FC<WompiCheckoutModalProps> = ({
  isOpen,
  onClose,
  product,
  selectedSize,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'PSE' | 'CARD' | 'BANCOLOMBIA' | 'NEQUI'>('PSE');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pasarela Wompi Colombia"
      className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
    >
      <div className="bg-surface-dim border border-tech-border rounded-card max-w-lg w-full p-6 sm:p-8 flex flex-col gap-6 shadow-[0_30px_70px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-tech-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-tech bg-brand-orange flex items-center justify-center text-void-black font-display font-black text-sm">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-display font-black text-base uppercase tracking-tight">
                  CHECKOUT SEGURO WOMPI
                </h3>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                  EN VIVO COP
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#8E9192]">
                TRANSACCIÓN CIFRADA CON BANCOLOMBIA & RED ACH COLOMBIA
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal de pago Wompi"
            className="p-2 text-[#8E9192] hover:text-white rounded-tech hover:bg-surface-low transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center text-center gap-4 animate-fadeIn">
            <CheckCircle2 className="w-16 h-16 text-brand-orange" />
            <h4 className="text-white font-display font-black text-2xl uppercase">
              ¡ORDEN CONFIRMADA CON ÉXITO!
            </h4>
            <p className="text-xs font-mono text-[#C4C7C7] max-w-sm">
              Tu máquina <strong className="text-white">{product.name} (Talla {selectedSize})</strong> ha ingresado a la línea de ensamblaje en el Laboratorio Central de Bogotá.
            </p>
            <div className="bg-surface-low border border-tech-border rounded-tech p-4 w-full text-xs font-mono text-left space-y-1">
              <div className="flex justify-between text-[#8E9192]">
                <span>ID TRANSACCIÓN:</span>
                <span className="text-white font-bold">WMP-AST-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between text-[#8E9192]">
                <span>VALOR PAGADO:</span>
                <span className="text-brand-orange font-bold">{formatCOP(product.priceCOP)}</span>
              </div>
              <div className="flex justify-between text-[#8E9192]">
                <span>MÉTODO:</span>
                <span className="text-white">{paymentMethod}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-void-black font-display font-bold py-3.5 rounded-tech transition-all uppercase tracking-wider text-xs"
            >
              VOLVER AL DETALLE DEL PRODUCTO
            </button>
          </div>
        ) : (
          <form onSubmit={handlePay} className="flex flex-col gap-5">
            {/* Resumen del Pedido */}
            <div className="bg-surface-low border border-tech-border rounded-tech p-4 flex items-center justify-between">
              <div>
                <h4 className="text-white font-display font-bold text-sm uppercase">
                  {product.name}
                </h4>
                <p className="text-[11px] font-mono text-[#8E9192]">
                  Talla: <span className="text-brand-orange font-bold">{selectedSize}</span> // SKU: {product.sku}
                </p>
              </div>
              <span className="text-brand-orange font-display font-black text-lg">
                {formatCOP(product.priceCOP)}
              </span>
            </div>

            {/* Selector de Método de Pago */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#C4C7C7]">MÉTODO DE PAGO COLOMBIA:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'PSE', label: 'PSE (Bancos)' },
                  { id: 'CARD', label: 'Tarjeta Crédito' },
                  { id: 'BANCOLOMBIA', label: 'Bancolombia' },
                  { id: 'NEQUI', label: 'Nequi QR' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2 px-2.5 rounded-tech text-xs font-mono border text-center transition-all ${
                      paymentMethod === m.id
                        ? 'border-brand-orange bg-brand-orange/15 text-brand-orange font-bold'
                        : 'border-tech-border text-[#C4C7C7] hover:border-[#404040]'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Datos de Comprador (Guest Checkout) */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#8E9192] mb-1">
                    NOMBRE COMPLETO *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-surface-low border border-tech-border rounded-tech px-3 py-2 text-xs text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#8E9192] mb-1">
                    DOCUMENTO IDENTIDAD (C.C.) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 1020304050"
                    className="w-full bg-surface-low border border-tech-border rounded-tech px-3 py-2 text-xs text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#8E9192] mb-1">
                    CORREO ELECTRÓNICO *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ciclista@astavik.co"
                    className="w-full bg-surface-low border border-tech-border rounded-tech px-3 py-2 text-xs text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#8E9192] mb-1">
                    DIRECCIÓN DE ENTREGA (COLOMBIA) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Cra 15 # 93-60, Bogotá"
                    className="w-full bg-surface-low border border-tech-border rounded-tech px-3 py-2 text-xs text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 border-t border-tech-border">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-void-black font-display font-black text-sm uppercase py-4 rounded-tech transition-all flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px]"
              >
                {isProcessing ? (
                  <span>CONECTANDO CON SERVIDORES WOMPI...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>PAGAR {formatCOP(product.priceCOP)} CON {paymentMethod}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#8E9192] mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>Transacción 100% segura vigilada por la Superfinanciera de Colombia.</span>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
