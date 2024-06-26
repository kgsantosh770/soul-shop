import { useEffect } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import useForm from '../../features/hooks/useForm';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const Signin = () => {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/login`;
  const { handleSubmit, result } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleSuccess = () => {
      const {response, responseData} = result;
      const token = response.headers.get('Authorization');
      if (token) {
        localStorage.setItem('Authorization', token);
        const user = responseData.data;
        if(user) dispatch(addUser(user));
      }
      navigate('/');
    }

    if (result)
      handleSuccess();
  }, [result, navigate, dispatch])


  return (
    <div className="signin-form">
      <Form action={endpoint} onSubmit={handleSubmit}>
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