import React from 'react';
import './ColorButton.css';

const ColorButton = ({changeValue, sign}) => {
  return (
    <button
      className = 'Setting__button' 
      onClick = {changeValue}
    >
    {sign}
    </button>
  )
}

export default ColorButton;