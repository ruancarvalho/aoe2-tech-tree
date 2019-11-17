import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn btn-${props.type}`} onClick={props.onClick}>
      <div className={`icon icon-${props.name}`} />
      {props.name}
    </button>
  );
}

export default Button;
