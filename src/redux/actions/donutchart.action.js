import { toast } from "react-toastify";
import * as types from "../constants/donutchart.constant";
import api from "../../apiService";

const getPending = () => async (dispatch) => {
  dispatch({ type: types.GET_PENDING_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charts/donut`;
    const data = await api.get(url);
    console.log("this data", data);
    dispatch({
      type: types.GET_PENDING_SUCCESS,
      payload: data.data.completed,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_PENDING_FAILURE, payload: error });
  }
};

const getCompleted = () => async (dispatch) => {
  dispatch({ type: types.GET_COMPLETED_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charts/donut`;
    const data = await api.get(url);
    console.log("this data", data);
    dispatch({
      type: types.GET_COMPLETED_SUCCESS,
      payload: data.data.pending,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_COMPLETED_FAILURE, payload: error });
  }
};

const donutchartActions = { getPending, getCompleted };
export default donutchartActions;
