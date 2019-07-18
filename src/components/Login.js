import React from "react";
import { connect } from "react-redux";

import { login } from "../actions/index";

import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </FormGroup>
          <Button color="primary">Login</Button>
        </Form>
      </Container>
    );
  }
}
export default connect(
  null,
  { login }
)(Login);
