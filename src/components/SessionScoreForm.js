import React, { Component } from "react";

class SessionScoreForm extends Component {
  state = {
    sessionScore: {
      date: "",
      points: 100
    }
  };

  handleChange = e => {
    this.setState({
      sessionScore: {
        ...this.state.sessionScore,
        [e.target.name]: e.target.value
      }
    });
  };

  decrementScore = () => {
    this.setState({
      sessionScore: {
        points: this.state.sessionScore.points - 5
      }
    });
  };

  render() {
    return (
      <>
        <div>
          <h3>{`Current Score: ${this.state.sessionScore.points}`}</h3>
          <button onClick={this.decrementScore}>Lose Points</button>
        </div>
        <form className="session-form">
          <label>Date</label>
          <input
            type="text"
            name="date"
            placeholder="Date (i.e mm/dd/yy)"
            onChange={this.handleChange}
            value={this.state.sessionScore.date}
          />
          <label>Points</label>
          <input
            type="number"
            name="points"
            placeholder="Points (0 - 100)"
            onChange={this.handleChange}
            value={this.state.sessionScore.points}
          />
          <button>Submit Score</button>
        </form>
      </>
    );
  }
}

export default SessionScoreForm;
