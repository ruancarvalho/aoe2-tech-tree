import React, { useState } from 'react';
import Button from './Button';

const TreeNode = (props) => {
  const [isExpanded, toggleExpanded] = useState(true);

  let classes = 'children';

  if (React.Children.count(props.children) <= 1) {
    classes = 'child'
  }

  return (
    <ul className={props.type}>
      <li className="node">
        <Button type={props.type} name={props.name} onClick={() => toggleExpanded(!isExpanded)}/>
      </li>
      {isExpanded &&
        <li className={classes}>
          {props.children}
        </li>
      }
    </ul>
  );
}

export default TreeNode;