import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import CartIcon from '../../assets/images/icons/cart.svg';
import StarIcon from '../../assets/images/icons/star.svg';
import StarFilledIcon from '../../assets/images/icons/star-filled.svg';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, price, rating, totalRating, backImage }) => {
    const Stars = ({ rating }) => {
        let elements = [];
        for (let i = 0; i < Number(totalRating); i++) {
            const ratedElement = i <= rating ? true : false;
            const altText = ratedElement ? 'star' : 'no-star';
            const imgSource = ratedElement ? StarFilledIcon : StarIcon;
            const element = <img alt={altText} src={imgSource} />
            elements.push(element);
        }
        return elements;
    }

    return (
        <Link to='/character'>
            <div className={`card ${name && price ? 'bordered no-hover-effect' : ''}`} data-id={id}>
                <div className='card-img-wrapper'>
                    <div className='front'>
                        <img className='card-img' alt={`${name ? name : 'person'}-card`} title={name ? name : 'person'} src={image} />
                    </div>
                    {
                        backImage &&
                        <div className='back'>
                            <img className='card-img' alt={`${name ? name : 'person'}-card`} title={name ? name : 'person'} src={backImage} />
                        </div>
                    }
                </div>
                {name && <p>{name}</p>}
                {price &&
                    <p>
                        <span className="highlight">Base Price</span>
                        <span className="price">{price}₹</span>
                    </p>
                }
                {
                    rating &&
                    <div className="rating-stars">
                        <Stars rating />
                    </div>
                }
                {
                    name && price &&
                    <div className='btns'>
                        <button>
                            <span>View Profile</span>
                            <span><img alt='arrow' title='View Profile' src={ArrowRightIcon} /></span>
                        </button>
                        <button className='filled'>
                            <span>Add to cart</span>
                            <span><img alt='cart' title='Cart' src={CartIcon} /></span>
                        </button>
                    </div>
                }
            </div>
        </Link>
    )
}

export default Card