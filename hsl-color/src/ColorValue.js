import React from 'react';
import './ColorValue.css';

const ColorValue = ({value}) => {
  return (
    <span className='ColorValue' >
      {value}
    </span>
  )
}

export default ColorValue;
