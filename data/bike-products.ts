import { BikeProduct } from '../types/bike';

export const bikeProducts: BikeProduct[] = [
  {
    id: 'bike-cp25',
    slug: 'astavik-carbon-pro-2025',
    sku: 'AST-CP25',
    name: 'Astāvik Carbon Pro',
    subtitle: 'AERODYNAMIC HIGH-MODULUS MONOCOQUE ROAD CHASSIS',
    category: 'Ruta',
    series: {
      editionBadge: 'EDICIÓN COMPETICIÓN 2025',
      unitNumber: '014',
      totalUnits: '100',
    },
    frameMatrix: 'AETHER-HM05 - TORAY T1100G CARBON',
    priceCOP: 18500000,
    taxIncluded: true,
    freeShipping: true,
    stockStatus: {
      available: true,
      location: 'BOGOTÁ',
      dispatchTime: '24H',
    },
    quickTelemetry: {
      weightKg: 6.82,
      drivetrain: 'ULTEGRA DI2 12S',
      tireClearanceMm: 34,
      inspectionPoints: 120,
    },
    gallery: {
      viewerVersion: 'ASTĀVIK LAB VIEWER v3.4',
      resolutionLabel: 'RESOLUTION: 4K HIGH FIDELITY',
      has360Spin: true,
      items: [
        {
          id: 'thumb-1',
          badgeCode: 'CX-01',
          title: 'Carbon Void',
          subtitle: 'Matte Raw Finish',
          imageSrc: '/assets/images/pdp/pdp-carbon-pro-downtube.webp',
          altText: 'Astāvik Carbon Pro - Tubo diagonal en acabado Carbon Void mate crudo',
        },
        {
          id: 'thumb-2',
          badgeCode: 'ACTIVE',
          title: 'Competition Orange',
          subtitle: 'Special Gloss Edition',
          imageSrc: '/assets/images/bikes/bike-carbon-pro-studio.webp',
          altText: 'Astāvik Carbon Pro - Vista lateral en Competition Orange Special Gloss Edition',
        },
        {
          id: 'thumb-3',
          badgeCode: 'R8150',
          title: 'Drivetrain Di2',
          subtitle: '12-Speed Electronic',
          imageSrc: '/assets/images/pdp/pdp-carbon-pro-bb-crank.webp',
          altText: 'Astāvik Carbon Pro - Transmisión y pedalier electrónico Shimano Di2 12 velocidades',
        },
        {
          id: 'thumb-4',
          badgeCode: 'JJ28T',
          title: 'Carbon Weave Joint',
          subtitle: 'Monocoque Junction',
          imageSrc: '/assets/images/pdp/pdp-carbon-pro-seatstays.webp',
          altText: 'Astāvik Carbon Pro - Unión monocasco de tirantes de carbono y tija aero',
        },
      ],
    },
    sizes: {
      XS: { inStock: false },
      S: { inStock: true, stockCount: 2 },
      M: { inStock: true, stockCount: 5 },
      L: { inStock: true, stockCount: 3 },
      XL: { inStock: false },
    },
    biometricRecommendations: {
      XS: {
        size: 'XS',
        heightMinCm: 158,
        heightMaxCm: 166,
        inseamMinCm: 72,
        inseamMaxCm: 76,
        stackReachRatio: 1.38,
        postureDescription: 'Competición Agresiva (Stack reducido para penetración aerodinámica máxima)',
      },
      S: {
        size: 'S',
        heightMinCm: 166,
        heightMaxCm: 172,
        inseamMinCm: 76,
        inseamMaxCm: 80,
        stackReachRatio: 1.40,
        postureDescription: 'Competición Agresiva (Equilibrio de velocidad en escalada y reactividad)',
      },
      M: {
        size: 'M',
        heightMinCm: 172,
        heightMaxCm: 180,
        inseamMinCm: 80,
        inseamMaxCm: 84,
        stackReachRatio: 1.42,
        postureDescription: 'Competición Agresiva (Geometría equilibrada para óptima transferencia de vatios)',
      },
      L: {
        size: 'L',
        heightMinCm: 180,
        heightMaxCm: 188,
        inseamMinCm: 84,
        inseamMaxCm: 89,
        stackReachRatio: 1.45,
        postureDescription: 'Aero Equilibrada (Mayor stack para estabilidad a altas velocidades)',
      },
      XL: {
        size: 'XL',
        heightMinCm: 188,
        heightMaxCm: 198,
        inseamMinCm: 89,
        inseamMaxCm: 95,
        stackReachRatio: 1.48,
        postureDescription: 'Aero Endurance (Confort ergonómico en etapas de fondo sin perder aerodinámica)',
      },
    },
    geometry: {
      cadRevision: 'ASTAVIK-AETHER REV 4.2 // COMPACT AERO',
      blueprintTitle: 'ASTAVIK AETHER - ROAD & GRAVEL BICYCLE BLUEPRINT',
      dinStandard: 'REFERENCIA GEOMÉTRICA DIN EN 14781',
      scale: 'SCALE: 1:10 CNC MASTER',
      specs: [
        {
          dimension: 'Stack (A)',
          values: { XS: 518, S: 534, M: 552, L: 574, XL: 598 },
        },
        {
          dimension: 'Reach (B)',
          values: { XS: 374, S: 382, M: 388, L: 396, XL: 405 },
        },
        {
          dimension: 'Longitud Vainas',
          values: { XS: 408, S: 408, M: 410, L: 410, XL: 412 },
        },
        {
          dimension: 'Ángulo Dirección',
          values: { XS: '71.5°', S: '72.3°', M: '73.0°', L: '73.5°', XL: '73.5°' },
        },
        {
          dimension: 'Standover Height',
          values: { XS: 745, S: 768, M: 792, L: 815, XL: 840 },
        },
        {
          dimension: 'Wheelbase Total',
          values: { XS: 975, S: 988, M: 1005, L: 1018, XL: 1032 },
        },
      ],
      dxfDownloadUrl: '#',
    },
    componentMatrix: {
      verifiedWeightKg: 6.82,
      weightNote: '(SIN PEDALES)',
      components: [
        {
          id: 'spec-1',
          categoryTag: 'TRANSMISIÓN & GRUPO',
          title: 'Shimano Dura-Ace Di2 R9270 12 Velocidades',
          description: 'Bielas 52-36T Hollowtech II con potenciómetro integrado de doble cara, cassette 11-30T ultra-cerrado.',
        },
        {
          id: 'spec-2',
          categoryTag: 'RUEDAS AERO',
          title: 'Astāvik HyperAero 50 Carbon Disc',
          description: 'Perfil de 50mm, ancho interno 21mm hookless, bujes DT Swiss 180 con rodamientos cerámicos SINC.',
        },
        {
          id: 'spec-3',
          categoryTag: 'SISTEMA DE FRENADO',
          title: 'Frenos de Disco Hidráulicos Dura-Ace Flat-Mount',
          description: 'Rotores RT-CL900 Freeza Ice-Technologies (160mm delantero / 140mm trasero) anti-fading térmico.',
        },
        {
          id: 'spec-4',
          categoryTag: 'COCKPIT INTEGRADO',
          title: 'AeroFlow Carbon Cockpit Monocasco',
          description: 'Cableado 100% interno oculto, flare ergonómico de 3°, soporte de ciclocomputador CNC de titanio.',
        },
        {
          id: 'spec-5',
          categoryTag: 'SILLÍN & TIJA',
          title: 'Selle Italia SLR Boost Superflow Carbon Rails',
          description: 'Tija Astāvik D-Shape Aero de retroceso ajustable (0mm / 15mm) con elastómero de amortiguación.',
        },
        {
          id: 'spec-6',
          categoryTag: 'NEUMÁTICOS DE COMPETICIÓN',
          title: 'Vittoria Corsa PRO TLR 700 × 28c Tubeless',
          description: 'Carcasa de algodón de 320 TPI con compuesto Graphene + Silica y sellante líquido de competición.',
        },
      ],
    },
    guarantees: {
      carbonWarrantyYears: 3,
      preTuneCustomized: true,
    },
  },
];

export function getBikeBySlug(slug: string): BikeProduct | undefined {
  return bikeProducts.find((p) => p.slug === slug);
}

export function getAllBikeSlugs(): string[] {
  return bikeProducts.map((p) => p.slug);
}
