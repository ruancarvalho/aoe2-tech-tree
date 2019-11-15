import React from 'react';
import './App.scss';

import Building from './components/building';
import Unit from './components/unit';
import Tech from './components/Tech';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        
          
          {/* <div className="items-wrapper">
            
            <Item type="building" name="barracks"/>
            <Item type="building" name="Docks"/>
            <Item type="building" name="Town Center"/>
            <Item type="building" name="Mining Camp"/>
            <Item type="building" name="Lumber Camp"/>
            <Item type="building" name="Mill"/>
            <Item type="building" name="House"/>
          </div>
          <div className="items-wrapper">
            <Item type="unit" name="Militia"/>
          </div> */}
                
          {/* <div className="items-wrapper">
            <Item type="building" name="Archery Range" />
            <Item type="unit" name="Man-at-Arms"/>
            <Item type="unit" name="Spearman"/>
            <Item type="unit" name="Eagle Scout"/>
            <Item type="building" name="Stable" />
          </div>
          <div className="items-wrapper">
            <Item type="unit" name="Archer" />
            <Item type="unit" name="Skirmicher" />
          </div> */}
                
          {/* <div className="items-wrapper">
            <Item type="unit" name="Crossbowman" />
            <Item type="unit" name="Elite Skirmicher" />
            <Item type="unit" name="Cavalry Archer" />
            <Item type="tech" name="Thumb Ring" />

            <Item type="unit" name="Long Swordsman" />
            <Item type="unit" name="Pikeman" />
            <Item type="unit" name="Eagle Warrior" />
          </div> */}
                
          {/* <div className="items-wrapper">
            <Item type="unit" name="Arbalest" />
            <Item type="unit" name="Hand Cannoneer" />
            <Item type="unit" name="Heavy Cav Archer" />
            <Item type="tech" name="Parthian Tatics" />

            <Item type="unit" name="Two-Handed Swordsman" />
            <Item type="unit" name="Halbardier" />
            <Item type="unit" name="Elite Eagle Warrior" />
          </div>
          <div className="items-wrapper">
            <Item type="unit" name="Champion" />
          </div> */}
                

      </header>
    </div>
  );
}

export default App;
