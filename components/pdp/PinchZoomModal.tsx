'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface PinchZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
}

export const PinchZoomModal: React.FC<PinchZoomModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  altText,
  title,
  subtitle,
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // References for tracking multi-touch
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartDistRef = useRef<number | null>(null);
  const touchStartScaleRef = useRef<number>(1);
  const touchStartPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastTouchPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastTapTimeRef = useRef<number>(0);

  // Reset transforms when modal opens
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Touch event listeners
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch start
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartDistRef.current = dist;
      touchStartScaleRef.current = scale;
    } else if (e.touches.length === 1) {
      // Single touch - check double tap
      const now = Date.now();
      if (now - lastTapTimeRef.current < 300) {
        // Double tap toggle
        if (scale > 1.2) {
          setScale(1);
          setPosition({ x: 0, y: 0 });
        } else {
          setScale(2.5);
        }
        lastTapTimeRef.current = 0;
        return;
      }
      lastTapTimeRef.current = now;

      // Pan start
      touchStartPosRef.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
      lastTouchPosRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      e.preventDefault();
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / touchStartDistRef.current;
      const newScale = Math.min(Math.max(touchStartScaleRef.current * ratio, 1), 3.5);
      setScale(newScale);
    } else if (e.touches.length === 1 && scale > 1) {
      e.preventDefault();
      const newX = e.touches[0].clientX - touchStartPosRef.current.x;
      const newY = e.touches[0].clientY - touchStartPosRef.current.y;
      
      // Limit panning boundaries based on scale
      const maxOffset = (scale - 1) * 200;
      setPosition({
        x: Math.max(-maxOffset, Math.min(maxOffset, newX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, newY)),
      });
    }
  };

  const handleTouchEnd = () => {
    touchStartDistRef.current = null;
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  // Mouse wheel zoom support for desktop testing
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * -0.002;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + zoomDelta, 1), 3.5);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Mouse drag support for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      lastTouchPosRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      const dx = e.clientX - lastTouchPosRef.current.x;
      const dy = e.clientY - lastTouchPosRef.current.y;
      lastTouchPosRef.current = { x: e.clientX, y: e.clientY };

      setPosition((prev) => {
        const maxOffset = (scale - 1) * 200;
        return {
          x: Math.max(-maxOffset, Math.min(maxOffset, prev.x + dx)),
          y: Math.max(-maxOffset, Math.min(maxOffset, prev.y + dy)),
        };
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3.5));
  };

  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visor de alta resolución: ${title}`}
      className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-between select-none animate-fadeIn"
      onWheel={handleWheel}
      onMouseUp={handleMouseUp}
    >
      {/* Top Header / HUD Bar */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-tech-border bg-surface-dim/80 z-20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <h3 className="text-white font-display font-black text-sm sm:text-base uppercase tracking-tight">
              {title}
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-mid text-brand-orange border border-tech-border">
              4K MICROSCOPY
            </span>
          </div>
          <p className="text-xs font-mono text-[#8E9192] mt-0.5">{subtitle}</p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-surface-mid border border-tech-border rounded-tech p-1">
            <button
              type="button"
              onClick={zoomOut}
              disabled={scale <= 1}
              aria-label="Alejar imagen"
              className="p-2 text-[#C4C7C7] hover:text-white disabled:opacity-30 rounded hover:bg-surface-high transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-white px-2 min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              disabled={scale >= 3.5}
              aria-label="Acercar imagen"
              className="p-2 text-[#C4C7C7] hover:text-white disabled:opacity-30 rounded hover:bg-surface-high transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={resetZoom}
            aria-label="Restablecer vista a 100%"
            className="p-2.5 bg-surface-mid hover:bg-surface-high border border-tech-border text-[#C4C7C7] hover:text-white rounded-tech transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar visor a pantalla completa"
            className="p-2.5 bg-brand-orange hover:bg-brand-orange-hover text-void-black rounded-tech transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Zoom Canvas */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        className="flex-1 w-full h-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing p-4"
      >
        <div
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            touchAction: 'none',
          }}
          className="relative max-w-full max-h-full flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={altText}
            width={1200}
            height={800}
            draggable={false}
            className="max-w-[90vw] max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* Bottom Technical HUD & Gesture Instructions */}
      <div className="p-3 sm:p-4 border-t border-tech-border bg-surface-dim/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8E9192] gap-2 z-20">
        <div className="flex items-center gap-3">
          <span className="text-brand-orange font-bold">GESTOS TÁCTILES:</span>
          <span>Pellizcar para ampliar // Arrastrar para inspeccionar // Doble tap para restablecer</span>
        </div>
        <div className="text-white font-semibold">
          TORAYCA T1100G CARBON WEAVE INSPECTION • 3.5X MAX RESOLUTION
        </div>
      </div>
    </div>
  );
};
