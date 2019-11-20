import React from 'react';
import TreeNode from './TreeNode';

const Unit = (props) => {
  let unitType = props.unique ? 'unique-unit' : 'unit'

  return (
    <TreeNode type={unitType} name={props.name}>
      {props.children}
    </TreeNode>
  );
}

export default Unit;
