import React from "react";
import { connect } from "react-redux";

import { addTeacher } from "./actions";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

class SignUp extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: ""
    }
  };

  handleChange = evt => {
    this.setState({
      user: {
        ...this.state.user,
        [evt.target.name]: evt.target.value
      }
    });
  };

  handleRegister = evt => {
    evt.preventDefault();
    this.props.addTeacher(this.state.user);
    // .then(() => this.props.history.push('/protected'));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleRegister}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={this.state.user.firstname}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="lname">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lname"
                  placeholder="Last Name"
                  value={this.state.user.lastname}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={this.state.user.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="classname"
                placeholder="Email"
                value={this.state.user.email}
                onChange={this.handleChange}
              />
            </FormGroup>
          </FormGroup>
          <Button color="primary" onClick={this.handleRegister}>
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}
export default connect(
  null,
  { addTeacher }
)(SignUp);
