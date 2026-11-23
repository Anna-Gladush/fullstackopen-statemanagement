import { create } from 'zustand'
import { useShallow } from "zustand/react/shallow"

const useMetricsScore = create(set => ({
  good: 0,
  neutral: 0,
  bad: 0,
  actions: {
    increaseGood: () => set(state => ({ good: state.good + 1 })),
    increaseNeutral: () => set(state => ({ neutral: state.neutral + 1 })),
    increaseBad: () => set(state => ({ bad: state.bad + 1 })),
  }
}))


export const useMetricsValues = () => 
  useMetricsScore(
    useShallow(state => ({
      good: state.good,
      neutral: state.neutral,
      bad: state.bad
    }))
  )


export const useMetricsAction = () => useMetricsScore(state => state.actions)