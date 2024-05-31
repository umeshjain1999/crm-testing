import { create } from 'zustand'

type stateTypes = {
  bears: number,
  increasePopulation: () => void,
  removeAllBears: () => void,
  updateBears: (newBears:number) => void,
}

export const bearStore = create<stateTypes>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears:number) => set({ bears: newBears }),
}))