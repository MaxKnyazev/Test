import React from 'react';
import './ColorRange.css';

const ColorRange = ({value, MIN, MAX, STEP, changeRange}) => {
  return (
    <input 
      className='ColorRange'
      type='range' 
      min={MIN} 
      max={MAX} 
      step={STEP}
      value={value}
      onChange={changeRange}
    />
  )
}

export default ColorRange;