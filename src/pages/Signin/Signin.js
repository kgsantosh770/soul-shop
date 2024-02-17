import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

const Signin = () => {
  return (
    <div className="signin-form">
        <Form>
            <Input label='Email' id='email' type='email' placeholder='santosh@gmail.com' />
            <Input label='Password' id='password' type='password' placeholder='Enter your password'/>
            <Input type='submit' id='signinSubmit' value="Signin" />
        </Form>
    </div>
  )
}

export default Signin