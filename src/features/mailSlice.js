import {  createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectedmail:null,
    sendMessageIsOpen: false,
  },
 
  reducers: {
    selectMail:(state,action)=>{
      state.selectedmail=action.payload;
    },
    openSendMessages: (state) => {    
      state.sendMessageIsOpen = true;
    },
    closeSendMessages: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {selectMail, openSendMessages, closeSendMessages} = mailSlice.actions;

export const selectsendMessageIsOpen=(state)=>state.mail.sendMessageIsOpen;
;
export const selectOpenMail=(state)=>state.mail.selectedmail;
export default mailSlice.reducer;
