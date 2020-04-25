import React from 'react';
import './CountTries.css';

const CountTries = ({count, correct}) => {
  const correctClasses = correct ? 'BSResult__message' : 'BSResult__message none';
  return (
    <section className='BSResult'>
      <div className='BSResult__countGroup'>
        <span className='BSResult__text'>Количество попыток :</span>
        <span className='BSResult__count'>{count}</span>
      </div>
      <p id='correct' className={correctClasses}>Правильно!</p>
    </section>  
  )
} 

export default CountTries;