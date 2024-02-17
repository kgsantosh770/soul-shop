import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ btnText, handleClick, image, imageTitle, style, route, className, disabled, filled }) => {
    const buttonContent = (
        <div className='btn-content'>
            {btnText && <span>{btnText}</span>}
            {image &&
                <img
                    alt={imageTitle ? imageTitle : 'btn-icon'}
                    title={imageTitle ? imageTitle : 'button'}
                    src={image}
                />
            }
        </div>
    )
    const btnClassName = `custom-btn btn${disabled === true ? ' disabled' : ''}${filled ? ' filled' : ''} ${className ? className : ''}`;

    return route ?
        (
            <Link className={btnClassName} to={route} title={btnText}>{buttonContent}</Link>
        ) :

        (
            <button
                onClick={handleClick}
                className={btnClassName}
                style={style ? style : {}}
            >
                {buttonContent}
            </button>
        )
}

export default Button