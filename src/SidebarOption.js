import './SidebarOption.css';
import React from 'react'

function SidebarOption({Icon,title,number}) {
  return (
    <div className='SidebarOption'>
      <Icon />
        <h1>{title} </h1>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption