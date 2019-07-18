import React from "react";
import { connect } from "react-redux";

import Audio from "./Audio";
// import Background from "./Background";
// import Stopwatch from "./Stopwatch";

class Classroom extends React.Component {
  render() {
    return (
      <div>
        {/* <Background /> */}
        <Audio />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Classroom);
