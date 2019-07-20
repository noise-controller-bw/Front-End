import React, { Component } from "react";
import API from "./api";

import { Route, NavLink } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AppHome from "./components/AppHome";
import UserDashboard from "./components/UserDashboard";

import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.get("users")
      .then(res =>
        this.setState({
          users: res.data
        })
      )
      .catch(err => console.log(err));
  }

  addUser = user => {
    API.post("register", user, {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => res.data)
      .catch(err => console.log(err));
  };

  login = creds => {
    API.post("login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));
  };

  getSessions = user => {
    API.get(`users/${user.id}/sessions`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <nav>
          <h1>Noise Controller</h1>
          <div className="links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/users/">User Dashboard</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log in</NavLink>
          </div>
        </nav>

        <Route exact path="/" component={AppHome} />
        <Route
          path="/register"
          render={props => <RegisterForm {...props} adduser={this.addUser} />}
        />
        <Route
          path="/login"
          render={props => <LoginForm {...props} login={this.login} />}
        />
        {/* 
        <PrivateRoute
          path="/users"
          render={props => (
            <UserDashboard
              {...props}
              getSessions={this.getSessions}
              users={this.state.users}
            />
          )}
        /> */}

        <Route
          path="/users/"
          render={props => (
            <UserDashboard
              {...props}
              getSessions={this.getSessions}
              users={this.state.users}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
