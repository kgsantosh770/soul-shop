import { useState } from 'react';
import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import { TAX, mostViewCharacters } from '../../utils/constants';
import './Checkout.css';

const NavigationButtons = ({ backRoute, nextRoute, mobile, desktop, disableBackButton }) => (
  <div className={`checkout-nav-btns ${mobile ? 'only-mobile' : ''} ${desktop ? 'only-desktop' : ''}`}>
    <Button
      className='back-btn'
      btnText='Back'
      image={ArrowRightIcon}
      imageTitle={'back'}
      disabled={disableBackButton ? true : false}
      route={backRoute}
    />
    <Button
      className='next-btn'
      btnText='Next'
      image={ArrowRightIcon}
      imageTitle={'next'}
      route={nextRoute}
    />
  </div>
)

const Checkout = () => {
  const [characters] = useState(mostViewCharacters);
  const [subtotal] = useState(calculateSubtotal());

  function calculateSubtotal() {
    let result = 0;
    characters.forEach(character => {
      result += Number(character.price ?? 200) * Number(character.quantity ?? 1);
    })
    return result;
  }

  const CheckoutCard = ({ character }) => (
    <div className='card'>
      <div className='name-img-section'>
        {
          character.image && character.name &&
          <Image className='card-img' image={character.image} alt={character.name} title={character.name} />
        }
        {
          <div>
            {character.name && <p className='char-name'>{character.name}</p>}
            {character.price &&
              <p className='char-price'>
                <span>₹</span>
                {character.price}
                {character.period && <span className='char-period'>/{character.period}</span>}
              </p>
            }

            <div className='quantity'>
              <p>No. of months :</p>
              <button>-</button>
              <span className='value'>{character.quantity ?? 1}</span>
              <button>+</button>
            </div>
          </div>
        }
      </div>
      {
        character.desc &&
        <p className='desc'>
          {character.desc}
        </p>
      }
    </div>
  )

  return (
    <div className='checkout-page'>
      <div className='inner-content'>
        <div className='cards-wrapper'>
          {
            characters.map((character, index) => <CheckoutCard key={index} character={character} />)
          }
        </div>
        <div className='price-wrapper'>
          <div className='key-value'>
            <p className='title'>Subtotal</p>
            <p className='value'>₹ {subtotal}</p>
          </div>
          <div className='key-value'>
            <div>
              <p className='title'>Total</p>
              <p className='subtitle'>Including ₹{TAX} in taxes</p>
            </div>
            <p className='value large-font'>₹ {subtotal + 70}</p>
          </div>
          <NavigationButtons desktop disableBackButton nextRoute={'/payment-options'}/>
        </div>
      </div>
      <NavigationButtons mobile disableBackButton nextRoute={'/payment-options'}/>
    </div>
  )
}

export default Checkout;
export { NavigationButtons }