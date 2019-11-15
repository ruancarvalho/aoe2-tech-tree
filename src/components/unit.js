import React from 'react';
import Item from './item';

function Unit(props) {
  return (
    <ul className={`unit`}>
      <Item type="unit" name={props.name} />
      <li className={`node`}>
        { props.children }
      </li>
    </ul>
  );
}

export default Unit;
