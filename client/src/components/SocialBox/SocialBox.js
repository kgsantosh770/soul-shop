import InstagramIcon from '../../assets/images/icons/instagram.svg';
import TwitterIcon from '../../assets/images/icons/twitter.svg';
import FacebookIcon from '../../assets/images/icons/facebook.svg';
import './SocialBox.css';

const SocialBox = ({ className = '' }) => {
    const socialApps = [
        {
            name: 'Instagram',
            img: InstagramIcon,
            link: '#instagram'
        },
        {
            name: 'Twitter',
            img: TwitterIcon,
            link: '#twitter'
        },
        {
            name: 'Facebook',
            img: FacebookIcon,
            link: '#facebook'
        },
    ]
    return (
        <div className={`social-box ${className}`}>
            {
                socialApps.map(
                    (app, index) =>
                        <a key={index} href={app.link} title={app.name}>
                            <img className='icon icon-large' alt={app.name} title={app.name} src={app.img} />
                        </a>
                )
            }
        </div>
    )
}

export default SocialBox