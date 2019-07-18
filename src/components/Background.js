import React from "react";
import forestImage from "../src/img/forest.jpg";
import bear from "../src/img/bear.gif";

import {Button} from "reactstrap";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuiet: false
    };
  }

  audioFilter(audioData) {
    audioData.filter(lvl => lvl < 128);
    console.log(audioData);
  }

  startTimer() {
    setInterval(() => {
      this.audioFilter();
      if (this.audioFilter()) {
        this.setState({ isQuiet: true });
      }
    }, 30000);
  }

  stopTimer() {
    clearInterval(() => {
      this.startTimer();
    });
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
      <div>
        <img
          src={forestImage}
          className="forest"
          style={{ position: "relative" }}
          alt="forest"
        />
        {this.state.isQuiet && <img src={bear} className="bear" alt="bear" />}
        <div>
          <Button onClick={() => this.startTimer}>Start Timer</Button>
          {/* <Button onClick={() => this.startMed}>Start Med Level Timer</Button> */}
          <Button onClick={() => this.stopTimer}>Stop</Button>
        </div>
      </div>
    );
  }
}

export default Background;
