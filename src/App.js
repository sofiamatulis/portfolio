import React, { Component } from 'react';
import Work from './Work'
import Education from './Education'
import Employment from './Employment'
import FunFacts from './FunFacts'
import Languages from './Languages'
import FunProjects from './FunProjects'
import PersonalInfo from './PersonalInfo'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Sofia Matulis
          </h1>
          <h2> Full Stack Developer </h2>
          <a className="about-me-button" href="#aboutme"> About Me </a>
        </header>
        <main id="aboutme">
          <Work />
          <Education />
          <Employment />
          <FunFacts />
          <FunProjects />
          <Languages />
          <PersonalInfo />
        </main>
      </div>
    );
  }
}

export default App;
