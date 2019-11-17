import React from 'react';
import TreeNode from './TreeNode';

const Building = (props) => {
  return (
    <TreeNode type="building" name={props.name}>
      {props.children}
    </TreeNode>
  );
}

export default Building;
