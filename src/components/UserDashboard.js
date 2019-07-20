import React from "react";
import Background from "./Background";

const User = props => {
  return (
    <>
      <h1>{`Welcome ${props.user.username}`}</h1>
    </>
  );
};

class UserDashboard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.users.map((user, i) =>
          i === 2 ? <User user={user} /> : <p />
        )}

        <Background />
      </div>
    );
  }
}

export default UserDashboard;
