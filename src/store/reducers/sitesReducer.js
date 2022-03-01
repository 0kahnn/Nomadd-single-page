import {
  SITES_LOADING,
  SITES_LOADED,
  SITES_LOADING_FAIL,
  SET_SELECTED_SITE,
  STATISTICS_LOADED,
  SET_DATES,
} from "../actions/types";

const initState = {
  token: localStorage.getItem("token"),
  filterList: [
    "Rail RPM",
    "Rail Current",
    "Brush RPM",
    "Brush Current",
    "Status",
  ],
  selectedSite: "",
  startDate: "",
  endDate: "",
  sitesData: [],
  siteStatistics: [],
  isLoading: false,
};

const sitesReducer = (state = initState, action) => {
  switch (action.type) {
    case SITES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SITES_LOADED:
      return {
        ...state,
        isLoading: false,
        sitesData: action.payload,
      };
    case SITES_LOADING_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case SET_SELECTED_SITE:
      return {
        ...state,
        selectedSite: action.payload,
      };
    case SET_DATES:
      return {
        ...state,
        selectedSite: action.payload.fromDate,
        startDate: action.payload.toDate,
        endDate: "",
      };

    case STATISTICS_LOADED:
      return {
        ...state,
        siteStatistics: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default sitesReducer;
