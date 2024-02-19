import './Form.css';

const Form = ({ children, ...formAttributes }) => {
    return (
        <div className='custom-form-container'>
            <form
                method='POST'
                {...formAttributes}
                className="custom-form">
                {children}
            </form>
        </div>
    )
}

export default Form