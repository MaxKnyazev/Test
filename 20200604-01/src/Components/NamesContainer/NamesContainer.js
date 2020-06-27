import React from 'react';
import NameElement from '../NameElement/NameElement';

function NamesContainer ({names}) {
  let nameClasses = 'name-element';

  return (
    <div className="container">
      {names.map(elem => (<NameElement key={Date.now() + Math.random()} classes={nameClasses} value={elem}/>))}
    </div>
  )
}

export default NamesContainer;