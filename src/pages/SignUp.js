import {useContext ,useState} from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from "../utility/hooks";
import { useMutation } from '@apollo/react-hooks';
import { gql } from "graphql-tag"
import { useNavigate } from 'react-router-dom';






const REGISTER_USER = gql`
   mutation Mutation(
  $registerInput: RegisterInputAuth)
{
  registerUserAuth(registerInput: $registerInput)
  {
    firstName
    lastName
    phone
    email 
    password
    passwordConfirm
    role
    token
  }
}

`

function SingUp(props) {
 const context = useContext(AuthContext);
 let navigate = useNavigate();
 const [errors, setErrors] = useState({})


 function registerUserAuthCallback() {
  console.log('callback hit', registerUserAuth());
  registerUserAuth();
  
} 


 const {onChange, onSubmit, values } = useForm(registerUserAuthCallback,{
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phone:0, 
 });

  const [registerUserAuth, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, {data: {registerUserAuth: userData}}){
      context.login(userData);
      navigate('/');

    },
    onError({graphQLErrors}){
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values }
  })

  


  return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Register</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstName"
                        placeholder="Full Name"
                        onChange={onChange}
                        />
                        <label> Last name</label>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={onChange} />

                        <label> Email </label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={onChange} />
                               
                      <label> Password</label>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={onChange} />
                          
                      <label> Confirm password</label>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="passwordConfirm"
                        placeholder="Confirm Password" 
                        onChange={onChange}/>

                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="w-full text-center py-3 rounded bg-cyan-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Register</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>
                </div>
                
            </div>
        </div>
  )
}

export default SingUp;
