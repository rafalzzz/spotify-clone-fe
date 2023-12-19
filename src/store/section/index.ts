import { create } from 'zustand';

import { TUseSectionStore } from '@/types/store';

export const useSectionStore = create<TUseSectionStore>((set) => ({
  isResizing: false,
  itemsAmount: null,
  enableResizing: () => set(() => ({ isResizing: true })),
  disableResizing: () => set(() => ({ isResizing: false })),
  setItemsAmount: (itemsAmount: number) => set(() => ({ itemsAmount: itemsAmount })),
}));
