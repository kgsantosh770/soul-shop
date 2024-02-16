import './Input.css';

const Input = ({
    label,
    id,
    type,
    placeholder,
    invalid,
}) => {
    return (
        <div className='custom-input'>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={id}
                type={type ?? 'text'}
                placeholder={placeholder ?? ''}
                className={invalid === true ? 'error' : ''}
            />
        </div>
    )
}

export default Input