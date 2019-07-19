import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import PrivateRoute from "./PrivateRoute";

import Login from "./Login";
import SignUp from "./SignUp";
import Teacher from "./Teacher";
// import Classroom from "./Classroom";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <>
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Noise Controller</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/Login">Login</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/register">Sign Up</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          {/* <Login /> */}
          <Route path="/login" component={Login} />

          {/* <SignUp /> */}
          <Route path="/register" component={SignUp} />

          <PrivateRoute exact path="/user/:id" component={Teacher} />
        </>
      </Router>
    );
  }
}

export default App;
