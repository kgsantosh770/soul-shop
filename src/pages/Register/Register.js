import { useReducer } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import InputGroup from "../../components/InputGroup/InputGroup";
import './Register.css';

const Register = () => {
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
    return (
        <div className="register-form">
            <Form>
                <InputGroup>
                    <Input
                        label='Name'
                        id='Name'
                        type='text'
                        placeholder='Santosh'
                    />
                    <Input
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='santosh@gmail.com'
                    />
                </InputGroup>
                <Input
                    label='Create Password'
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                    onChange={(e) => handlePasswordChange(e)}
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
                    onChange={(e) => handlePasswordChange(e)}
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