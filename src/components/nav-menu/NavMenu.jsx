import './nav-menu.css'
import { Formul } from '../../utils'

const NavMenu = () => {
  const { Bevel } = Formul

  const handleToggleCard = (event) => {
    console.log(event.target)
    console.log(Bevel(100, 50, 3))
  }
  return (
    <div>
      <div className='container-menu'>
        <div className='nav-menu'>
          <button className='links-formul' id='0' onClick={handleToggleCard}>
            Фаска
          </button>
          <button className='links-formul' id='1' onClick={handleToggleCard}>
            Плоская фаска
          </button>
          <button className='links-formul' id='2' onClick={handleToggleCard}>
            Цвет
          </button>
          <button className='links-formul' id='3' onClick={handleToggleCard}>
            Стрелка прогиба
          </button>
          <button className='links-formul' id='4' onClick={handleToggleCard}>
            Клин
          </button>
          <button className='links-formul' id='5' onClick={handleToggleCard}>
            Мертвый цвет
          </button>
          <button className='links-formul' id='6' onClick={handleToggleCard}>
            Треугольники
          </button>
          <button className='links-formul' id='7' onClick={handleToggleCard}>
            Радианы/градусы
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
