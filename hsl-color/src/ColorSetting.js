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
        >

        

        <svg 
          aria-hidden="true" 
          data-prefix="fas" 
          data-icon="minus" 
          class="svg-inline--fa fa-minus fa-w-14" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512">
        <path 
          fill="currentColor" 
          d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>


        </button>
        
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