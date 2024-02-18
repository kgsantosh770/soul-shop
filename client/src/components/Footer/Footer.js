import PlayStoreImage from '../../assets/images/icons/google-play.svg';
import AppStoreImage from '../../assets/images/icons/app-store.svg';
import LogoMobile from '../../assets/images/logos/logo-mobile.svg';
import LogoDesktop from '../../assets/images/logos/logo-desktop.svg';
import { DESKTOP_MIN_WIDTH } from '../../utils/constants';
import './Footer.css';
import SocialBox from '../SocialBox/SocialBox';

const Footer = () => {
    const footerLinks = [
        {
            name: 'Company',
            route: '#',
        },
        {
            name: 'How it works',
            route: '#',
        },
        {
            name: 'Service',
            route: '#',
        },
        {
            name: 'Help Center',
            route: '#',
        },
        {
            name: 'FAQ',
            route: '#',
        },
        {
            name: 'Blogs',
            route: '#',
        },
        {
            name: 'Designed By',
            route: '#',
        },
        {
            name: 'Developed By',
            route: '#',
        }
    ]
    return (
        <footer>
            <div className='footer-quote'>
                <picture>
                    <source srcSet={LogoDesktop} media={`min-width: ${DESKTOP_MIN_WIDTH}px`} />
                    <img alt='logo' title="Soul Shop" src={LogoMobile} />
                </picture>
                <p>Lorem ipsum dolor sit amet</p>
                <p>consectetur adipiscing</p>
                <p className='trademark'>© Soul-Shop,inc 2024</p>
            </div>
            <ul className='footer-links'>
                {
                    footerLinks.map((link, index) =>
                        <li key={index}>
                            <a title={link.name} href={link.route}>
                                {link.name}
                            </a>
                        </li>
                    )
                }
            </ul>
            <div className='external-links'>
                <SocialBox className='divider-top' />
                <div className='app-store-links'>
                    <p>Download</p>
                    <img className='app-store' alt='playstore' title='playstore' src={PlayStoreImage} />
                    <img className='app-store' alt='appstore' title='appstore' src={AppStoreImage} />
                </div>
            </div>
        </footer>
    )
}

export default Footer