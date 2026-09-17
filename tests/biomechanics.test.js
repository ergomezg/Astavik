import { describe, it, expect } from 'vitest';

export function calculateBiomechanics(height, inseam) {
  let sizeCode = 'M';
  let sizeName = 'MEDIUM (M)';

  if (height < 165) {
    sizeCode = 'XS';
    sizeName = 'X-SMALL (XS)';
  } else if (height < 172) {
    sizeCode = 'S';
    sizeName = 'SMALL (S)';
  } else if (height < 182) {
    sizeCode = 'M';
    sizeName = 'MEDIUM (M)';
  } else if (height < 190) {
    sizeCode = 'L';
    sizeName = 'LARGE (L)';
  } else {
    sizeCode = 'XL';
    sizeName = 'X-LARGE (XL)';
  }

  const ratio = inseam / height;
  const posture = ratio > 0.48 ? 'Endurance' : 'Aero';

  return {
    sizeCode,
    sizeName,
    ratio: parseFloat(ratio.toFixed(2)),
    posture
  };
}

describe('Astāvik Biomechanical Anthropometry Engine', () => {
  it('assigns XS for height < 165cm', () => {
    const res = calculateBiomechanics(160, 75);
    expect(res.sizeCode).toBe('XS');
    expect(res.sizeName).toBe('X-SMALL (XS)');
  });

  it('assigns M for height 175cm', () => {
    const res = calculateBiomechanics(175, 80);
    expect(res.sizeCode).toBe('M');
    expect(res.sizeName).toBe('MEDIUM (M)');
  });

  it('assigns XL for height >= 190cm', () => {
    const res = calculateBiomechanics(192, 92);
    expect(res.sizeCode).toBe('XL');
    expect(res.sizeName).toBe('X-LARGE (XL)');
  });

  it('diagnoses Endurance posture when ratio > 0.48', () => {
    // 86cm inseam / 175cm height = 0.4914 > 0.48
    const res = calculateBiomechanics(175, 86);
    expect(res.ratio).toBeGreaterThan(0.48);
    expect(res.posture).toBe('Endurance');
  });

  it('diagnoses Aero posture when ratio <= 0.48', () => {
    // 80cm inseam / 175cm height = 0.4571 <= 0.48
    const res = calculateBiomechanics(175, 80);
    expect(res.ratio).toBeLessThanOrEqual(0.48);
    expect(res.posture).toBe('Aero');
  });
});
