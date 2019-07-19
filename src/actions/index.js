import axios from "axios";

export const LOGIN_START = "LOGIN_START";

export const DATA_FETCH_START = "DATA_FETCH_START";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_FAIL = "DATA_FETCH_FAIL";

export const ADD_TEACHER_START = "ADD_TEACHER_START";
export const ADD_TEACHER_SUCCESS = "ADD_TEACHER_SUCCESS";
export const ADD_TEACHER_FAIL = "ADD_TEACHER_FAIL";

// export const SESSION_SCORE_START = "SESSION_SCORE_START";
// export const SESSION_SCORE_SUCCESS = "SESSION_SCORE_SUCCESS";
// export const SESSION_SCORE_FAIL = "SESSION_SCORE_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://noise-controller-buildweek.herokuapp.com/login", creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => console.error(err));
};

export const getData = () => dispatch => {
  dispatch({ type: DATA_FETCH_START });
  axios
    .get("https://noise-controller-buildweek.herokuappp.com/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
      dispatch({ type: DATA_FETCH_SUCCESS, payload: res.data.user });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: DATA_FETCH_FAIL, payload: err.response });
    });
};

//postChartData

// addTeacher
export const addTeacher = teacher => dispatch => {
  dispatch({ type: ADD_TEACHER_START });
  axios
    .post(
      "https://noise-controller-buildweek.herokuapp.com/register",
      teacher,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_TEACHER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ADD_TEACHER_FAIL, payload: err.response });
    });
};
//addScoreData
// export const addSessionScore = sessionScore => dispatch => {
//   dispatch({ type: ADD_TEACHER_START });
//   axios
//     .post(
//       `https://noise-controller-buildweek.herokuapp.com/users/${user.id}/sessions`,
//       sessionScore,
//       {
//         headers: { Authorization: localStorage.getItem("token") }
//       }
//     )
//     .then(res => {
//       console.log(res);
//       dispatch({ type: ADD_TEACHER_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err.response);
//       dispatch({ type: ADD_TEACHER_FAIL, payload: err.response });
//     });
//  }
