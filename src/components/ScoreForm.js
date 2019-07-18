import React from "react";
import { Input, Button, Form, FormGroup, Container, Row } from "reactstrap";

class ScoreForm extends React.Component {
  render() {
    return (
      <Form>
        <Container>
          <Row>
            <FormGroup>
              <Input
                id="date"
                label="Date"
                name="date"
                placeholder="mm/dd/yyyy"
              />
              <Input
                id="score"
                label="Score"
                name="score"
                placeholder="score from 0 - 100"
              />
            </FormGroup>
          </Row>
          <Button>Submit Score</Button>
        </Container>
      </Form>
    );
  }
}

export default ScoreForm;
