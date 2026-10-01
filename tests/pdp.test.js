import { describe, it, expect } from 'vitest';
import { formatCOP } from '../lib/format';
import { calculateBiomechSize } from '../stores/useBiomechanicsStore';
import { bikeProducts, getBikeBySlug } from '../data/bike-products';
import { useCartStore } from '../stores/useCartStore';

describe('PDP Biomechanics & Formatting Engine', () => {
  it('formats COP currency strictly as $18.500.000 COP', () => {
    const formatted = formatCOP(18500000);
    expect(formatted).toBe('$18.500.000 COP');
  });

  it('calculates biomechanical size XS, S, M, L, XL accurately', () => {
    expect(calculateBiomechSize(160, 74)).toBe('XS');
    expect(calculateBiomechSize(170, 78)).toBe('S');
    expect(calculateBiomechSize(176, 82)).toBe('M');
    expect(calculateBiomechSize(184, 86)).toBe('L');
    expect(calculateBiomechSize(192, 91)).toBe('XL');
  });

  it('validates canonical bike product data integrity for Astāvik Carbon Pro', () => {
    const bike = getBikeBySlug('astavik-carbon-pro-2025');
    expect(bike).toBeDefined();
    expect(bike?.name).toBe('Astāvik Carbon Pro');
    expect(bike?.priceCOP).toBe(18500000);
    expect(bike?.quickTelemetry.weightKg).toBe(6.82);
    expect(bike?.quickTelemetry.inspectionPoints).toBe(120);
    expect(bike?.gallery.items).toHaveLength(4);
    expect(bike?.componentMatrix.components).toHaveLength(6);
    expect(bike?.geometry.specs).toHaveLength(6);
  });

  it('handles cart store operations (addItem, updateQuantity, getTotalCOP, removeItem)', () => {
    const store = useCartStore.getState();
    store.clearCart();

    store.addItem({
      id: 'bike-cp25',
      slug: 'astavik-carbon-pro-2025',
      name: 'Astāvik Carbon Pro',
      selectedSize: 'M',
      sku: 'AST-CP25',
      priceCOP: 18500000,
      imageSrc: '/assets/images/bikes/bike-carbon-pro-studio.webp',
    });

    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].quantity).toBe(1);
    expect(useCartStore.getState().getTotalCOP()).toBe(18500000);

    store.updateQuantity('bike-cp25', 'M', 1);
    expect(useCartStore.getState().items[0].quantity).toBe(2);
    expect(useCartStore.getState().getTotalCOP()).toBe(37000000);

    store.removeItem('bike-cp25', 'M');
    expect(useCartStore.getState().items).toHaveLength(0);
    expect(useCartStore.getState().getTotalCOP()).toBe(0);
  });
});
