import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BikeSizeKey } from '../types/bike';

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  selectedSize: BikeSizeKey;
  sku: string;
  priceCOP: number;
  imageSrc: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (id: string, selectedSize: BikeSizeKey) => void;
  updateQuantity: (id: string, selectedSize: BikeSizeKey, delta: number) => void;
  clearCart: () => void;
  setDrawerOpen: (isOpen: boolean) => void;
  getTotalCOP: () => number;
  getTotalItemsCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      addItem: (item, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (i) => i.id === item.id && i.selectedSize === item.selectedSize
          );

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
            return { items: updatedItems, isDrawerOpen: true };
          }

          return {
            items: [...state.items, { ...item, quantity }],
            isDrawerOpen: true,
          };
        });
      },

      removeItem: (id, selectedSize) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.id === id && i.selectedSize === selectedSize)
          ),
        }));
      },

      updateQuantity: (id, selectedSize, delta) => {
        set((state) => {
          const updatedItems = state.items
            .map((item) => {
              if (item.id === id && item.selectedSize === selectedSize) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
              }
              return item;
            })
            .filter((i): i is CartItem => i !== null);

          return { items: updatedItems };
        });
      },

      clearCart: () => set({ items: [] }),

      setDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),

      getTotalCOP: () => {
        return get().items.reduce((acc, item) => acc + item.priceCOP * item.quantity, 0);
      },

      getTotalItemsCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: 'astavik-cart-storage',
    }
  )
);
