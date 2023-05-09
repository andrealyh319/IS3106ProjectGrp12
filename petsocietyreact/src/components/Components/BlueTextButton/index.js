import React from 'react';


const BlueTextButton = (props) => {

    return (
      <> 
      <span onClick={props.onClick} 
      style={{cursor: 'pointer', 
      textDecoration: 'underline',
      fontFamily: 'Poppins, san-serif',
      color: '#3366BB'}}>
        {props.children}
      </span>
      </>
    );
  }
  
  export default BlueTextButton;