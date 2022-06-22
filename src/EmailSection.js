import React, { useEffect,useState } from 'react';
import './EmailSection.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import RedoIcon from '@mui/icons-material/Redo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import MailIcon from '@mui/icons-material/Mail';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import {db} from './Firebase';



function EmailSection() {
  const [emails,setEmail]= useState([]);
  
  useEffect((emails)=>{
    db.collection('emails').orderBy('timestamp','desc').onSnapshot((snapshot)=>
      setEmail(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data(),
      }))
    )) 

  },[]);

  return (
    <div className='EmailSection'>
      <div className='EmailSection_settings'>
          <div className='emailsection_settingsleft'> 
           <CheckBoxIcon />
           <IconButton>
            <KeyboardArrowDownIcon />                 
           </IconButton>
           <IconButton>
            <RedoIcon />                 
           </IconButton>
           <IconButton>
             <MoreVertIcon />                 
           </IconButton>
         </div>

         <div className='emailsection_settingsright'>           
           <IconButton>
            <ChevronLeftIcon />                 
           </IconButton>
           <IconButton>
            <ChevronRightIcon />                 
           </IconButton>
           <IconButton>
           <KeyboardHideIcon />                 
           </IconButton>
           <IconButton>
             <SettingsIcon />                 
           </IconButton>         
         </div>
        </div>
         <div className='emailsectionlist'>  
         <Section Icon={MailIcon} title="Primary"  color="red" selected />
         <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
         <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
         </div>
         <div className='emailsection_list'>
         {emails.map(({id, data:{to,subject,message,timestamp}})=>(
          <EmailRow  
          is={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds*1000).toUTCString()}
            />

         ))}
           <EmailRow 
           title="sathwika"
           subject="hii hello"
           description="swalalala"
           time="8pm" />
           
         </div>
          
    </div>
  )
}

export default EmailSection