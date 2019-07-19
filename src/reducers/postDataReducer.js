import {
  ADD_TEACHER_START,
  ADD_TEACHER_SUCCESS,
  ADD_TEACHER_FAIL,
  SESSION_SCORE_START,
  SESSION_SCORE_SUCCESS,
  SESSION_SCORE_FAIL
} from "../actions";

const initState = {
  teachers: [],
  added: false,
  error: "",
  addedSession: false,
  sessions: [],
  sessionError: ""
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

    case SESSION_SCORE_START:
      return {
        ...state
      };
    case SESSION_SCORE_SUCCESS:
      return {
        ...state,
        addedSession: true,
        sessions: [...state.sessions, ...action.payload]
      };
    case SESSION_SCORE_FAIL:
      return {
        ...state,
        addedSession: false,
        sessionError: action.payload
      };
    default:
      return state;
  }
}
