import React from 'react';
import './CountTries.css';

const CountTries = ({count}) => {
  return (
    <section className='BSResult'>
      <div className='BSResult__countGroup'>
        <span className='BSResult__text'>Количество попыток :</span>
        <span className='BSResult__count'>{count}</span>
      </div>
      <p id='correct' className='BSResult__message none'>Правильно!</p>
    </section>  
  )
} 

export default CountTries;