import { temlateCards } from './data/templates_formuls'
import { useDispatch } from 'react-redux'
import { addCard } from './store/cardSlice'
import { Root } from './pages/root/root'

function App() {
  const dispatch = useDispatch()
  temlateCards.forEach((card) => {
    dispatch(addCard(card))
  })
  return (
    <>
      <Root />
    </>
  )
}

export default App
