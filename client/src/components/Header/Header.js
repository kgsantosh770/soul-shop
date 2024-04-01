import { useState, useEffect,useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { DESKTOP_MIN_WIDTH } from '../../features/utils/constants';
import LogoDesktop from '../../assets/images/logos/logo-desktop.svg';
import LogoMobile from '../../assets/images/logos/logo-mobile.svg';
import CartIcon from '../../assets/images/icons/cart.svg';
import ProfileIcon from '../../assets/images/icons/profile.png';
import MenuIcon from '../../assets/images/icons/hamburger-menu.svg';
import LogoMobileLarge from '../../assets/images/logos/logo-mobile-large.svg';
import CloseIcon from '../../assets/images/icons/close.svg';
import PlayStoreImage from '../../assets/images/icons/google-play.svg';
import AppStoreImage from '../../assets/images/icons/app-store.svg';
import './Header.css';
import IconBadge from '../IconBadge/IconBadge';
import SocialBox from '../SocialBox/SocialBox';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../redux/cartSlice';
import { removeUser } from '../../redux/userSlice';

const Header = () => {
  const cartItemCount = useSelector(state => state.cart.products.length);
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const profileIconRef = useRef();
  const navlinks = [
    { name: 'Characters', route: '/characters' },
    { name: 'About Us', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileIconRef.current && !profileIconRef.current.contains(event.target)) {
        setIsProfilePopupOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [])


  const toggleSideMenu = () => {
    if (window.screen.width < 768) {
      if (typeof window != 'undefined' && window.document) {
        if (document.body.style.overflow === 'hidden')
          document.body.style.overflow = 'auto';
        else
          document.body.style.overflow = 'hidden';
      }
      setisMobileMenuOpen(prev => !prev);
    }
  }

  const logout = () => {
    localStorage.removeItem('Authorization');
    dispatch(deleteCart());
    dispatch(removeUser());
    setisMobileMenuOpen(false);
  }


  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(prev => !prev);
  }

  const navLinkElements = (
    <ul className='nav-links'>
      {
        navlinks.map(
          (link, index) =>
            <li key={index}>
              <NavLink
                end
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
                onClick={toggleSideMenu}
                to={link.route}>
                {link.name}
              </NavLink>
            </li>
        )
      }
    </ul>
  )

  return (
    <header>
      <Link to={'/'}>
        <picture>
          <source srcSet={LogoDesktop} media={`min-width: ${DESKTOP_MIN_WIDTH}px`} />
          <img alt='logo' title="Soul Shop" src={LogoMobile} />
        </picture>
      </Link>

      <div className='only-desktop'>
        {navLinkElements}
      </div>

      <div className='right-icons'>
        <Link to={`/cart`}>
          <IconBadge badgeCount={cartItemCount}>
            <img className='icon' alt='Cart' title='Cart' src={CartIcon} />
          </IconBadge>
        </Link>
        <button ref={profileIconRef} className='only-desktop profile-icon' onClick={() => toggleProfilePopup()}>
          <IconBadge badgeCount={0}>
            <img className='icon profile' alt='Profile' title='Profile' src={ProfileIcon} />
          </IconBadge>
          {
            user && isProfilePopupOpen &&
            <ul className='profile-popup'>
              <li className='name'>Hi {user.name}</li>
              <li onClick={() => logout()}>Logout</li>
            </ul>
          }
        </button>
        {
          user === null &&
          <>
            <Link to={'/signin'} className='login-btn only-desktop'>Signin</Link>
            <Link to={'/register'} className='login-btn only-desktop'>Register</Link>
          </>
        }
        <button className='only-mobile' onClick={toggleSideMenu}>
          <img className='icon icon-large' alt='Menu' title='Menu' src={MenuIcon} />
        </button>
      </div>

      <div className={`only-mobile side-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className='inner-content'>
          <button className='close-btn' onClick={toggleSideMenu}>
            <img className='icon icon-large' alt='close' title='close' src={CloseIcon} />
          </button>
          <img alt='logo' title='logo' src={LogoMobileLarge} />
          {navLinkElements}
          {
            user === null ?
            <>
              <Link onClick={toggleSideMenu} to={'/signin'} className='login-btn'>Signin</Link>
              <Link onClick={toggleSideMenu} to={'/register'} className='login-btn'>Register</Link>
            </> :
            <Link onClick={()=>logout()} className='login-btn'>Logout</Link>
          }
          <SocialBox className='divider-top' />
          <div className='nav-footer'>
            <p>Download</p>
            <img className='app-store' alt='playstore' title='playstore' src={PlayStoreImage} />
            <img className='app-store' alt='appstore' title='appstore' src={AppStoreImage} />
            <p>Lorem ipsum dolor</p>
            <p>sit amet, consectetur.</p>
            <p className='trademark'>© Soul-Shop,inc 2024</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header