import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(function Input({
    label,
    id,
    type,
    invalid,
    rounded,
    filled,
    halfWidth,
    ...otherInputAttributes
},ref) {
    return (
        <div className={`custom-input${filled === true ? ' filled' : ''}${halfWidth ? ' w-half' : ''}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={id}
                type={type ?? 'text'}
                ref={ref}
                className={`${invalid === true ? 'error' : ''}${rounded ? ' rounded' : ''}`}
                {...otherInputAttributes}
            />
        </div>
    )
});

export default Input