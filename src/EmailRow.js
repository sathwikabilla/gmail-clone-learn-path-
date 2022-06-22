import React from 'react';
import'./EmailRow.css';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id, title, subject, description, time}) {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const openMail=()=>{
    dispatch(
      selectMail({
      id,
      title,
      subject,
      description,
      time,
    })
    );
    navigate("/mail");
  } ;

    return (
    <div onClick={openMail} className='emailrow'>
     <div className='emailrow_options'>
       <CheckBoxOutlineBlankIcon />
       <IconButton>
         <StarBorderIcon />                 
       </IconButton>
       <IconButton>
         <LabelImportantIcon />                 
       </IconButton>
     </div>
     <h3 className='emailrow_title'>
     {title}
     </h3>
     <div className='emailrow_message'>
         <h4>{subject}</h4>
         <span className='emailrow_description'>
             {description}
         </span>
     </div>
     <p className='emailrow_time'>
       {time}
     </p>
    </div>
  )
}

export default EmailRow;
