import React, {Component} from 'react';

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

export default Counter;
