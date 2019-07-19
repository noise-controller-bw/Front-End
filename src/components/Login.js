import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

import { Route, Link } from "react-router-dom";

import SignUp from "./SignUp";

import { Button, Form, FormGroup, Label, Input, Container, Row } from "reactstrap";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = evt => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [evt.target.name]: evt.target.value
      }
    });
  };

  handleLogin = evt => {
    evt.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleLogin}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Row>
            No account? <Link to="/register">click here</Link>
            <Route path="/register" component={SignUp} />
          </Row>
          <Button color="primary" onClick={this.handleLogin}>
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}
export default connect(
  null,
  { login }
)(Login);

