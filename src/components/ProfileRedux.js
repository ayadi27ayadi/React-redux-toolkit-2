import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../features/userredux'


function ProfileRedux() {
  const dispatch = useDispatch()
const state = useSelector((state)=> state.user.value)
  return (
    <div>
      bnj redux profile
      <br/>
      <p> Name: {state.name} </p>
      <p> Email: {state.email} </p>
      <p> Phone: {state.phone} </p>
      <p> Password: {state.password} </p>


      <button type='button' onClick={()=> dispatch(logout())}> Deconnecter </button>
    </div>
  )
}

export default ProfileRedux
