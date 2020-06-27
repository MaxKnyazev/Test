import React from 'react';

function DeleteButton({clickHandler}) {
    return (
      <button onClick={clickHandler} className="button-delete">Delete random name</button>
    )
}

export default DeleteButton;