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
    desactiveCard(state, action) {
      state.activeCard = state.activeCard.filter(
        (card) => card.id !== action.payload.id,
      )
    },
  },
})

export const { addCard, activeCard, desactiveCard } = cardSlice.actions
export default cardSlice.reducer
