import create from "zustand"

type Count = {
  count: number;
  count2: number;
  count3: number;
  increaseCount: () => void;
  increaseCount2: () => void;
  increaseCount3: () => void;
  resetCounts: () => void;
}

export const useCountStore = create<Count>((set) => ({
  count: 0,
  count2: 0,
  count3: 0,

  increaseCount:() => set((state) => {
    return { count: state.count + 1 }
  }),
  increaseCount2:() => set((state) => {
    return { count: state.count2 + 1 }
  }),
  increaseCount3:() => set((state) => {
    return { count3: state.count3 + 1 }
  }),
  resetCounts: () => set({ count: 0, count2: 0, count3: 0 }),
}))
