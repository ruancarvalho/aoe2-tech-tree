import React, { Fragment, useContext } from 'react';
import { civilizations, CivilizationContext } from '../data/civilization-context'

const Sidebar = (props) => {

  const civsOptions = []  
  for (let [key, value] of Object.entries(civilizations)) {
    civsOptions.push({ key, value });
  }
  
  return (
    <Fragment>
      <select>
        {civsOptions.map(item => {
          return (
            <option value={item.value}>{item.key}</option>
          )
        })}
      </select>
    </Fragment>
  );
}

export default Sidebar;