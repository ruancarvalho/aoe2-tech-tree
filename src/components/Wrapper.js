import React from 'react';

function Wrapper(props) {
  return (
    <ul className={`wrapper`}>
      <div />
      <li className={`node`}>
        { props.children }
      </li>
    </ul>
  );
}

export default Wrapper;
