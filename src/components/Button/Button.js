import './Button.css';

const Button = ({ btnText, handleClick, image, imageTitle, filled = false, largeFont = true }) => {
    return (
        <button onClick={handleClick} className={`custom-btn btn ${filled ? 'filled' : ''} ${largeFont ? 'large-font': ''}`}>
            {btnText && <span>{btnText}</span>}
            {image &&
                <img
                    alt={imageTitle ? imageTitle : 'btn-icon'}
                    title={imageTitle ? imageTitle : 'button'}
                    src={image}
                />
            }
        </button>
    )
}

export default Button