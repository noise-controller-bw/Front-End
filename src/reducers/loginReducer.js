import {
    LOGIN_START,
    DATA_FETCH_START,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_FAIL
  } from "../actions";
  
  const initState = {
    loggingIn: false,
    users: [],
    fetchingData: false,
    error: null
  };
  
  export default function loginReducer(state = initState, action) {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case DATA_FETCH_START:
        return {
          ...state,
          fetchingData: true
        };
      case DATA_FETCH_SUCCESS:
        return {
          ...state,
          users: [...state.users, ...action.payload]
        };
      case DATA_FETCH_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  