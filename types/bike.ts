export type BikeSizeKey = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface GalleryThumbnail {
  id: string;
  badgeCode: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
}

export interface GeometryRow {
  dimension: string;
  values: Record<BikeSizeKey, number | string>;
}

export interface ComponentSpecItem {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
}

export interface BiometricSizeRecommendation {
  size: BikeSizeKey;
  heightMinCm: number;
  heightMaxCm: number;
  inseamMinCm: number;
  inseamMaxCm: number;
  stackReachRatio: number;
  postureDescription: string;
}

export interface BikeProduct {
  id: string;
  slug: string;
  sku: string;
  name: string;
  subtitle: string;
  category: 'Ruta' | 'Gravel' | 'Montaña';
  series: {
    editionBadge: string;
    unitNumber: string;
    totalUnits: string;
  };
  frameMatrix: string;
  priceCOP: number;
  taxIncluded: boolean;
  freeShipping: boolean;
  stockStatus: {
    available: boolean;
    location: string;
    dispatchTime: string;
  };
  quickTelemetry: {
    weightKg: number;
    drivetrain: string;
    tireClearanceMm: number;
    inspectionPoints: number;
  };
  gallery: {
    resolutionLabel: string;
    viewerVersion: string;
    has360Spin: boolean;
    items: GalleryThumbnail[];
  };
  sizes: Record<BikeSizeKey, {
    inStock: boolean;
    stockCount?: number;
  }>;
  biometricRecommendations: Record<BikeSizeKey, BiometricSizeRecommendation>;
  geometry: {
    cadRevision: string;
    blueprintTitle: string;
    blueprintImageSrc?: string;
    dinStandard: string;
    scale: string;
    specs: GeometryRow[];
    dxfDownloadUrl: string;
  };
  componentMatrix: {
    verifiedWeightKg: number;
    weightNote: string;
    components: ComponentSpecItem[];
  };
  guarantees: {
    carbonWarrantyYears: number;
    preTuneCustomized: boolean;
  };
}
