import React from 'react';
import './ChooseNumber.css';
import {connect} from 'react-redux';

let inputValue = '0';
  
const onInputChange = (e) => {
    inputValue = e.target.value;

    console.log(inputValue);
  }

const ChooseNumber = ({onChooseClickR, fewR, manyR, numR}) => {
  const fewClasses = fewR ? 'BSCalc__info' : 'BSCalc__info none';
  const manyClasses = manyR ? 'BSCalc__info' : 'BSCalc__info none';




// onChooseClick = () => {
  //   this.setState((prevState) => {
  //     return {
  //       count : prevState.count + 1,
  //       few : false,
  //       many : false,
  //       correct : false,
  //     }
  //   })

  //   if (this.num === +this.inputValue) {
  //     this.setState({
  //       correct : true,
  //     });

  //     if (this.bestResult > this.state.count) {
  //       localStorage.setItem('game', this.state.count + 1)
  //     }
  //   }

  //   if (this.num < +this.inputValue) {
  //     this.setState({
  //       many : true,
  //     });
  //   }

  //   if (this.num > +this.inputValue) {
  //     this.setState({
  //       few : true,
  //     });
  //   }
  // }


  return (
    <section className='BSCalc'>
      <span id='few' className={fewClasses}>Мало!</span>
      <input onChange={onInputChange} className='BSCalc__input' type='number' min='1' max='100' step='1' placeholder='0' />
      <button onClick={onChooseClickR} className='BSCalc__calc'>Проверить!</button>
      <span id='many' className={manyClasses}>Много!</span>
    </section>
  )
}

// ----------------ACTIONS:
let result = {
  type: 'RESULT',
  // inputValue,
};

function mapStateToProps(state) {
  return {
    fewR: state.few,
    manyR: state.many,
    numR: state.num,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChooseClickR: function() {
      return dispatch(result)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseNumber);