import React, { Component } from "react";
import { Button, Container, Jumbotron } from 'reactstrap';


class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-display">
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-5">Session Time</h1>
          <h3 >{minutes} : {seconds}</h3>
          {this.state.timerOn === false && this.state.timerTime === 0 && (
          <Button onClick={this.startTimer}>Start</Button>
        )}
        {this.state.timerOn === true && (
          <Button onClick={this.stopTimer}>Stop</Button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <Button onClick={this.startTimer}>Resume</Button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <Button onClick={this.resetTimer}>Reset</Button>
        )}
        </Container>
      </Jumbotron>
          
        </div>
       
      </div>
    );
  }
}
export default Stopwatch;
