import React from 'react';

function Item(props) {
  return (
    <button type="button" className={`btn btn-${props.type}`}>
      <div className={`icon icon-${props.name}`} />
      {props.name}
    </button>
  );
}

export default Item;
