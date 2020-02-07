import React from 'react';
import './ColorRange.css';

const ColorRange = (props) => {
  console.log(props);

  const {value, MIN, MAX, STEP} = props;

  return (
    <input 
      className='ColorRange'
      type='range' 
      min={MIN} 
      max={MAX} 
      step={STEP}
      defaultValue={value}
      onChange={props.changeRange}
    />
  )
}

export default ColorRange;