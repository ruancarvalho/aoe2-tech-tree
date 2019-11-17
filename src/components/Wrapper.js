import React from 'react';

function Wrapper(props) {
  return (
    <ul className="wrapper">
      <li className="node blank" />
      <li className="children">
        { props.children }
      </li>
    </ul>
  );
}

export default Wrapper;
