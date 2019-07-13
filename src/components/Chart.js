import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

function createData(day, score) {
  return { day, score };
}

const data = [
  createData("Monday", 50),
  createData("Tuesday", 70),
  createData("Wednesday", 90),
  createData("Thursday", 80),
  createData("Friday", 40)
];

const Chart = () => {
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="day" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Noise (Points)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="score" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
