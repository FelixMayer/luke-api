import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';

import HomePage from './components/HomePage';
import People from './components/People';
import Planets from './components/Planets';
import Starship from './components/Starship';

const App = () => {
  return (
    <div className="App">
      <Link style={{ textDecorationLine: 'none', color: 'black' }} to="/" >HomePage</Link>
      <br /><hr />
      <Router className='App'>
        <HomePage path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <Starship path="/starships/:id" />
      </Router>
    </div>
  );
};

export default App;