'use client';

import React from 'react';
import { Download, Compass } from 'lucide-react';
import { GeometryRow, BikeSizeKey } from '../../types/bike';
import { useBiomechanicsStore } from '../../stores/useBiomechanicsStore';

interface FrameArchitectureSectionProps {
  cadRevision: string;
  blueprintTitle: string;
  dinStandard: string;
  scale: string;
  specs: GeometryRow[];
  dxfDownloadUrl: string;
}

export const FrameArchitectureSection: React.FC<FrameArchitectureSectionProps> = ({
  cadRevision,
  blueprintTitle,
  dinStandard,
  scale,
  specs,
  dxfDownloadUrl,
}) => {
  const activeSize = useBiomechanicsStore((state) => state.activeSize);
  const setActiveSize = useBiomechanicsStore((state) => state.setActiveSize);

  const sizesList: BikeSizeKey[] = ['XS', 'S', 'M', 'L', 'XL'];

  // Calcular ratio Stack / Reach para la talla activa
  const stackRow = specs.find((s) => s.dimension.startsWith('Stack'));
  const reachRow = specs.find((s) => s.dimension.startsWith('Reach'));

  const stackVal = stackRow ? Number(stackRow.values[activeSize]) : 552;
  const reachVal = reachRow ? Number(reachRow.values[activeSize]) : 388;
  const currentRatio = (stackVal / reachVal).toFixed(2);

  const postureText =
    Number(currentRatio) <= 1.43
      ? 'Competición Agresiva'
      : Number(currentRatio) <= 1.46
      ? 'Aero Equilibrada'
      : 'Aero Endurance';

  return (
    <section className="w-full border-t border-tech-border pt-12 sm:pt-16 pb-12 sm:pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-mono tracking-widest uppercase mb-1">
              <span className="w-2 h-2 bg-brand-orange inline-block" />
              <span>INGENIERÍA DE PRECISIÓN</span>
            </div>
            <h2 className="text-white font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter">
              ARQUITECTURA DE CUADRO & GEOMETRÍA
            </h2>
          </div>

          <div className="text-xs font-mono text-[#8E9192] tracking-wider bg-surface-dim border border-tech-border px-3 py-1.5 rounded-tech">
            CAD SPECIFICATION: <span className="text-white font-semibold">{cadRevision}</span>
          </div>
        </div>

        {/* 2 Columns: CAD Blueprint Vector & Measurement Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Technical Blueprint 2D Visualizer */}
          <div className="lg:col-span-6 bg-surface-dim border border-tech-border rounded-card p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group">
            {/* Background CAD Technical Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1C1B1B_1px,transparent_1px),linear-gradient(to_bottom,#1C1B1B_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

            {/* Top HUD */}
            <div className="flex items-center justify-between text-xs font-mono z-10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-orange" />
                <span className="text-white font-bold tracking-wider">BLUEPRINT DIMENSIONAL 2D</span>
              </div>
              <span className="text-[#8E9192] text-[10px] uppercase">VECTORIAL CAD</span>
            </div>

            {/* Blueprint Technical Drawing SVG */}
            <div className="relative w-full aspect-[16/10] my-4 flex items-center justify-center z-10">
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full text-white/80 transition-all duration-300"
                fill="none"
                stroke="currentColor"
              >
                {/* CAD Coordinates & Axes */}
                <path d="M50 450 H750" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <path d="M180 50 V450" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <path d="M620 50 V450" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />

                {/* Blueprint Title inside drawing */}
                <text x="50" y="35" fill="#8E9192" fontSize="12" fontFamily="monospace" letterSpacing="2">
                  {blueprintTitle}
                </text>

                {/* Wheels (Front & Rear) */}
                {/* Rear Wheel */}
                <circle cx="180" cy="330" r="130" stroke="#404040" strokeWidth="3" />
                <circle cx="180" cy="330" r="105" stroke="#262626" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="180" cy="330" r="15" stroke="#FF4D00" strokeWidth="2" />
                
                {/* Front Wheel */}
                <circle cx="620" cy="330" r="130" stroke="#404040" strokeWidth="3" />
                <circle cx="620" cy="330" r="105" stroke="#262626" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="620" cy="330" r="15" stroke="#FF4D00" strokeWidth="2" />

                {/* Frame Tubes (High Precision Geometry) */}
                {/* Bottom Bracket (BB) */}
                <circle cx="340" cy="350" r="12" stroke="#FF4D00" strokeWidth="2.5" />

                {/* Chainstays */}
                <line x1="180" y1="330" x2="340" y2="350" stroke="#E5E2E1" strokeWidth="3.5" />
                
                {/* Seat Tube */}
                <line x1="340" y1="350" x2="310" y2="180" stroke="#E5E2E1" strokeWidth="4" />
                
                {/* Seatpost & Saddle */}
                <line x1="310" y1="180" x2="280" y2="120" stroke="#FF4D00" strokeWidth="3" />
                <path d="M245 118 Q290 115 320 120" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

                {/* Seatstays */}
                <line x1="180" y1="330" x2="310" y2="180" stroke="#E5E2E1" strokeWidth="3" />

                {/* Top Tube */}
                <line x1="310" y1="180" x2="520" y2="160" stroke="#E5E2E1" strokeWidth="4" />

                {/* Head Tube */}
                <line x1="520" y1="160" x2="540" y2="230" stroke="#FF4D00" strokeWidth="5" />

                {/* Down Tube */}
                <line x1="340" y1="350" x2="540" y2="230" stroke="#E5E2E1" strokeWidth="4.5" />

                {/* Front Fork */}
                <line x1="540" y1="230" x2="620" y2="330" stroke="#E5E2E1" strokeWidth="3.5" />

                {/* Integrated Cockpit & Handlebars */}
                <line x1="520" y1="160" x2="535" y2="135" stroke="#FFFFFF" strokeWidth="3" />
                <path d="M535 135 H565 Q585 145 570 175" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" />

                {/* Technical Dimension Lines & Dimension Labels */}
                {/* Stack Line (Vertical from BB to top of headtube) */}
                <line x1="340" y1="350" x2="340" y2="160" stroke="#FF4D00" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="340" y1="160" x2="520" y2="160" stroke="#FF4D00" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="350" y="260" fill="#FF4D00" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  STACK: {stackVal}mm
                </text>

                {/* Reach Line (Horizontal from BB line to headtube) */}
                <text x="400" y="150" fill="#FF4D00" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  REACH: {reachVal}mm
                </text>

                {/* Wheelbase Line */}
                <line x1="180" y1="410" x2="620" y2="410" stroke="#8E9192" strokeWidth="1" />
                <path d="M180 405 V415 M620 405 V415" stroke="#8E9192" strokeWidth="1" />
                <text x="350" y="425" fill="#8E9192" fontSize="10" fontFamily="monospace">
                  WHEELBASE (ENTRE EJES)
                </text>

                {/* Astāvik Logo on Downtube */}
                <text x="410" y="300" fill="#FF4D00" fontSize="12" fontFamily="sans-serif" fontWeight="900" transform="rotate(-30 410 300)" letterSpacing="2">
                  ASTĀVIK
                </text>
              </svg>
            </div>

            {/* Bottom Technical Stamp */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#8E9192] border-t border-tech-border/70 pt-3 z-10">
              <span>{dinStandard}</span>
              <span className="text-brand-orange font-bold">{scale}</span>
            </div>
          </div>

          {/* RIGHT: Geometry Specification Matrix */}
          <div className="lg:col-span-6 bg-surface-dim border border-tech-border rounded-card p-5 sm:p-6 flex flex-col justify-between">
            
            <div>
              {/* Matrix Table Header */}
              <div className="flex items-center justify-between text-xs font-mono border-b border-tech-border pb-3 mb-4">
                <span className="text-white font-bold tracking-wider">MATRIZ DE MEDIDAS (MM)</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#8E9192]">TALLA SELECCIONADA:</span>
                  <span className="text-brand-orange font-bold px-2 py-0.5 rounded bg-brand-orange/15 border border-brand-orange/40">
                    {activeSize}
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-tech-border text-[#8E9192] text-[11px]">
                      <th className="py-2.5 text-left font-medium">COTAS TÉCNICAS</th>
                      {sizesList.map((sizeKey) => {
                        const isSelected = sizeKey === activeSize;
                        return (
                          <th
                            key={sizeKey}
                            onClick={() => setActiveSize(sizeKey)}
                            className={`py-2.5 px-3 text-center cursor-pointer transition-colors ${
                              isSelected
                                ? 'text-brand-orange font-bold bg-brand-orange/10'
                                : 'hover:text-white'
                            }`}
                          >
                            {sizeKey}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-tech-border/40">
                    {specs.map((row) => (
                      <tr key={row.dimension} className="hover:bg-surface-low/50 transition-colors">
                        <td className="py-3 text-white font-medium text-left">
                          {row.dimension}
                        </td>
                        {sizesList.map((sizeKey) => {
                          const isSelected = sizeKey === activeSize;
                          const val = row.values[sizeKey];
                          return (
                            <td
                              key={sizeKey}
                              onClick={() => setActiveSize(sizeKey)}
                              className={`py-3 px-3 text-center cursor-pointer transition-colors ${
                                isSelected
                                  ? 'text-brand-orange font-bold bg-brand-orange/15 border-x border-brand-orange/30'
                                  : 'text-[#C4C7C7]'
                              }`}
                            >
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Matrix Footer Notes & DXF Download Link */}
            <div className="border-t border-tech-border/80 pt-4 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="text-[#C4C7C7]">
                <span>Relación Stack/Reach (Talla {activeSize}): </span>
                <strong className="text-brand-orange font-bold">{currentRatio}</strong>
                <span className="text-[#8E9192]"> ({postureText})</span>
              </div>

              <a
                href={dxfDownloadUrl}
                download
                className="text-brand-orange hover:text-brand-orange-hover font-bold flex items-center gap-1.5 transition-colors underline underline-offset-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar DXF / PDF</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
