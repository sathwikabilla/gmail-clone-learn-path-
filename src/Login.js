import React from 'react';
import './Login.css';
import {auth, provider} from './Firebase';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {login } from './features/userSlice';
function Login() {
    const dispatch= useDispatch();
    const signin=()=>{
        auth
        .signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoUrl,
            }))
        }).catch((error)=>alert(error.message));

    };
  return (
    <div className='login'>
     <div className='login_container'>
       <img src="./logo192.png " alt=''/>
       <Button variant="contained" onClick={signin}>sign in Gmail</Button>
     </div>
    </div>
  )
}

export default Login
