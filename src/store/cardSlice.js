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
    toggleValueButton(state, { payload }) {
      const templeValue = state.cards.map((item) =>
        item.id === payload
          ? {
              ...item,
              value: String(!JSON.parse(item.value)),
            }
          : item,
      )
      state.cards = templeValue
    },

    activeCard(state, { payload }) {
      state.activeCard.push(payload)
    },

    desactiveCard(state, { payload }) {
      state.activeCard = state.activeCard.filter((card) => card !== payload)
    },
  },
})

export const { activeCard, desactiveCard, addCard, toggleValueButton } =
  cardSlice.actions
export default cardSlice.reducer
