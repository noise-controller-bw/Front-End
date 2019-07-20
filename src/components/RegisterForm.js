import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.adduser(this.state.user);
  };

  render() {
    return (
      <form className="register-form" onSubmit={this.handleRegister}>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.user.firstname}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.user.lastname}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          value={this.state.user.username}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={this.handleChange}
          value={this.state.user.email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.user.password}
        />
        <button>Register</button>
      </form>
    );
  }
}

export default RegisterForm;
