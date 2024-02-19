import './Form.css';

const Form = ({ children, actionEndpoint, handleSubmit }) => {
    return (
        <div className='custom-form-container'>
            <form
                method='POST'
                action={actionEndpoint}
                onSubmit={handleSubmit}
                className="custom-form">
                {children}
            </form>
        </div>
    )
}

export default Form