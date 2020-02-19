import React from 'react';
import {connect} from 'react-redux';

const Colorizer = (props) => {

    const {RValue, GValue, BValue, addR, addG, addB} = props;
    const styleWrapper = {
          backgroundColor : `rgb(${RValue}, ${GValue}, ${BValue})`,
          width: '75vmin',
          height: '25vmin',
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

//ACTIONS         
const addR = {type: 'ADD_R'};
const addG = {type: 'ADD_G'};
const addB = {type: 'ADD_B'};

//сопоставление состояния Redux со свойствами компонента
function mapStateToProps(state) {
  return {
    RValue: state.R,
    GValue: state.G,
    BValue: state.B,
  };
}

//сопоставление действий Redux со свойствами компонента
function mapDispatchToProps(dispatch) {
  return {
    addR: function() {
      return dispatch(addR);
    },
    addG: function() {
      return dispatch(addG);
    },
    addB: function() {
      return dispatch(addB);
    }
  };
}

// HOC----------
export default connect(mapStateToProps, mapDispatchToProps)(Colorizer);
