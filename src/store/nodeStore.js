import { create } from 'zustand';

import { mockData } from '@/mocks/data';

export const nodeStore = create((set) => ({
  data: mockData,
  updateNodes: (newData) => {
    set(() => ({ data: newData }));
  },
  resetNodes: () => {
    set(() => ({ data: mockData }));
  },
}));
