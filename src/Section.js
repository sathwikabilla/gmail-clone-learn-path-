import './Section.css';
import React from 'react';

function Section({Icon, title, color, selected}) {
  return (
    <div  className={`section ${selected && "Section--selected"}`}
       style={{
        borderBottom:`3px solid ${color}`,
        color:`${selected && color}`,
       }}>
       <Icon/>
       <h2>{title}</h2>
    </div>
  );
}

export default Section