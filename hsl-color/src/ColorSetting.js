import React from 'react';
import './ColorSetting.css';
import ColorRange from './ColorRange';

const ColorSetting = (props) => {
  // console.log(props);

  return ( 
    <div className = 'Setting__wrapper'>
      <h1>{props.partColor.toUpperCase()}</h1>

      <div className = 'Setting__buttons__wrapper'>
        <button 
          className = 'Setting__button' 
          onClick = {props.subValue}
        >-</button>
        <span 
          className = 'Setting__value'
        >{props.value}
        </span>
        <button 
          className = 'Setting__button' 
          onClick = {props.addValue}
        >+</button>
      </div>

      <ColorRange {...props}/>

    </div>
   );
}
 
export default ColorSetting;