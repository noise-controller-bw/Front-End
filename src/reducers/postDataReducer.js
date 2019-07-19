import {
    ADD_TEACHER_START,
    ADD_TEACHER_SUCCESS,
    ADD_TEACHER_FAIL
  } from "../actions";
  
  const initState = {
    teachers: [],
    added: false,
    error: ""
  };
  
  export default function postDataReducer(state = initState, action) {
    switch (action.type) {
      case ADD_TEACHER_START:
        return {
          ...state
        };
      case ADD_TEACHER_SUCCESS:
        return {
          ...state,
          added: true,
          teachers: [...state.teachers, ...action.payload]
        };
      case ADD_TEACHER_FAIL:
        return {
          ...state,
          added: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  