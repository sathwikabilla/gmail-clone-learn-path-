
import React,{useEffect} from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailSection from './EmailSection';
import Mail from './Mail';
import SendMail from './SendMail';
import {useSelector} from 'react-redux';
import {selectsendMessageIsOpen} from './features/mailSlice';
import {selectUser} from './features/userSlice'
import Login from './Login';
import {auth} from "./Firebase";
import {useDispatch} from 'react-redux';
import {login } from './features/userSlice';

function App() {
  const sendMessageIsOpen= useSelector(selectsendMessageIsOpen);
  console.log(selectsendMessageIsOpen);
  const user=useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoUrl,
      }))
      }
    })
  },[]);

  return (
  <BrowserRouter>
  {!user? (<Login />):(
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar /> 
        <Routes>
          <Route path='/mail' element={<Mail />} />         
          <Route path='/'element={<EmailSection />} />   
        </Routes>
      </div>  
      { sendMessageIsOpen && <SendMail />};
     
   
    </div>)}
  </BrowserRouter>
  );
}

export default App;
