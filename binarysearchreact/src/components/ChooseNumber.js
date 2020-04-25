import React from 'react';
import './ChooseNumber.css';

const ChooseNumber = ({onInputChange, onChooseClick, few, many}) => {
  const fewClasses = few ? 'BSCalc__info' : 'BSCalc__info none';
  const manyClasses = many ? 'BSCalc__info' : 'BSCalc__info none';

  return (
    <section className='BSCalc'>
      <span id='few' className={fewClasses}>Мало!</span>
      <input onChange={onInputChange} className='BSCalc__input' type='number' min='1' max='100' step='1' placeholder='0' />
      <button onClick={onChooseClick} className='BSCalc__calc'>Проверить!</button>
      <span id='many' className={manyClasses}>Много!</span>
    </section>
  )
}

export default ChooseNumber;