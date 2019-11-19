import React, { Fragment } from 'react';

import Building from './Building';
import Unit from './Unit';
import Tech from './Tech';
import Wrapper from './Wrapper';



const ArcheryTechTree = () => {
  return (
    <Fragment>
      <Building name="Archery Range">
        <Unit name="Archer">
          <Unit name="Crossbowman">
            <Wrapper>
              <Unit name="Arbalest" />
            </Wrapper>
          </Unit>
        </Unit>
        <Unit name="Skirmicher">
          <Unit name="Elite Skirmicher">
            <Wrapper>
              <Unit name="Imperial Skirmisher" />
            </Wrapper>
          </Unit>
        </Unit>
        <Wrapper>
          <Unit name="Cavalry Archer">
            <Wrapper>
              <Unit name="Heavy Cavalry Archer" />
            </Wrapper>
          </Unit>
        </Wrapper>
        <Wrapper>
          <Tech name="Thumb Ring" />
        </Wrapper>
      </Building>
    </Fragment>
  )
}

const TownCenterTechTree = () => {
  return (
    <Fragment>
      <Building name="Town Center">
        <Unit name="Villager">
          <Tech name="Town Watch">
            <Wrapper>
              <Tech name="Town Patrol " />
            </Wrapper>
          </Tech>
        </Unit>
        <Tech name="Feudal Age">
          <Tech name="Castle Age">
            <Wrapper>
              <Tech name="Imperial Age" />
            </Wrapper>
          </Tech>
        </Tech>
        <Tech name="Loom">
          <Tech name="Wheelbarrow">
            <Wrapper>
              <Tech name="Hand Cart" />
            </Wrapper>
          </Tech>
        </Tech>
      </Building>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
            <Wrapper connector={false}>
              <Building name="Town Center" />
            </Wrapper>
          </Wrapper>
        </Wrapper>  
      </Wrapper>
    </Fragment>
  )
}

const MiningTechTree = () => {
  return (
    <Building name="Mining Camp">
      <Wrapper>
        <Tech name="Gold Mining">
          <Wrapper>
            <Tech name="Gold Shaft Mining" />
          </Wrapper>
        </Tech>
        <Tech name="Stone Mining">
          <Wrapper>
            <Tech name="Stone Shaft Mining" />
          </Wrapper>
        </Tech>
      </Wrapper>
    </Building>
  )
}

const LumberTechTree = () => {
  return (
    <Building type="building" name="Lumber Camp">
      <Wrapper>
        <Tech name="Double-Bit Axe">
          <Wrapper>
            <Tech name="Bow Saw">
              <Wrapper>
                <Tech name="Two-Man Saw" />
              </Wrapper>
            </Tech>
          </Wrapper>
        </Tech>
      </Wrapper>
    </Building>
  )
}

/**
 * The default Tech Tree
 */
const TechTree = () => {

  return(
    <Fragment>   
      <Building name="barracks">
        <Wrapper>
          <ArcheryTechTree />
        </Wrapper>
        <Unit name="Militia">
          <Unit name="Man-at-Arms">
            <Wrapper>
              <Unit name="Long Swordsman">
                <Wrapper>
                  <Unit name="Two-Handed Swordsman">
                    <Unit name="Champion" />
                  </Unit>
                </Wrapper>
              </Unit>
            </Wrapper>
          </Unit>
        </Unit>
        <Wrapper>
          <Unit name="Spearman">
            <Wrapper>
              <Unit name="Pikeman">
                <Wrapper>
                  <Unit name="Halberdier" />
                </Wrapper>
              </Unit>
            </Wrapper>
          </Unit>
        </Wrapper>
        <Wrapper>
          <Building name="Stable" />
        </Wrapper>
      </Building>
      <Building name="docks" />
      <Building name="House" />
      <TownCenterTechTree />
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

      <MiningTechTree />
      <LumberTechTree />

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
                  <Tech name="Crop Rotation" />
                </Wrapper>
              </Tech>
            </Wrapper>
          </Tech>
        </Wrapper>
        <Building name="Farm" />
      </Building>
      <div className="age feudal-age"></div>
      <div className="age castle-age"></div>
      <div className="age imperial-age"></div>
    </Fragment>
  )
}

export default TechTree;