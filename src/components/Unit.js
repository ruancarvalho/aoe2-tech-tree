import React from 'react';
import TreeNode from './TreeNode';

const Unit = (props) => {
  return (
    <TreeNode type="unit" name={props.name}>
      {props.children}
    </TreeNode>
  );
}

export default Unit;
