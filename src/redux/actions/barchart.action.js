import { toast } from "react-toastify";
import * as types from "../constants/barchart.constanst";
import api from "../../apiService";

const getReceive = () => async (dispatch) => {
  dispatch({ type: types.GET_RECEIVE_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charts/bar`;
    const data = await api.get(url);
    console.log("this data", data);
    dispatch({
      type: types.GET_RECEIVE_SUCCESS,
      payload: data.data.receive,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_RECEIVE_FAILURE, payload: error });
  }
};

const getSend = () => async (dispatch) => {
  dispatch({ type: types.GET_SEND_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charts/bar`;
    const data = await api.get(url);
    console.log("this data", data);
    dispatch({
      type: types.GET_SEND_SUCCESS,
      payload: data.data.send,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_SEND_FAILURE, payload: error });
  }
};

const barchartActions = { getReceive, getSend };
export default barchartActions;
