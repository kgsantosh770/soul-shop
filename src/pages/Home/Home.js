import AiSoulGroupMobileImage from '../../assets/images/illustrations/group-mobile.png';
import AiSoulGroupImage from '../../assets/images/illustrations/group.png';
import SoulInMobileImage from '../../assets/images/illustrations/smartphone-character.png';
import CardGroup from '../../components/CardGroup/CardGroup';
import { brands, popularCharacters as characters } from '../../utils/constants';
import Image from '../../components/Image/Image';
import './Home.css';
import BrandBox from '../../components/BrandBox/BrandBox';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import InputGroup from '../../components/InputGroup/InputGroup';

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
            <CardGroup
                groupTitle='Popular Characters'
                cards={characters}
            />
            <BrandBox boxtitle="TRUSTED 10,000+ COMPANY" brands={brands} />
            <div className='try-section'>
                <p>
                    <span>Let's try to get your </span>
                    <span className='highlight'>AI souls easily </span>
                    <span>on our platform</span>
                </p>
                <div className='try-now-btn'>
                    <Button btnText="Try it Now" />
                </div>
                <img width="100%" alt="soul-in-mobile" title='AI Soul in mobile' src={SoulInMobileImage} />
            </div>
            <div className='subscription'>
                <p>
                    <span>Stay in the loop! <span className='highlight'>Subscribe for updates</span>, exclusive offers, articles, and news delivered to your inbox.</span>
                </p>
                <InputGroup>
                    <Input type='email' placeholder='Enter your email address' />
                    <Button
                        btnText="Subscribe right now"
                        largeFont={false}
                        style={{
                            backgroundColor: '#CDD4F0',
                            color: '#000',
                            border: '0px',
                        }}
                    />
                </InputGroup>
            </div>
        </section>
    )
}

export default Home