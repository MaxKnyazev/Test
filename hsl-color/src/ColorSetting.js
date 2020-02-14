import React from 'react';
import './ColorSetting.css';
import ColorRange from './ColorRange';
import {minus, plus} from './ColorSVG';
import ColorValue from './ColorValue';
import ColorButton from './ColorButton';
import styled from 'styled-components'

const SettingWrapper = styled.div`
  width: 75vmin;

  & h1 {
    text-align: center;
    font-size: 8vmax;
  }

  @media (min-width: 1100px) {
  
  & h1 {
    font-size: 7rem;
  }
}
`;

const SettingButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1vh;
  width: 100%;
`;

const ColorSetting = (props) => {
  const {partColor, value, subValue, addValue} = props;
  return ( 
    <SettingWrapper>
      <h1>{partColor.toUpperCase()}</h1>

      <SettingButtonsWrapper>
        <ColorButton sign = {minus} changeValue = {subValue} />
        <ColorValue value = {value}/>
        <ColorButton sign = {plus} changeValue = {addValue} />
      </SettingButtonsWrapper>

      <ColorRange {...props}/>

    </SettingWrapper>
   );
}
 
export default ColorSetting;