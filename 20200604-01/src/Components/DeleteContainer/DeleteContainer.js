import React from 'react';

import NameElement from '../NameElement/NameElement';

function DeleteContainer ({deleteNames}) {
    let deleteClasses = 'delete-element';
  
    return (
      <div className="delete-container">
        {deleteNames.map(elem => (<NameElement key={Date.now() + Math.random()} classes={deleteClasses} value={elem}/>))}
      </div>
    )
}

export default DeleteContainer;