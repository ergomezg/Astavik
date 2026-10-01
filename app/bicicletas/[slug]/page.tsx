import { notFound } from 'next/navigation';
import { getBikeBySlug, getAllBikeSlugs, bikeProducts } from '@/data/bike-products';
import { BikeDetailPageContent } from '@/components/pdp/BikeDetailPageContent';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBikeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBikeBySlug(slug) || bikeProducts[0];
  if (!bike) return { title: 'Bicicleta no encontrada | Astāvik' };

  return {
    title: `${bike.name} 2025 | Astāvik Performance Lab`,
    description: `${bike.subtitle}. Cuadro ${bike.frameMatrix}, transmisión ${bike.quickTelemetry.drivetrain}, peso verificado ${bike.quickTelemetry.weightKg} kg.`,
  };
}

export default async function BikeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const bike = getBikeBySlug(slug) || bikeProducts[0];

  if (!bike) {
    notFound();
  }

  return <BikeDetailPageContent product={bike} />;
}
