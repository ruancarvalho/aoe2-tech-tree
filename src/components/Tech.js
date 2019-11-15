import React from 'react';
import Item from './item';

function Tech(props) {
  return (
    <ul className={`tech`}>
      <Item type="tech" name={props.name} />
      <li className={`node`}>
        { props.children }
      </li>
    </ul>
  );
}

export default Tech;
