import React, { useState } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar';
import TechTree from './components/TechTree';

// import { civilizations, CivilizationContext } from '../data/civilization-context'

function App() {

  return (
    <div className="App">
      <div className="container">
        {/* <section className="sidebar">
          <div className="sidebar-inner">
            <Sidebar />
          </div>
        </section> */}
        <section className="techtree">
          <div className="techtree-inner">
            <TechTree />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
