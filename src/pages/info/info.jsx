import { NavLink, Outlet, Link } from 'react-router-dom'

import './info.css'

export const InfoPage = () => {
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
          <NavLink to='bevel'>Фаска</NavLink>
          <NavLink to='flatbevel'>Плоская фаска</NavLink>
          <NavLink to='colors'>Цвет</NavLink>
          <NavLink to='deflectionarrow'>Стрелка прогиба</NavLink>
          <NavLink to='wedge'>Клин</NavLink>
          <NavLink to='deadcolor'>Мертвый цвет</NavLink>
          <NavLink to='triangles'>Треугольники</NavLink>
          <NavLink to='rad_deg'>Радианы/Градусы</NavLink>
          <NavLink to='myhistorys'>История создания</NavLink>
          <NavLink to='myversions'>Версия программы</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
