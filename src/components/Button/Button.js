import './Button.css';

const Button = ({ btnText, handleClick, image, imageTitle, largeFont = true, style }) => {
    return (
        <button
            onClick={handleClick}
            className={`custom-btn btn ${largeFont ? 'large-font' : ''}`}
            style={style ? style : {}}
        >
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