import React from 'react';
import './Header.css';
import Menu from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';


function Header() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  const signout=()=>{
    auth.signOut().then(()=>{
      dispatch(logout());
    })

  };
console.log({user});

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <Menu />                 
        </IconButton>
        <img src="https://www.starmark.com/wp-content/uploads/gmail-logo-2.png" alt=''/>       
      </div>

      <div className='header__center'>
        <SearchIcon />
        <input placeholder='type the searching text' />
        <ArrowDropDownIcon />     
      </div>

      <div className='header__right'>
       <IconButton>
          <AppsIcon />
       </IconButton>
        
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        
        <Avatar onClick={signout} src={user?.photoUrl} />      
      </div>   
    </div>    
  )
}
export default Header;