import React from "react";
import Chart from "./Chart";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
class Teacher extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Results</CardTitle>
            <CardSubtitle>Ms McGee's Class</CardSubtitle>
            <CardText>Scores for the Week</CardText>
            <Chart />
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Teacher;
