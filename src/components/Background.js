import React from "react";
import forestImage from "../img/forest.jpg";
import bear from "../img/bear.gif";

import Stopwatch from "./Stopwatch";
import SessionScoreForm from "./SessionScoreForm";
import Audio from "./Audio";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuiet: false,
      time: 30000,
      gameEnd: false
    };
  }

  startTimer() {
    setInterval(() => {
      // this.audioFilter();
      this.setState({ isQuiet: true });
    }, this.state.time);
  }

  stopTimer() {
    clearInterval(this.startTimer);
    this.setState({ isQuiet: false });
  }

  gameOver() {
    if (this.state.isQuiet === true) {
      this.setState({ gameEnd: true });
    }
  }

  render() {
    return (
      <div>
        <img
          src={forestImage}
          className="forest"
          style={{ position: "relative" }}
          alt="forest"
        />
        {this.state.isQuiet && <img src={bear} className="bear" alt="bear" />}
        {this.state.isQuiet && <h2>GAME OVER</h2>}
        <div>
          <button onClick={() => this.startTimer()}>Start Game</button>
          <button onClick={() => this.stopTimer()}>Stop</button>
          <div className="sessionInfo">
            <Audio />
            <Stopwatch />
            <SessionScoreForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
