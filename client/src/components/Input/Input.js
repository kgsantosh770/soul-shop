import './Input.css';

const Input = ({
    label,
    id,
    type,
    invalid,
    rounded,
    filled,
    halfWidth,
    ...otherInputAttributes
}) => {
    return (
        <div className={`custom-input${filled === true ? ' filled' : ''}${halfWidth ? ' w-half' : ''}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={id}
                type={type ?? 'text'}
                className={`${invalid === true ? 'error' : ''}${rounded ? ' rounded' : ''}`}
                {...otherInputAttributes}
            />
        </div>
    )
}

export default Input