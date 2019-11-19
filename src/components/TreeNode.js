import React, { Fragment, useState } from 'react';
import Button from './Button';

const TreeNode = (props) => {
  const [isExpanded, toggleExpanded] = useState(true);

  let classes = 'children';
  let hasChildren = React.Children.count(props.children) > 0;
  let hasChild = React.Children.count(props.children) === 1;

  if (hasChild) {
    classes = 'child'
  }

  return (
    <ul className={props.type}>
      <li className="node">
        <Button type={props.type} name={props.name} onClick={() => toggleExpanded(!isExpanded)}/>
      </li>
      {hasChildren &&
        <li className={classes}>
          {isExpanded &&
          <Fragment>{ props.children }</Fragment>
          }
        </li>
      }
      
    </ul>
  );
}

export default TreeNode;