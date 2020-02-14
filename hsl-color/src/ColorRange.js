import React from 'react';
import './ColorRange.css';

const ColorRange = (props) => {
  const {value, MIN, MAX, STEP, changeRange} = props;

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