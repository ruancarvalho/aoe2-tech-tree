import React, { Fragment } from 'react';

import Building from './Building';
import Unit from './Unit';
import Tech from './Tech';
import Wrapper from './Wrapper';


const BarracksTechTree = () => {
  return (
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
        <Unit name="Eagle Scout">
          <Wrapper>
            <Unit name="Eagle Warrior">
              <Wrapper>
                <Unit name="Elite Eagle Warrior" />
              </Wrapper>
            </Unit>
          </Wrapper>
        </Unit>
      </Wrapper>
      <Wrapper>
        <Tech name="Tracking">
          <Wrapper>
            <Tech name="Squires">
              <Wrapper>
                <Unit name="Condottiero" unique />
              </Wrapper>
            </Tech>
          </Wrapper>
        </Tech>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Tech name="Arson" />
          </Wrapper>
        </Wrapper>  
      </Wrapper>
      <Wrapper>
        <StableTechTree />
      </Wrapper>
    </Building>
  )
}

const WonderTechTree = () => {
  return (
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
            <Wrapper connector={false}>
              <Wrapper connector={false}>
                <Building name="Wonder" />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

const FeitoriaTechTree = () => {
  return (
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
            <Wrapper connector={false}>
              <Wrapper connector={false}>
                <Building name="Feitoria" />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

const DockTechTree = () => {
  return (
    <Building name="Dock">
      <Unit name="Fishing Ship">
        <Unit name="Fire Galley">
          <Wrapper>
            <Unit name="Fire Ship">
              <Wrapper>
                <Unit name="Fast Fire Ship" />
              </Wrapper>
            </Unit>
          </Wrapper>
        </Unit>
      </Unit>
      <Unit name="Transport Ship">
        <Unit name="Trade Cog">
          <Wrapper>
            <Tech name="Gillnets">
              <Wrapper>
                <Unit name="Cannon Galleon">
                  <Unit name="Elite Cannon Galleon" />
                </Unit>
              </Wrapper>
            </Tech>
          </Wrapper>
        </Unit>
      </Unit>
      <Wrapper>
        <Unit name="Demolition Raft">
          <Wrapper>
            <Unit name="Demolition Ship">
              <Wrapper>
                <Unit name="Heavy Demolition Ship" />
              </Wrapper>
            </Unit>
          </Wrapper>
        </Unit>
      </Wrapper>
      <Wrapper>
        <Unit name="Galley">
          <Wrapper>
            <Unit name="War Galley">
              <Wrapper>
                <Unit name="Galleon" />
              </Wrapper>
            </Unit>
          </Wrapper>
        </Unit>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Unit name="Turtle Ship" unique>
              <Wrapper>
                <Unit name="Elite Turtle Ship" unique />
              </Wrapper>
            </Unit>
          </Wrapper>
        </Wrapper>
      </Wrapper> 
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Unit name="Longboat" unique>
              <Wrapper>
                <Unit name="Elite Longboat" unique />
              </Wrapper>
            </Unit>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Unit name="Caravel" unique>
              <Wrapper>
                <Unit name="Elite Caravel" unique/>
              </Wrapper>
            </Unit>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Tech name="Careening">
              <Wrapper>
                <Tech name="Dry Dock" />
              </Wrapper>
            </Tech>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Wrapper>
                <Tech name="Shipwright" />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Building name="Fish Trap"></Building>
      </Wrapper>
    </Building>
  )
}

const OutpostTechTree = () => {
  return (
    <Building name="Outpost">
      <Wrapper>
        <Building name="Watch Tower">
          <Wrapper>
            <Building name="Guard Tower">
              <Wrapper>
                <Building name="Keep">
                  <Building name="Bombard Tower" />
                </Building>
              </Wrapper>
            </Building>
          </Wrapper>
        </Building>
      </Wrapper>
    </Building>
  )
}

const WallTechTree = () => {
  return (
    <Building name="Palisade Wall">
      <Building name="Palisade Gate">
        <Building name="Gate">
          <Building name="Stone Wall">
            <Building name="Fortfied Wall" />
          </Building>
        </Building>
      </Building>
    </Building>
  )
}

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
              <Unit name="Imperial Skirmisher" unique />
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

const StableTechTree = () => {
  return (
    <Fragment>
      <Building name="Stable">
        <Unit name="Scout Cavalry">
          <Unit name="Light Cavalry">
            <Wrapper>
              <Unit name="Hussar" />
            </Wrapper>
          </Unit>
        </Unit>
        <Tech name="Bloodlines">
          <Unit name="Knight">
            <Wrapper>
              <Unit name="Cavalier">
                <Unit name="Paladin" />
              </Unit>
            </Wrapper>
          </Unit>
        </Tech>
        <Wrapper>
          <Unit name="Camel">
            <Wrapper>
              <Unit name="Heavy Camel">
                <Unit name="Imperial Camel" unique/>
              </Unit>
            </Wrapper>
          </Unit>
        </Wrapper>
        <Wrapper>
          <Unit name="Battle Elephant">
            <Wrapper>
              <Unit name="Elite Battle Elephant" />
            </Wrapper>
          </Unit>
        </Wrapper>
        <Wrapper>
          <Tech name="Husbandry" />
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
      <BarracksTechTree />

      <WonderTechTree />

      <FeitoriaTechTree />

      <DockTechTree />

      <OutpostTechTree />

      <WallTechTree />
      
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