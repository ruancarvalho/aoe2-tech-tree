import React from 'react';
import TreeNode from './TreeNode';

const Tech = (props) => {
  return (
    <TreeNode type="tech" name={props.name}>
      {props.children}
    </TreeNode>
  );
}

export default Tech;
