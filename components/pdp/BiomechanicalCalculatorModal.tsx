'use client';

import React from 'react';
import { X, Ruler, CheckCircle2, AlertCircle } from 'lucide-react';
import { useBiomechanicsStore } from '../../stores/useBiomechanicsStore';
import { BiometricSizeRecommendation, BikeSizeKey } from '../../types/bike';

interface BiomechanicalCalculatorModalProps {
  recommendations: Record<BikeSizeKey, BiometricSizeRecommendation>;
}

export const BiomechanicalCalculatorModal: React.FC<BiomechanicalCalculatorModalProps> = ({
  recommendations,
}) => {
  const {
    heightCm,
    inseamCm,
    recommendedSize,
    isModalOpen,
    setHeightCm,
    setInseamCm,
    setActiveSize,
    setModalOpen,
  } = useBiomechanicsStore();

  if (!isModalOpen) return null;

  const currentRec = recommendations[recommendedSize];

  const handleApply = () => {
    setActiveSize(recommendedSize);
    setModalOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calc-modal-title"
      className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
    >
      <div className="bg-surface-dim border border-tech-border rounded-card max-w-lg w-full p-6 sm:p-8 flex flex-col gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-tech-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-tech bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <h3 id="calc-modal-title" className="text-white font-display font-black text-lg uppercase tracking-tight">
                Calculadora Biomecánica
              </h3>
              <p className="text-[11px] font-mono text-[#8E9192]">
                SISTEMA ANTHRO-FIT ASTĀVIK V1.4 // ALGORITMO DIN EN 14781
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(false)}
            aria-label="Cerrar calculadora biomecánica"
            className="p-2 text-[#8E9192] hover:text-white rounded-tech hover:bg-surface-low transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs Body */}
        <div className="flex flex-col gap-5">
          
          {/* Estatura Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#C4C7C7]">ESTATURA TOTAL (CM):</span>
              <span className="text-white font-bold text-sm bg-surface-low border border-tech-border px-3 py-1 rounded-tech">
                {heightCm} cm
              </span>
            </div>
            <input
              type="range"
              min="150"
              max="200"
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              aria-label="Estatura en centímetros"
              className="w-full accent-brand-orange h-2 bg-surface-mid rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#5F5E5E]">
              <span>150 cm</span>
              <span>175 cm</span>
              <span>200 cm</span>
            </div>
          </div>

          {/* Entrepierna Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#C4C7C7]">LONGITUD DE ENTREPIERNA / INSEAM (CM):</span>
              <span className="text-brand-orange font-bold text-sm bg-surface-low border border-tech-border px-3 py-1 rounded-tech">
                {inseamCm} cm
              </span>
            </div>
            <input
              type="range"
              min="65"
              max="100"
              value={inseamCm}
              onChange={(e) => setInseamCm(Number(e.target.value))}
              aria-label="Longitud de entrepierna en centímetros"
              className="w-full accent-brand-orange h-2 bg-surface-mid rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#5F5E5E]">
              <span>65 cm</span>
              <span>80 cm</span>
              <span>100 cm</span>
            </div>
            <p className="text-[10px] font-mono text-[#8E9192] flex items-center gap-1.5 mt-1 bg-surface-low/60 p-2 rounded border border-tech-border">
              <AlertCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
              <span>Instrucción: Mide descalzo contra la pared desde el piso hasta el perineo sosteniendo un libro firme.</span>
            </p>
          </div>

          {/* Result Card */}
          <div className="bg-surface-low border border-tech-border rounded-tech p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-[#8E9192]">TALLA SUGERIDA POR INGENIERÍA:</span>
              <span className="text-brand-orange font-display font-black text-2xl tracking-tight">
                TALLA {recommendedSize}
              </span>
            </div>

            {currentRec && (
              <div className="text-xs text-[#C4C7C7] border-t border-tech-border/60 pt-2 flex flex-col gap-1">
                <p className="font-medium text-white">{currentRec.postureDescription}</p>
                <div className="flex items-center gap-3 text-[11px] font-mono text-[#8E9192] mt-1">
                  <span>Stack/Reach Ratio: <strong className="text-white">{currentRec.stackReachRatio}</strong></span>
                  <span>•</span>
                  <span>Rango Estatura: <strong className="text-white">{currentRec.heightMinCm}-{currentRec.heightMaxCm} cm</strong></span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-tech-border">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="px-4 py-2.5 rounded-tech text-xs font-mono uppercase text-[#C4C7C7] hover:text-white hover:bg-surface-low border border-transparent transition-colors min-h-[44px]"
          >
            CANCELAR
          </button>
          
          <button
            type="button"
            onClick={handleApply}
            className="px-6 py-2.5 rounded-tech text-xs font-display font-bold uppercase tracking-wider bg-brand-orange hover:bg-brand-orange-hover text-void-black transition-all flex items-center gap-2 min-h-[44px]"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>APLICAR TALLA {recommendedSize}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
