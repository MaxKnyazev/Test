import React from 'react';

function NameElement({classes, value}) {
    return (
      <span className={classes}>{value}</span>
    )
}

export default NameElement;