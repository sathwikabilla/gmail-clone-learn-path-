import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import{closeSendMessages} from './features/mailSlice';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const onSubmit=(data)=>{
        console.log(data);
        db.collection('emails').add({
          to:data.to,
          subject:data.subject,
          message:data.message,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessages());
    };
    const dispatch=useDispatch();    const { register, handleSubmit, watch,  formState: { errors } } = useForm();
  return (
    <div className='SendMail'>
       <div className='SendMail_header'>
          <h3>New message</h3>
          <CloseIcon  onClick={()=>dispatch(closeSendMessages())} className='SendMail_close'/>
       </div>
       <form onSubmit={handleSubmit(onSubmit)} >

          <input placeholder='To' type='email' {...register('to', {required: true})}/>
          {errors.to && <p className='sendmail_error'>to is required!</p>}

          <input placeholder='subject' type='text' {...register('subject', {required: true})}/>
          {errors.subject && <p className='sendmail_error'>subject is required!</p>}


          <input className='sendmail_message' placeholder='type message here..' type='text' {...register('message', {required: true})}/>
          {errors.message && <p className='sendmail_error'>message is required!</p>}
             <div className='sendMail_options'>
                 <Button className='sendMail_send' type="submit">Send</Button>
                 <div className='sendMail_emoji'> 
                 <IconButton>
                   <DeleteIcon  className='delete'/>
                 </IconButton>
                 </div>
             </div>
       </form>

    
    </div>
  )
}

export default SendMail;