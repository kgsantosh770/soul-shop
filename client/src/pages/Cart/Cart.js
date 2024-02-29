import './Cart.css';
import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import { useDispatch, useSelector } from 'react-redux';
import { decrementProduct, incrementProduct } from '../../redux/cartSlice';

const NavigationButtons = ({ backRoute, nextRoute, mobile, desktop, disableBackButton }) => (
  <div className={`cart-nav-btns ${mobile ? 'only-mobile' : ''} ${desktop ? 'only-desktop' : ''}`}>
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

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart);
  const characters = cartData.products;

  function calculateSubtotal() {
    let result = 0;
    characters.forEach(character => {
      result += Number(character.price ?? 200) * Number(character.quantity ?? 1);
    })
    return result;
  }

  const CartCard = ({ character }) => (
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
              <Button
                className='cart-btn'
                btnText='-'
                style={{display: 'inline', padding: '0px'}}
                handleClick={() => dispatch(decrementProduct(character.id))}
              />
              <span className='value'>{character.quantity ?? 1}</span>
              <Button
                className='cart-btn'
                btnText='+'
                style={{display: 'inline', padding: '0px'}}
                handleClick={() => dispatch(incrementProduct(character.id))}
              />
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
    <div className='cart-page'>
      <div className='inner-content'>
        {
          characters.length <= 0
            ? (
              <div className='empty-cart'>
                <h2>Empty Cart. </h2>
                <Button btnText={`👉 Start finding your soulmates !`} route={`/characters`} />
              </div>
            )
            : (
              <>
                <div className='cards-wrapper'>
                  {
                    characters.map((character, index) => <CartCard key={index} character={character} />)
                  }
                </div>
                <div className='price-wrapper'>
                  <div className='key-value'>
                    <p className='title'>Subtotal</p>
                    <p className='value'>₹ {cartData.cartTotal}</p>
                  </div>
                  <div className='key-value'>
                    <div>
                      <p className='title'>Total</p>
                      <p className='subtitle'>+ ₹{cartData.cartTax} in taxes</p>
                    </div>
                    <p className='value large-font'>₹ {cartData.cartTotal + cartData.cartTax}</p>
                  </div>
                  <NavigationButtons desktop disableBackButton nextRoute={'/payment-options'} />
                </div>
              </>
            )
        }
      </div>
      <NavigationButtons mobile disableBackButton nextRoute={'/payment-options'} />
    </div>
  )
}

export default Cart;
export { NavigationButtons }