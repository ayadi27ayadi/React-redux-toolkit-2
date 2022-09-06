import React from 'react';
import {useContext ,useState} from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from "../utility/hooks";
import { useMutation } from '@apollo/react-hooks';
import { gql } from "graphql-tag"
import { useNavigate } from 'react-router-dom';



const LOGIN_USER = gql`
   mutation login(
  $loginInput:LoginInputAuth)
{
  loginUserAuth(loginInput: $loginInput)
  {
    firstName
    email 
    token
  }
}

`




function SingIn() {
  const context = useContext(AuthContext);
 let navigate = useNavigate();
 const [errors, setErrors] = useState({})


 function loginUserAuthCallback() {
  console.log('callback hit', loginUserAuth());
  loginUserAuth();
  
} 


 const {onChange, onSubmit, values } = useForm(loginUserAuthCallback,{
  email: "",
  password: "",
 });

  const [loginUserAuth, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, {data: {loginUserAuth: userData}}){
      context.login(userData);
      navigate('/');

    },
    onError({graphQLErrors}){
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values }
  })

  


  return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                       

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

                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="w-full text-center py-3 rounded bg-cyan-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>

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


export default SingIn
