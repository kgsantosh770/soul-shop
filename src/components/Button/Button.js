import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ btnText, handleClick, image, imageTitle, style, route }) => {
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
    return route ?
        (
            <Link className="custom-btn btn" to={route}>{buttonContent}</Link>
        ) :

        (
            <button
                onClick={handleClick}
                className="custom-btn btn"
                style={style ? style : {}}
            >
                {buttonContent}
            </button>
        )
}

export default Button