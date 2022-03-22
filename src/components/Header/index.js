import React from 'react'
import './Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../media/logo.png'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => { 
    if(user) { auth.signOut(); }
  }
  return (
    <div className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img className='header__logo'  src={ Logo }/>
        </Link>
        <div className='header__search'>
          <input className='header__search__input' type='text' />
          <SearchIcon className="header__search__icon" /> 
        </div>
        <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div className='header__option' onClick={handleAuthentication}>
            <span className='header__option__lineOne'>Hello {user ? user.name: "Guest"} </span>
            <span className='header__option__lineTwo'>{user ? "Sign out": "Sign in"}</span>
          </div>
          </Link>
          <Link to='/checkout'>
            <div className='header__option'>
              <span className='header__option__lineOne'>Returns</span>
              <span className='header__option__lineTwo'>& Orders</span>
            </div>
          </Link>
          <Link to='/'>
            <div className='header__option'>
              <span className='header__option__lineOne'>Your</span>
              <span className='header__option__lineTwo'>Prime</span>
            </div>
          </Link>
          <Link to='/checkout'>
            <div className='header__option'>
              <div className='header__option__basket'>
                <ShoppingCartIcon />
                <span className='header__option__lineTwo header__option__basket__count'>{basket?.length}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header