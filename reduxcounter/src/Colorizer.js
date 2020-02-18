import React from 'react';

const Colorizer = (props) => {

    const {RValue, GValue, BValue, addR, addG, addB} = props;
    const styleWrapper = {
          backgroundColor : `rgb(${RValue}, ${GValue}, ${BValue})`,
          width: '75vmin',
          height: '50vmin',
        };
    const styleButton = {margin: '30px', padding: '30px', fontSize: '3vmin'}

    return (
      <div style={styleWrapper}>
        <button 
          style={styleButton}
          onClick={addR}
        >{RValue}</button>
        <button 
          style={styleButton}
          onClick={addG}
        >{GValue}</button>
        <button 
          style={styleButton}
          onClick={addB}
        >{BValue}</button>
      </div>
    );
}

export default Colorizer;