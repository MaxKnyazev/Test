import React from 'react';
import './CountTries.css';
import {connect} from 'react-redux';

const CountTries = ({countR, correctR}) => {
  const correctClasses = correctR ? 'BSResult__message' : 'BSResult__message none';
  return (
    <section className='BSResult'>
      <div className='BSResult__countGroup'>
        <span className='BSResult__text'>Количество попыток :</span>
        <span className='BSResult__count'>{countR}</span>
      </div>
      <p id='correct' className={correctClasses}>Правильно!</p>
    </section>  
  )
} 

function mapStateToProps(state) {
  return {
    countR: state.count,
    correctR: state.correct
  }
}

export default connect(mapStateToProps)(CountTries);