import React, { Fragment } from 'react';

import Building from './building';
import Unit from './unit';
import Tech from './Tech';
import Wrapper from './Wrapper';

/**
 * The default Tech Tree
 */
const TechTree = () => {

  return(
    <Fragment>   
      <Building name="barracks">
        <Wrapper>
          <Building name="Archery Range">
            <Unit name="Archer">
              <Unit name="Crossbowman" />
            </Unit>
            <Unit name="Skirmicher">
              <Unit name="Elite Skirmicher" />
            </Unit>
            <Wrapper>
              <Unit name="Cavalry Archer" />
            </Wrapper>
            <Wrapper>
              <Tech name="Thumb Ring" />
            </Wrapper>
          </Building>
        </Wrapper>
        <Unit name="Militia">
          <Unit name="Man-at-Arms">
            <Unit name="Long Swordsman">
              <Unit name="Two-Handed Swordsman">
                <Unit name="Champion" />
              </Unit>
            </Unit>
          </Unit>
        </Unit>
        <Wrapper>
          <Building name="Stable" />
        </Wrapper>
      </Building>
      <Building name="docks" />
      <Building name="Town Center" />
      <Building name="Mining Camp" />
      <Building name="Lumber Camp" />
      <Building name="Mill" />
      <Building name="House" />
    </Fragment>
  )
}

export default TechTree;