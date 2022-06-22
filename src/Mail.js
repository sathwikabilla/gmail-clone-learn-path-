import React from 'react';
import './Mail.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ErrorIcon from '@mui/icons-material/Error';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const selectedMail=useSelector(selectOpenMail);
  const navigate = useNavigate();
  return (
    <div className='mail'>
     <div className='mail_tools'>
       <div className='mail_toolsleft'>
          <IconButton onClick={()=>navigate("/")}>
            <ArrowBackIosIcon />                 
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />                 
          </IconButton>

         <IconButton>
           <ErrorIcon />                 
         </IconButton>

         <IconButton>
           <DeleteIcon />                 
         </IconButton>

        <IconButton>
              <CheckCircleIcon />                 
        </IconButton>

        <IconButton>
           <EmailIcon />                 
        </IconButton>
        
        <IconButton>
           <WatchLaterIcon />                 
        </IconButton>
        
        <IconButton>
           <LabelImportantIcon />                 
        </IconButton>
        
        <IconButton>
           <MoreVertIcon />                 
        </IconButton>

       </div>
       <div className='mail_toolsright'>                 
        <IconButton>
           <UnfoldMoreIcon />                 
        </IconButton>
        <IconButton>
           <PrintIcon />                 
        </IconButton>
        <IconButton>
          <ExitToAppIcon />                 
        </IconButton>
       </div>
       </div> 
       <div className='mail_body'>
           <div className='mailbody_header'>
              <h2>{selectedMail?.subject}</h2>
              <LabelImportantIcon className='mail_important'/>
              <p>{selectedMail?.title}</p>
              <p className='mail_time'>{selectedMail?.time}</p>
           </div>
           <div className='mail_message'>
           <p>{selectedMail?.description}</p>
           </div>
       
     </div>

    </div>
  )
}

export default Mail