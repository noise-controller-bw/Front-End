import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Welcome to Noise Controller</h1>
        <Login />
      </div>
    );
  }
}

export default App;
