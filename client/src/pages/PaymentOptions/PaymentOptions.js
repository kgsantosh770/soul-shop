import LockIcon from '../../assets/images/icons/lock.svg';
import { PAYMENT_OPTIONS as paymentOptions, TAX } from '../../features/utils/constants';
import { NavigationButtons } from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import './PaymentOptions.css';

const PaymentOptions = () => {
    const navigate = useNavigate();
    const subtotal = 18900.99;
    const OptionCard = ({ option, checked }) => (
        <div className="option-card box-border">
            <input
                type="radio"
                id={option.name}
                name="option"
                value={option.name}
                defaultChecked={checked}
            />
            <div>
                <label htmlFor={option.name}>{option.name}</label>
                <p className='desc'>{option.desc}</p>
            </div>
            <div className="images">
                {
                    option.acceptedMethods.map((acceptedMethod, index) => (
                        <img
                            key={index}
                            alt={acceptedMethod.name}
                            title={acceptedMethod.name}
                            src={acceptedMethod.image}
                        />
                    ))
                }
            </div>
        </div>
    )

    const handleNext = () => {
        navigate('/payment/success');
    }

    return (
        <div className="pay-options-page">
            <p className="title">Select payment option</p>
            <div>
                <div className="key-value box-border">
                    <div>
                        <p className='title'>Total</p>
                        <p className='subtitle'>Including ₹{TAX} in taxes</p>
                    </div>
                    <p className='value'>₹ {subtotal + 70}</p>
                </div>
                {
                    paymentOptions.map(
                        (option, index) =>
                            <OptionCard
                                key={index}
                                option={option}
                                checked={index === 0}
                            />
                    )
                }
            </div>
            <div className='security'>
                <img alt='secured' title='secured' src={LockIcon} />
                <span>We protect your payment information using encryption to provide bank-level security.</span>
            </div>
            <NavigationButtons backRoute={'/checkout'} handleNext={() => handleNext()} />
        </div>
    )
}

export default PaymentOptions