import React from "react";
import { connect } from "react-redux";

import { addSessionScore } from "./actions";

import { Input, Button, Form, FormGroup, Container, Row } from "reactstrap";

class ScoreForm extends React.Component {
  state = {
    sessionScore: {
      date: "",
      score: 100
    }
  };
  handleChange = evt => {
    this.setState({
      sessionScore: {
        ...this.state.sessionScore,
        [evt.target.name]: evt.target.value
      }
    });
  };

  decrementScore = () => {
    this.setState({
      sessionScore: {
        score: this.state.sessionScore.score - 5
      }
    });
  };

  handleSessionScore = evt => {
    evt.preventDefault();
    this.props.addSessionScore(this.state.sessionScore);
    // .then(() => this.props.history.push('/protected'));
  };
  render() {
    return (
      <Form>
        <Container>
          <Row>
            <h3>{this.state.sessionScore.score}</h3>
            <Button onClick={this.decrementScore}>Lose Points</Button>
          </Row>
          <Row>
            <FormGroup>
              <Input
                id="date"
                label="Date"
                name="date"
                placeholder="mm/dd/yyyy"
                value={this.state.sessionScore.date}
                onChange={this.handleChange}
              />
              <Input
                id="score"
                label="Score"
                name="score"
                placeholder="score from 0 - 100"
                value={this.state.sessionScore.score}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>
          <Button>Submit Score</Button>
        </Container>
      </Form>
    );
  }
}

export default connect(
  null,
  { addSessionScore }
)(ScoreForm);
