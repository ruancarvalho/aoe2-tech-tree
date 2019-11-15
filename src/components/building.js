import React from 'react';
import Item from './item';

function Building(props) {
  return (
    <ul className={`building`}>
      <Item type="building" name={props.name} />
      <li className={`node`}>
        { props.children }
      </li>
    </ul>
  );
}

export default Building;
