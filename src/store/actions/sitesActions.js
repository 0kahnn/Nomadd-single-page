import axios from "axios";
import {
  SITES_LOADING,
  SITES_LOADED,
  SET_SELECTED_SITE,
  STATISTICS_LOADED,
  SITES_LOADING_FAIL,
  SET_DATES,
} from "./types";
export const loadSitesData = (data) => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: SITES_LOADING,
  });
  const header = {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios({
    method: "get",
    url: "sitesData/sites",

    headers: header,
  })
    .then((response) => {
      dispatch({
        type: SITES_LOADED,
        payload: response.data,
      });
      // data.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
export const setGData = (data) => (dispatch, getState) => {
  const { id, dates } = data;
  console.log("setGdata called", data);
  dispatch({
    type: SET_SELECTED_SITE,
    payload: id,
  });

  dispatch({
    type: SET_DATES,
    payload: { fromDate: dates.fromDate, toDate: dates.toDate },
  });
};

export const viewSite = (data) => (dispatch, getState) => {
  const { navigate, id } = data;

  dispatch({
    type: SET_SELECTED_SITE,
    payload: id,
  });

  navigate(`/${id}`);

  return;
  const token = localStorage.getItem("token");
  dispatch({
    type: SITES_LOADING,
  });
  const header = {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios({
    method: "get",
    url: "sitesData/sites",

    headers: header,
  })
    .then((response) => {
      console.log(response, "response");
      dispatch({
        type: SITES_LOADED,
        payload: response.data,
      });
      // data.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const searchSiteByDate = (data) => (dispatch) => {
  const { dates, id, navigate } = data;

  console.log("searchSiteByDate", data);
  dispatch({
    type: SET_DATES,
    payload: { fromDate: dates.fromDate, toDate: dates.toDate },
  });

  dispatch({
    type: SITES_LOADING,
  });
  const header = {
    "content-type": "application/json",
  };
  axios({
    method: "get",
    url: `/statistics/site/${id}/${dates.fromDate}/${dates.toDate}`,
    headers: header,
  })
    .then((response) => {
      console.log(response.data);

      dispatch({
        type: STATISTICS_LOADED,
        payload: response.data,
      });
      // navigate(`/${selectedSite}/view`);
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SITES_LOADING_FAIL,
      });
    });
};

export const getTimelineBySiteName = (data) => (dispatch) => {
  console.log("data");
};
