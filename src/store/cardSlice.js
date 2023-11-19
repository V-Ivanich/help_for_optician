import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: [],
    activeCard: [],
  },
  reducers: {
    addCard(state, action) {
      state.card.push(action.payload)
    },
    activeCard(state, action) {
      state.activeCard.push(action.payload)
    },
    clearActiveCards(state) {
      state.activeCard = []
    },
    desactiveCard(state, action) {
      state.activeCard = state.activeCard.filter(
        (card) => card.name !== action.payload,
      )
    },
  },
})

export const {
  addCard,
  activeCard,
  desactiveCard,
  clearActiveCards,
  restoreClassAdd,
  restoreClassClear,
} = cardSlice.actions
export default cardSlice.reducer
