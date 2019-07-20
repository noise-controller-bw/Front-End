import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLoginSubmit = evt => {
    evt.preventDefault();
    this.props.login(this.state.credentials);
    // this.props.history.push("/users");
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleLoginSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          value={this.state.credentials.username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.credentials.password}
        />
        <button>Log In</button>
      </form>
    );
  }
}

export default LoginForm;
