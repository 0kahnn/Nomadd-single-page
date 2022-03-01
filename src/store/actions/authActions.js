import axios from "axios";
import {
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";
import { returnErrors, clearErrors } from "./errorActions";
// import { loadUser } from "./profileActions";

export const authUser = (data) => {
  // return;
  const { username, password } = data;
  const { navigate } = data;
  return (dispatch, getState) => {
    //dispatch user loading action

    dispatch({
      type: USER_LOADING,
    });
    const body = JSON.stringify({ username, password });

    axios({
      method: "post",
      url: "/signin",
      data: body,
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        dispatch(
          returnErrors(
            {
              data: "Logged in",
            },
            null,
            // error.response.status,
            "LOGIN_SUCCESS"
          )
        );

        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
        dispatch(clearErrors());

        // dispatch(loadUser());

        navigate("/");
      })
      .catch((error) => {
        console.error(error.response);

        if (error.response) {
          dispatch(
            returnErrors(
              error.response.data.message,
              error.response,

              "LOGIN_FAIL"
            )
          );
          dispatch({
            type: LOGIN_FAIL,
          });
        } else if (error.request) {
          dispatch(
            returnErrors(
              {
                data: "Something went wrong, please try again.",
              },
              null,

              "NETWORK_FAIL"
            )
          );
          dispatch({
            type: LOGIN_FAIL,
          });

          console.log(
            "The request was made but no response was received",
            error.request
          );
        } else {
          console.log(
            "Something happened in setting up the request that triggered an Error",
            error.message
          );
        }
      });

    // dispatch({ type: "AUTH_USER", loginData: loginData });
  };
};

export const logout = ({ navigate }) => {
  return (dispatch, getState) => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });

    navigate("/login");
  };
};

//setup token
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
};
