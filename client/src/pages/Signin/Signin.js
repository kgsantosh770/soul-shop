import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const Signin = () => {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/api/login`;
  return (
    <div className="signin-form">
        <Form actionEndpoint={endpoint}>
            <Input label='Email' id='email' type='email' placeholder='santosh@gmail.com' required/>
            <Input label='Password' id='password' type='password' placeholder='Enter your password' required/>
            <Input type='submit' id='signinSubmit' value="Signin" />
            <p className="linker">
                    Do not have an account ? &nbsp;
                    <Link to='/register'>Create Account</Link>
                </p>
        </Form>
    </div>
  )
}

export default Signin