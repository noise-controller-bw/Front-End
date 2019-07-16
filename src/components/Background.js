import React from "react";
import forestImage from "../src/img/forest.jpg";
import bear from "../src/img/bear.gif";

const Background = () => {
  return (
    <div>
      <img
        src={forestImage}
        className="forest"
        style={{ position: "relative" }}
        alt="forest"
      />
      <img src={bear} className="bear" alt="bear" />
    </div>
  );
};

export default Background;
