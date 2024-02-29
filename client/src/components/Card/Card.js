import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import CartIcon from '../../assets/images/icons/cart.svg';
import StarIcon from '../../assets/images/icons/star.svg';
import StarFilledIcon from '../../assets/images/icons/star-filled.svg';
import Button from '../Button/Button';
import './Card.css';
import { Link } from 'react-router-dom';
import { TOTAL_RATING } from '../../features/utils/constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Card = ({ id, showOptions, character }) => {
    const dispatch = useDispatch();
    const Stars = ({ rating }) => {
        let elements = [];
        for (let i = 0; i < Number(TOTAL_RATING); i++) {
            const ratedElement = i <= rating ? true : false;
            const altText = ratedElement ? 'star' : 'no-star';
            const imgSource = ratedElement ? StarFilledIcon : StarIcon;
            const element = <img key={i} alt={altText} src={imgSource} width={16} height={16} />
            elements.push(element);
        }
        return elements;
    }

    const cardElement = (
        <div className={`card ${showOptions ? 'show-options' : 'flip'}`} data-id={id}>
            <div className='card-img-wrapper'>
                <div className='front'>
                    <img className='card-img' alt={`${character.name ? character.name : 'person'}-card`} title={character.name ? character.name : 'person'} src={showOptions ? character.imageWithName : character.image} />
                </div>
                {
                    showOptions === undefined && character.imageWithName &&
                    <div className='back'>
                        <img className='card-img' alt={`${character.name ? character.name : 'person'}-card`} title={character.name ? character.name : 'person'} src={character.imageWithName} />
                    </div>
                }
            </div>
            {showOptions && character.price &&
                <p className='price-section'>
                    <span className="highlight">Base Price</span>
                    <span className="price">₹ {character.price}</span>
                </p>
            }
            {
                showOptions && character.rating &&
                <div className="rating-stars">
                    <Stars rating={character.rating} />
                </div>
            }
            {
                showOptions && character.price &&
                <div className='btns'>
                    <Button
                        btnText='View Profile'
                        image={ArrowRightIcon}
                        imageTitle='View Profile'
                        route={`/characters/${character.id}`}
                    />
                    <Button
                        btnText='Add to cart'
                        image={CartIcon}
                        imageTitle='Cart'
                        handleClick={()=>dispatch(addToCart(character))}
                    />
                </div>
            }
        </div>
    )

    return showOptions ? cardElement : <Link to={`/characters/${character.id}`}>{cardElement}</Link>;
}

export default Card