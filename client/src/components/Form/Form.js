import './Form.css';
import useForm from '../../utils/hooks/useForm';

const Form = ({ children, actionEndpoint, additionalData }) => {
    const { handleSubmit } = useForm({additionalData});
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

Form.defaultProps = {
    additionalData: {}
}


export default Form