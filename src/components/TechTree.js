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
      <Building name="House" />
      <Building name="Town Center" />
      {/* {allTechTree.map(item => {
        if (item.type == BUILDING) {
          return (
            <Building name={item.name} key={item.name} />
          )
        }
        if (item.type == BLANK) {
          return <Wrapper />
        }
      })} */}
      <Building name="Mining Camp">
        <Wrapper>
          <Tech name="Gold Mining">
            <Wrapper>
              <Tech name="Gold Shaft Mining">
                <Wrapper />
              </Tech>
            </Wrapper>
          </Tech>
          <Tech name="Stone Mining">
            <Wrapper>
              <Tech name="Stone Shaft Mining">
                <Wrapper />
              </Tech>
            </Wrapper>
          </Tech>
        </Wrapper>
      </Building>

      <Building name="Lumber Camp">
        <Wrapper>
          <Tech name="Double-Bit Axe">
            <Wrapper>
              <Tech name="Bow Saw">
                <Wrapper>
                  <Tech name="Two-Man Saw">
                    <Wrapper />
                  </Tech>
                </Wrapper>
              </Tech>
            </Wrapper>
          </Tech>
        </Wrapper>
      </Building>

      <Building name="Mill">
        <Wrapper>
          <Building name="Market">
            <Tech name="Cartography">
              <Tech name="Caravan">
                <Wrapper>
                  <Tech name="Guilds" />
                </Wrapper>
              </Tech>
            </Tech>
            <Tech name="Coinage">
              <Tech name="Banking" />
            </Tech>
            <Unit name="Trade Cart" />
          </Building>
        </Wrapper>
        <Wrapper>
          <Tech name="Horse Collar">
            <Wrapper>
              <Tech name="Heavy Plow">
                <Wrapper>
                  <Tech name="Crop Rotation">
                    <Wrapper />
                  </Tech>
                </Wrapper>
              </Tech>
            </Wrapper>
          </Tech>
        </Wrapper>
        <Building name="Farm" />
      </Building>
    </Fragment>
  )
}

export default TechTree;