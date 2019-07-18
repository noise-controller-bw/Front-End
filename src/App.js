import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Login from './components/Login';
// import SignUp from "./SignUp";
// import Teacher from "./Teacher";
// import Classroom from "./Classroom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Welcome to Noise Controller</h1>
        <Login />
        {/* <SignUp /> */}
        {/* <Classroom /> */}
        {/* <Teacher /> */}
      </div>
    );
  }
}

export default App;
