import { mostViewCharacters as characters } from '../../features/utils/constants';
import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import TickIcon from '../../assets/images/icons/tick-green.png';
import CloseIcon from '../../assets/images/icons/close-red.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './PaymentComplete.css';

const PaymentComplete = () => {
    const { status } = useParams();
    const total = 1487.87;
    const isSuccess = status === 'success';
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const purchaseMonths = 2;

    return (
        <div className="payment-complete-page">
            <div>
                {
                    isSuccess
                        ? <img className='status-img' alt="tick" title={status} src={TickIcon} />
                        : <img className='status-img' alt="close" title={status} src={CloseIcon} />
                }
                <p className='highlight'>
                    {
                        isSuccess
                            ? 'Thanks a lot for ordering'
                            : 'Payment failed. Please try again'
                    }
                </p>
                <p>
                    {
                        isSuccess
                        && (
                            <>
                                Your Mailto order <span className='highlight'>ASK123456</span> has successfully been placed.
                                You’ll fin all the details about your order below,
                                and we’ll send you a shipping confrimation email as soon as your order ships.
                                <br />
                                <br />
                            </>
                        )
                    }
                    Questions? Suggestions? insightful showe thoughts?&nbsp;
                    <a href='#dummy' title='Email me' className='email'>Shoot me an email.</a>
                </p>
            </div>
            {
                isSuccess &&
                <div className={`order-review ${isReviewOpen ? '' : 'close'}`}>
                    <button onClick={() => setIsReviewOpen(prev => !prev)}>
                        <span>Order Review</span>
                        <img
                            className={isReviewOpen ? 'open' : ''}
                            alt='right-arrow'
                            title={isReviewOpen ? 'review opened' : 'review closed'}
                            src={ArrowRightIcon}
                        />
                    </button>
                    <ul>
                        {
                            characters.map(
                                (character, index) =>
                                    <li key={index}>
                                        <p className='name'>
                                            {character.name}
                                            <span className='period'>
                                                &nbsp;{` - ${purchaseMonths} ${character.period}${purchaseMonths > 1 ? 's' : ''}`}
                                            </span>
                                        </p>
                                        <p className='price'>₹ {character.price}</p>
                                    </li>
                            )
                        }
                        <li className='total'>
                            <p className='name'>Order total</p>
                            <p className='price'>₹ {total}</p>
                        </li>
                    </ul>
                </div>
            }

            {
                isSuccess
                    ? <Button btnText={'Go to home'} route={'/'} className='final-btn' />
                    : <Button btnText={'Pay Again'} className='final-btn' route={'/'} />
            }

        </div >
    )
}

export default PaymentComplete