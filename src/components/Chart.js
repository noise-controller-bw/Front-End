import React from "react";
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid } from "recharts";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        this.createData("Monday", 50),
        this.createData("Tuesday", 70),
        this.createData("Wednesday", 90),
        this.createData("Thursday", 80),
        this.createData("Friday", 40)
      ]
    };
  }

  createData(day, score) {
    return { day, score };
  }

  render() {
    return (
      <React.Fragment>
        <LineChart
          data={this.state.data}
          width={500}
          height={400}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Noise (Points)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="score" stroke="#556CD6" dot={false} />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default Chart;

