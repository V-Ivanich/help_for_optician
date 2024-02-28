import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    activeCard: [],
  },
  reducers: {
    activeCard(state, { payload }) {
      state.activeCard.push(payload)
    },

    desactiveCard(state, { payload }) {
      state.activeCard = state.activeCard.filter((card) => card !== payload)
    },
  },
})

export const { activeCard, desactiveCard } = cardSlice.actions
export default cardSlice.reducer
