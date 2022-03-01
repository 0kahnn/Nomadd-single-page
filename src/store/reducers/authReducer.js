import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

const initState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : null,
  isLoading: false,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        // isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
