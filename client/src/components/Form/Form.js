import './Form.css';

const Form = ({ children }) => {
    return (
        <div className='custom-form-container'>
            <form className="custom-form">
                {children}
            </form>
        </div>
    )
}

export default Form