import { create } from "zustand";

export const BillStore = create((set) => ({
  bill: null,
  bill_list: null,
  bill_no: 0,
  setBill_list: (data) => set(() => ({ bill_list: data })),
  setBill_no: (num) => set(() => ({ bill_no: num })),
  setBill: (item) => set(() => ({ bill: item })),
  deleteBill: (id) =>
    set((state) => ({
      bill_list: {
        ...state.bill_list,
        bills: state.bill_list?.bills.filter((bill) => bill._id !== id),
      },
    })),
}));
