import Header from './components/header/Header'
import Main from './components/main/Main'
import { temlateCards } from './data/templates_formuls'
import { useDispatch } from 'react-redux'
import { addCard } from './store/cardSlice'

function App() {
  const dispatch = useDispatch()
  temlateCards.forEach((card) => {
    dispatch(addCard(card))
  })
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
