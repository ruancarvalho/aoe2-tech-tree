import React, { useState } from 'react';
import Button from './Button';

const TreeNode = (props) => {
  const [isExpanded, toggleExpanded] = useState(true);

  return (
    <ul className={props.type}>
      <li className="node">
        <Button type={props.type} name={props.name} onClick={() => toggleExpanded(!isExpanded)}/>
      </li>
      {isExpanded &&
        <li className="children">
          {props.children}
        </li>
      }
    </ul>
  );
}

export default TreeNode;