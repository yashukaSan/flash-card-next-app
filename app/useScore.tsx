// store/useScore.ts
import { create } from "zustand";

interface ScoreStore {
  score: number;
  setScore: (val: number) => void;
}

export const useScore = create<ScoreStore>((set) => ({
  score: 0,
  setScore: (val: number) => set({ score: val }),
}));
