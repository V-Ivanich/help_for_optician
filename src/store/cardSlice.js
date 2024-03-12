import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    activeCard: [],
  },
  reducers: {
    addCard(state, { payload }) {
      state.cards.push(payload)
    },

    activeCard(state, { payload }) {
      state.activeCard.push(payload)
    },

    desactiveCard(state, { payload }) {
      state.activeCard = state.activeCard.filter((card) => card !== payload)
    },
  },
})

export const { activeCard, desactiveCard, addCard } = cardSlice.actions
export default cardSlice.reducer
