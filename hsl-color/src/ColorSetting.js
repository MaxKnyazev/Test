import React from 'react';
import './ColorSetting.css';
import {minus, plus} from './color_svg';
import ColorButton from './ColorButton';
import ColorValue from './ColorValue';
import ColorRange from './ColorRange';

const ColorSetting = (props) => {

  const {partColor, subValue, value, addValue} = props;

  return ( 
    <div className = 'Setting__wrapper'>
      <h1>{partColor.toUpperCase()}</h1>

      <div className = 'Setting__buttons__wrapper'>
        <ColorButton 
          changeValue={subValue} 
          sign={minus} 
        />

        <ColorValue value={value}/>
        
        <ColorButton 
          changeValue={addValue} 
          sign={plus} 
        />      
      </div>

      <ColorRange {...props}/>

    </div>
   );
}
 
export default ColorSetting;