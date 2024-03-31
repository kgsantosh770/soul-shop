import { useEffect, useReducer, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../../features/utils/validators";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import InputGroup from "../../components/InputGroup/InputGroup";
import './Register.css';
import useForm from "../../features/hooks/useForm";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Register = () => {
    const user = useSelector(state => state.user);
    const emailRef = useRef(null);
    const initialPasswordChecklist = [
        {
            id: 1,
            name: 'Password must be atleast 8 characters.',
            status: false,
        },
        {
            id: 2,
            name: 'Password must have atleast 1 uppercase character.',
            status: false,
        },
        {
            id: 3,
            name: 'Password must have atleast 1 special character.',
            status: false,
        },
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case 'CHECK':
                return state.map(
                    check => check.id === action.id ? { ...check, status: true } : check
                );
            case 'UNCHECK':
                return state.map(
                    check => check.id === action.id ? { ...check, status: false } : check
                );
            default:
                return state;
        }
    }
    const [passwordChecks, dispatch] = useReducer(reducer, initialPasswordChecklist);

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        if (password.length > 8) {
            dispatch({ type: "CHECK", id: 1 })
        }
        else
            dispatch({ type: "UNCHECK", id: 1 })
        if (/[A-Z]/.test(password))
            dispatch({ type: "CHECK", id: 2 })
        else
            dispatch({ type: "UNCHECK", id: 2 })
        if (/[^\w\s]/.test(password))
            dispatch({ type: "CHECK", id: 3 })
        else
            dispatch({ type: "UNCHECK", id: 3 })
    }

    const validateForm = () => {
        if (!isValidEmail(emailRef.current.value)) return "Invalid Email";
        const passwordCheckFailed = passwordChecks.find(check => check.status === false);
        if (passwordCheckFailed) return "Password does not match the below criterias.";
        return true;
    }

    const endpoint = process.env.REACT_APP_API_BASE_URL + '/register';
    const navigate = useNavigate();
    const { handleSubmit, result } = useForm(validateForm);

    useEffect(() => {
        if (user) navigate('/', { replace: true })
    }, [navigate, user])


    useEffect(() => {
        const handleSuccess = () => {
            navigate('/signin', { replace: true });
        }

        if (result)
            handleSuccess();
    }, [result])

    return (
        <div className="register-form">
            <Form action={endpoint} onSubmit={handleSubmit}>
                <InputGroup>
                    <Input
                        label='Name'
                        id='name'
                        type='text'
                        placeholder='Santosh'
                        required
                    />
                    <Input
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='santosh@gmail.com'
                        ref={emailRef}
                        required
                    />
                </InputGroup>
                <Input
                    label='Create Password'
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                    onChange={(e) => handlePasswordChange(e)}
                    required
                />
                <ul className="password-checklist">
                    {
                        passwordChecks.map(check =>
                            <li key={check.id} className={check.status ? 'checked' : ''}>● {check.name}</li>
                        )
                    }
                </ul>
                <Input
                    type='submit'
                    id='registerSubmit'
                    value="Create Account"
                />
                <p className="linker">
                    Already have an account ? &nbsp;
                    <Link to='/signin'>Sign in</Link>
                </p>
            </Form>
        </div>
    )
}

export default Register