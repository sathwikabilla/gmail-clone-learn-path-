import React from 'react';
import './Sidebar.css';
import {Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteIcon from '@mui/icons-material/Note';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import {useDispatch} from 'react-redux';
import {openSendMessages} from './features/mailSlice';

function Sidebar() {

  const dispatch= useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<EditIcon/>} className='sidebar_compose'
      type='submit'
      onClick={()=> {
        dispatch(openSendMessages());
      }} 
      >
        Compose
      </Button>
      <SidebarOption Icon={MailIcon} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={SendIcon} title="Sent" number={54} />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number={54} />
      <SidebarOption Icon={NoteIcon} title="Notes" number={54} />   
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />   
      <div className='sidebar_footer'>
        <div className='sidebar_footer'>
         <IconButton>
            <PersonIcon />                 
          </IconButton>
         <IconButton>
            <DuoIcon />                 
          </IconButton>
          <IconButton>
            <PhoneIcon />                 
          </IconButton>
        </div>  
       </div>
    </div>
    
  )
}

export default Sidebar