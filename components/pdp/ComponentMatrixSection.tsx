import React from 'react';
import { ComponentSpecItem } from '../../types/bike';

interface ComponentMatrixSectionProps {
  verifiedWeightKg: number;
  weightNote: string;
  components: ComponentSpecItem[];
}

export const ComponentMatrixSection: React.FC<ComponentMatrixSectionProps> = ({
  verifiedWeightKg,
  weightNote,
  components,
}) => {
  return (
    <section className="w-full border-t border-tech-border pt-12 sm:pt-16 pb-12 sm:pb-16 bg-surface-dim/40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-mono tracking-widest uppercase mb-1">
              <span className="w-2 h-2 bg-brand-orange inline-block" />
              <span>ESPECIFICACIONES DE FÁBRICA</span>
            </div>
            <h2 className="text-white font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter">
              MATRIZ DE COMPONENTES
            </h2>
          </div>

          <div className="text-xs font-mono bg-surface-dim border border-tech-border px-3.5 py-2 rounded-tech flex items-center gap-2 self-start md:self-auto">
            <span className="text-[#8E9192]">PESO VERIFICADO:</span>
            <span className="text-brand-orange font-bold text-sm tracking-tight">
              {verifiedWeightKg} KG
            </span>
            <span className="text-[#5F5E5E] text-[11px]">{weightNote}</span>
          </div>
        </div>

        {/* 6 Component Cards Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {components.map((item) => (
            <div
              key={item.id}
              className="bg-surface-low border border-tech-border rounded-card p-5 sm:p-6 flex flex-col justify-between hover:border-[#404040] transition-colors group"
            >
              <div>
                <span className="text-brand-orange font-mono font-bold text-[11px] sm:text-xs tracking-widest uppercase block mb-2">
                  {item.categoryTag}
                </span>
                <h3 className="text-white font-display font-bold text-base sm:text-lg mb-2 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#C4C7C7] text-xs sm:text-[13px] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
