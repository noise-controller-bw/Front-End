import axios from "axios";

export const LOGIN_START = "LOGIN_START";

export const DATA_FETCH_START = "LOGIN_START";
export const DATA_FETCH_SUCCESS = "LOGIN_SUCCESS";
export const DATA_FETCH_FAIL = "LOGIN_FAIL";

export const ADD_TEACHER_START = "ADD_TEACHER_START";
export const ADD_TEACHER_SUCCESS = "ADD_TEACHER_SUCCESS";
export const ADD_TEACHER_FAIL = "ADD_TEACHER_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://noise-controller-buildweek.herokuapp.com/login", creds)
    .then(res => localStorage.setItem("token", res.data))
    .catch(err => console.error(err));
};

export const getData = () => dispatch => {
  dispatch({ type: DATA_FETCH_START });
  axios
    .get("https://noise-controller-buildweek.herokuappp.com/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: DATA_FETCH_SUCCESS, payload: res.data });
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
    .post("https://noise-controller-buildweek.herokuapp.com/users", teacher, {
      headers: { Authorization: localStorage.getItem("token") }
    })
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
