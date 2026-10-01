import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BikeSizeKey } from '../types/bike';

export function calculateBiomechSize(height: number, inseam: number): BikeSizeKey {
  // Ratio antropométrico oficial Astāvik
  // Entrepierna tiene 60% de peso biomecánico en stack/standover y estatura 40% en reach
  if (height < 166 || inseam < 76) return 'XS';
  if (height <= 172 || inseam < 80) return 'S';
  if (height <= 180 || inseam <= 84) return 'M';
  if (height <= 188 || inseam <= 89) return 'L';
  return 'XL';
}

interface BiomechanicsState {
  heightCm: number;
  inseamCm: number;
  activeSize: BikeSizeKey;
  recommendedSize: BikeSizeKey;
  isManualOverride: boolean;
  isModalOpen: boolean;

  setHeightCm: (height: number) => void;
  setInseamCm: (inseam: number) => void;
  setActiveSize: (size: BikeSizeKey) => void;
  setModalOpen: (open: boolean) => void;
  resetToRecommended: () => void;
}

export const useBiomechanicsStore = create<BiomechanicsState>()(
  persist(
    (set, get) => ({
      heightCm: 176,
      inseamCm: 82,
      activeSize: 'M',
      recommendedSize: 'M',
      isManualOverride: false,
      isModalOpen: false,

      setHeightCm: (height) => {
        const state = get();
        const recommended = calculateBiomechSize(height, state.inseamCm);
        set({
          heightCm: height,
          recommendedSize: recommended,
          activeSize: state.isManualOverride ? state.activeSize : recommended,
        });
      },

      setInseamCm: (inseam) => {
        const state = get();
        const recommended = calculateBiomechSize(state.heightCm, inseam);
        set({
          inseamCm: inseam,
          recommendedSize: recommended,
          activeSize: state.isManualOverride ? state.activeSize : recommended,
        });
      },

      setActiveSize: (size) => {
        const state = get();
        set({
          activeSize: size,
          isManualOverride: size !== state.recommendedSize,
        });
      },

      setModalOpen: (open) => set({ isModalOpen: open }),

      resetToRecommended: () => {
        const state = get();
        set({
          activeSize: state.recommendedSize,
          isManualOverride: false,
        });
      },
    }),
    {
      name: 'astavik-biomechanics-storage',
    }
  )
);
