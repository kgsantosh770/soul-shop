import { useEffect } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import useForm from '../../utils/hooks/useForm';
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/api/login`;
  const { handleSubmit, result } = useForm();
  const navigate = useNavigate();

  const handleSuccess = () => {
    const response = result.response;
    const token = response.headers.get('auth');
    if (token) localStorage.setItem('auth', token);
    navigate(-1);
  }

  useEffect(() => {
    if (result.message)
      handleSuccess();
  }, [result])


  return (
    <div className="signin-form">
      <Form actionEndpoint={endpoint} handleSubmit={handleSubmit}>
        <Input label='Email' id='email' type='email' placeholder='santosh@gmail.com' required />
        <Input label='Password' id='password' type='password' placeholder='Enter your password' required />
        <Input type='submit' id='signinSubmit' value="Login" />
        <p className="linker">
          Do not have an account ? &nbsp;
          <Link to='/register'>Create Account</Link>
        </p>
      </Form>
    </div>
  )
}

export default Signin