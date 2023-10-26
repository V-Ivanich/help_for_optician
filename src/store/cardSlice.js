import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: [],
    activeCard: [],
    restoreClass: [],
  },
  reducers: {
    addCard(state, action) {
      state.card.push(action.payload)
    },
    activeCard(state, action) {
      state.activeCard.push(action.payload)
    },
    desactiveCard(state, action) {
      console.log(action.payload.id)
      state.activeCard = state.activeCard.filter(
        (card) => card.id !== action.payload.id,
      )
    },
    restoreClassAdd(state, action) {
      state.restoreClass.push(action.payload)
    },
    restoreClassClear(state) {
      state.restoreClass = []
    },
  },
})

export const {
  addCard,
  activeCard,
  desactiveCard,
  restoreClassAdd,
  restoreClassClear,
} = cardSlice.actions
export default cardSlice.reducer
