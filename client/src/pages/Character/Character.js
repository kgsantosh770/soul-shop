import CartIcon from '../../assets/images/icons/cart.svg';
import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { characters } from '../../features/utils/constants';
import './Character.css';

const Character = () => {
    let { id } = useParams();
    const [character] = useState(characters.find((char) => char.id.toString() === id));

    return (
        <div className="character-page">
            <div>
                {character.name && <h1 className="name">{character.name}</h1>}
                {character.desc && <p className="desc">{character.desc}</p>}
                {
                    character.features &&
                    <div className="features">
                        <h3>Characteristics</h3>
                        <ul>
                            {
                                character.features.map(
                                    (feature, index) =>
                                        <li key={index}>{feature}</li>
                                )
                            }
                        </ul>
                    </div>
                }
                {
                    character.price &&
                    <div className="price-section">
                        <h3>Total Cost</h3>
                        <p className='price'>
                            <span className="currency">₹</span>
                            <span className="value">{character.price}</span>
                            {character.period && <span className="period">/{character.period}</span>}
                        </p>
                    </div>
                }
                <div className='btns'>
                    <Button className='continue-btn' btnText='Buy Now' image={ArrowRightIcon} imageTitle='right-arrow' route={'/payment-options'}/>
                    <Button className='cart-btn' btnText='Add to Cart' image={CartIcon} imageTitle='cart' />
                </div>
            </div>
            {
                character.imageWithBg &&
                <Image className='char-img' image={character.imageWithBg} alt={character.name} title={character.name} />
            }
        </div>
    )
}

export default Character