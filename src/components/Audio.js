import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import AudioAnalyser from "./AudioAnalyser";
import Background from "./Background";

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMic = this.toggleMic.bind(this);
  }

  async getMic() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });
  }

  stopMic() {
    this.state.audio.getTracks().forEach(trk => trk.stop());
    this.setState({ audio: null });
  }

  toggleMic() {
    if (this.state.audio) {
      this.stopMic();
    } else {
      this.getMic();
    }
  }

  render() {
    return (
      <div>
        <main>
          <div className="controls">
            <Background />
            <Button
              onClick={this.toggleMic}
              color={this.state.audio ? "secondary" : "primary"}
              variant="outlined"
            >
              {this.state.audio ? "Stop Mic" : "Start Mic"}
            </Button>
          </div>
          {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ""}
        </main>
      </div>
    );
  }
}

export default Audio;
