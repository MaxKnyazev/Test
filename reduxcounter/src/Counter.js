import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    const {decreaseCount, countValue, increaseCount} = this.props;
    return (
      <div className='container'>
        <button className='buttons'
            onClick={decreaseCount}>-</button>
        <span>{countValue}</span>
        <button className='buttons'
            onClick={increaseCount}>+</button>
      </div>
    );
  }
}

//ACTIONS         
const increaseAction = {type: 'increase'};
const decreaseAction = {type: 'decrease'};

//сопоставление состояния Redux со свойствами компонента
function mapStateToProps(state) {
  return {
    countValue: state.count,
  };
}

//сопоставление действий Redux со свойствами компонента
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}

// HOC
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
