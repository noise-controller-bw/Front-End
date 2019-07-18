import React from "react";
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
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="fname">First Name</Label>
                <Input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="lname">Last Name</Label>
                <Input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="username">Email</Label>
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
              placeholder="Password"
            />
            <FormGroup>
              <Label for="classname">Class Name</Label>
              <Input
                type="text"
                name="classname"
                id="classname"
                placeholder="Class Name"
              />
            </FormGroup>
          </FormGroup>
          <Button color="primary">Sign Up</Button>
        </Form>
      </Container>
    );
  }
}
export default SignUp;
