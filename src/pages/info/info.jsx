import { NavLink, Outlet, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearActiveCards } from '../../store/cardSlice'

import './info.css'

export const InfoPage = () => {
  const dispatch = useDispatch()
  dispatch(clearActiveCards())
  return (
    <div className='container-info'>
      <div className='info-title'>
        <button className='btn'>
          <Link to='/'>&laquo; На главную страницу</Link>
        </button>
        <h2>Справка!</h2>
      </div>
      <div className='menu-info'>
        <div className='menu-container'>
          <NavLink to='page_bevel'>Фаска</NavLink>
          <NavLink to='page_flatbevel'>Плоская фаска</NavLink>
          <NavLink to='page_colors'>Цвет</NavLink>
          <NavLink to='page_deflectionarrow'>Стрелка прогиба</NavLink>
          <NavLink to='page_wedge'>Клин</NavLink>
          <NavLink to='page_deadcolor'>Мертвый цвет</NavLink>
          <NavLink to='page_triangles'>Треугольники</NavLink>
          <NavLink to='page_rad_deg'>Радианы/Градусы</NavLink>
          <NavLink to='page_myhistorys'>История создания</NavLink>
          <NavLink to='page_myversions'>Версия программы</NavLink>
        </div>
        <div className='info-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
