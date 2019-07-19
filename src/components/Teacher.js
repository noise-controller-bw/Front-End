import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Chart from "./Chart";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container
} from "reactstrap";
class Teacher extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Card>
            <CardBody>
              <CardTitle>Results</CardTitle>
              <CardSubtitle>Ms McGee's Class</CardSubtitle>
              <CardText>Scores for the Week</CardText>
              <Chart />
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}
export default withRouter(
  connect(
    null,
    {}
  )(Teacher)
);
