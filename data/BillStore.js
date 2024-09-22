import { create } from "zustand";

export const BillStore = create((set) => ({
  bill: null,

  setBill: (item) => set(() => ({ bill: item })),
}));
