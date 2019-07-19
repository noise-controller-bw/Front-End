import React from "react";
import { Route, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Teacher from "./components/Teacher";
import Classroom from "./components/Classroom";

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
        <>
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">
                {/* <NavLink to="/" className="link"> */}
                    Noise Controller
                {/* </NavLink> */}
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="link" to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="link" to="/register">Sign Up</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="link" to="/protected">Teacher</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="link" to="/protected/session">Classroom</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          {/* <Login /> */}
          <Route exact path="/login" component={Login} />

          {/* <SignUp /> */}
          <Route path="/register" component={SignUp} />

          <PrivateRoute exact path="/protected" component={Teacher} />
          <PrivateRoute exact path="/protected/session" component={Classroom} />
        </>
    );
  }
}

export default App;
