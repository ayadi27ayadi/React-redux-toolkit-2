import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../features/userredux'
import {Link} from "react-router-dom";

function LoginRedux() {
  const dispatch = useDispatch();
  return (
    <div>
      bnj Redux login
      <br/>
      <Link to="/profileredux">
      <button type='button' onClick={()=> dispatch(login(
        {
          name:"Ayadi", 
          email:"ayadi@gmail.com", 
          phone:"26268971", 
          password:"26268971"
        }
      ))}> Connecter </button>
      </Link>
    </div>
  )
}

export default LoginRedux
