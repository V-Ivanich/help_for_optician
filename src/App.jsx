<<<<<<< HEAD
import { Root } from './pages/root/root'

function App() {
=======
import { temlateCards } from './data/templates_formuls'
import { useDispatch } from 'react-redux'
import { addCard } from './store/cardSlice'
import { Root } from './pages/root/root'

function App() {
  const dispatch = useDispatch()
  temlateCards.forEach((card) => {
    dispatch(addCard(card))
  })
>>>>>>> c64b14c951be6a1ce07b809c23b5352aeead7133
  return (
    <>
      <Root />
    </>
  )
}

export default App
