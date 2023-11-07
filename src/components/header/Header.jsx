import HeaderTopPanel from '../header-top-panel/HeaderTopPanel'
import { NavMenu } from '../nav-menu/NavMenu'
import Images from '../../img/man.svg'
import './header.css'

const Header = () => {
  const handlerInfo = () => {}

  return (
    <div>
      <div className='line-header'>
        <div className='container-header'>
          <HeaderTopPanel />
          <div className='logo-menu'>
            <div className='logo'>
              <h1>Help for optician</h1>
            </div>
            <div className='info'>
              <div className='info__title'>
                <h3>Сам Себе</h3>
                <h3>Технолог</h3>
              </div>
              <div className='info__image' onClick={handlerInfo}>
                <img src={Images} alt='info' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavMenu />
    </div>
  )
}

export default Header
