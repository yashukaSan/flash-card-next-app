// store/useScore.ts
import { create } from "zustand";

export const useScore = create((set) => ({
  score: 0,
  setScore: (val: number) => set({ score: val }),
}));
