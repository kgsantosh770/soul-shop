import AiSoulGroupMobileImage from '../../assets/images/illustrations/group-mobile.png';
import AiSoulGroupImage from '../../assets/images/illustrations/group.png';
import Image from '../../components/Image/Image';
import './Home.css';

const Home = () => {
    return (
        <section className='homepage'>
            <div className="banner-text">
                <p>Discover AI - Generated</p>
                <p className="highlight">Characters for Virtual</p>
                <p>Companionship and Friendship</p>
            </div>
            <Image
                className="banner-img"
                image={AiSoulGroupMobileImage}
                desktopImage={AiSoulGroupImage}
                alt="ai-characters-group"
                title="AI Soul Group"
            />
            <p className='sub-banner-text'>
                Find your perfect virtual partner or friend through our innovative platform. Experience meaningful connections with AI-powered personalities. Explore the world of Soulmate AI today.
            </p>
        </section>
    )
}

export default Home