import React from 'react';
import './ChooseNumber.css';

const ChooseNumber = ({onChooseClick}) => {
  return (
    <section className='BSCalc'>
      <span id='few' className='BSCalc__info none'>Мало!</span>
      <input className='BSCalc__input' type='number' min='1' max='100' step='1' placeholder='0' />
      <button onClick={onChooseClick} className='BSCalc__calc'>Проверить!</button>
      <span id='many' className='BSCalc__info none'>Много!</span>
    </section>
  )
}

export default ChooseNumber;