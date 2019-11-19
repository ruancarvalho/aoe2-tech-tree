import React from 'react';

function Wrapper(props) {
  let classes = 'children';
  
  if (React.Children.count(props.children) <= 1) {
    classes = 'child'
  }

  let connector = props.connector === false ? 'no-connector' : '';

  return (
    <ul className={`wrapper ${connector}`}>
      <li className="node blank" />
      <li className={classes}>
        { props.children }
      </li>
    </ul>
  );
}

export default Wrapper;
