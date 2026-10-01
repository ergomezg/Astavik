'use client';

import React, { useState } from 'react';
import { BikeProduct } from '../../types/bike';
import { HeaderNavbar } from './HeaderNavbar';
import { BreadcrumbsBar } from './BreadcrumbsBar';
import { ProductGallery } from './ProductGallery';
import { BuyBox } from './BuyBox';
import { CartDrawer } from './CartDrawer';
import { WompiCheckoutModal } from './WompiCheckoutModal';
import { FrameArchitectureSection } from './FrameArchitectureSection';
import { ComponentMatrixSection } from './ComponentMatrixSection';
import { FooterTechnical } from './FooterTechnical';
import { useBiomechanicsStore } from '../../stores/useBiomechanicsStore';

interface BikeDetailPageContentProps {
  product: BikeProduct;
}

export const BikeDetailPageContent: React.FC<BikeDetailPageContentProps> = ({ product }) => {
  const [isWompiCheckoutOpen, setIsWompiCheckoutOpen] = useState(false);
  const activeSize = useBiomechanicsStore((state) => state.activeSize);

  return (
    <div className="min-h-screen bg-void-black text-[#E5E2E1] flex flex-col">
      {/* 1. Global Navigation Header */}
      <HeaderNavbar />

      {/* 2. Technical Breadcrumbs & Metadata Bar */}
      <BreadcrumbsBar
        category={product.category}
        productName={product.name}
        sku={product.sku}
        frameMatrix={product.frameMatrix}
      />

      {/* 3. Main Product Cockpit (Gallery & Buy Box) */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Visualizer Gallery */}
          <div className="lg:col-span-7 w-full">
            <ProductGallery
              viewerVersion={product.gallery.viewerVersion}
              resolutionLabel={product.gallery.resolutionLabel}
              has360Spin={product.gallery.has360Spin}
              weightKg={product.quickTelemetry.weightKg}
              drivetrain={product.quickTelemetry.drivetrain}
              tireClearanceMm={product.quickTelemetry.tireClearanceMm}
              inspectionPoints={product.quickTelemetry.inspectionPoints}
              items={product.gallery.items}
            />
          </div>

          {/* Right Column: Buy Box & Biomechanical Selector */}
          <div className="lg:col-span-5 w-full">
            <BuyBox product={product} />
          </div>

        </div>
      </main>

      {/* 4. Engineering Section: Frame Architecture & CAD Geometry */}
      <FrameArchitectureSection
        cadRevision={product.geometry.cadRevision}
        blueprintTitle={product.geometry.blueprintTitle}
        dinStandard={product.geometry.dinStandard}
        scale={product.geometry.scale}
        specs={product.geometry.specs}
        dxfDownloadUrl={product.geometry.dxfDownloadUrl}
      />

      {/* 5. Engineering Section: Factory Component Matrix */}
      <ComponentMatrixSection
        verifiedWeightKg={product.componentMatrix.verifiedWeightKg}
        weightNote={product.componentMatrix.weightNote}
        components={product.componentMatrix.components}
      />

      {/* 6. Footer */}
      <FooterTechnical />

      {/* 7. Persistent Cart Slide-out Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsWompiCheckoutOpen(true)} />

      {/* 8. Wompi Checkout Modal Triggered from Drawer */}
      <WompiCheckoutModal
        isOpen={isWompiCheckoutOpen}
        onClose={() => setIsWompiCheckoutOpen(false)}
        product={product}
        selectedSize={activeSize}
      />
    </div>
  );
};
