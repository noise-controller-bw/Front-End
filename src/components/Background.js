import React from "react";
import forestImage from "../img/forest.jpg";
import bear from "../img/bear.gif";

import Stopwatch from "./Stopwatch";

import { Button, Container } from "reactstrap";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuiet: false,
      time: 30000,
      gameEnd: false
    };
  }

  // audioFilter(audioData) {
  //   audioData.filter(lvl => lvl < 128);
  //   console.log(audioData);
  // }

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
    if(this.state.isQuiet === true) {
      this.setState({gameEnd: true});
    }
  }

  // StopTimerLowThres() {
  //   clearInterval(this.timer);
  //   clearInterval(this.StartmediumThresh);
  //   this.setState(prevState => {
  //     return {
  //       flag: 3,
  //       chart: { ...prevState.chart }
  //     };
  //   });
  // }

  // startMed() {
  //   const { audioData } = this.props;
  //   for (const itm of audioData) {
  //     let current = new Date();
  //     let nextHour = new Date(
  //       current.getFullYear(),
  //       current.getMonth(),
  //       current.getDate(),
  //       current.getHours() + 1,
  //       0,
  //       0,
  //       0
  //     );
  //     let diff = nextHour - current;
  //     console.log(diff);
  //     this.timer = setInterval(() => {
  //       if (itm > 128) {
  //         this.setState({ isQuiet: false });
  //         // let newChart = {
  //         //   points: setPoints((points -= 1)),
  //         //   date: new Date()
  //         // };
  //         //   return {
  //         //     flag: 1,
  //         //     chart: { ...prevState.chart, newChart }
  //         //     // // points: prevState.points -5,
  //         //     // // date: new Date()
  //         //   };
  //         // });
  //       } else if (itm <= 128) {
  //         this.setState({ isQuiet: true });
  //         // this.setState(prevState => {
  //         //   return {
  //         //     flag: 2,
  //         //     chart: { ...prevState.chart }
  //         //   };
  //         // }); //set state

  //         //}}, difference
  //       } //conditional
  //     }, 3000);
  //   }
  // }

  // startAnimalTimer() {
  //   this.animalTimer = setInterval(
  //     () => this.setState({ isQuiet: true }),
  //     15000
  //   );
  //   this.animalOff = setInterval(
  //     () => this.setState({ isQuiet: false }),
  //     70000
  //   );
  // }

  render() {
    return (
      <Container>
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
            <Container className="btn-contain">
              <Button onClick={() => this.startTimer()}>Start Timer</Button>
              {/* <Button onClick={() => this.startMed}>Start Med Level Timer</Button> */}
              <Button onClick={() => this.stopTimer()}>Stop</Button>
              <Stopwatch />
            </Container>
          </div>
        </div>
      </Container>
    );
  }
}

export default Background;
