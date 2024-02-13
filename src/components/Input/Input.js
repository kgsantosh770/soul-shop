import './Input.css';

const Input = (props) => {
    return (
        <div className='custom-input'>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <input
                id={props.id}
                name={props.id}
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                className={props.invalid === true ? 'error' : ''}
            />
        </div>
    )
}

export default Input