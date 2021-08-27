import * as types from "../constants/barchart.constanst";

const initialState = {
  receive: [],
  send: [],
  loading: false,
};

const barchartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_RECEIVE_REQUEST:
      return { ...state, loading: true };
    case types.GET_RECEIVE_SUCCESS:
      return { ...state, receive: payload, loading: false };
    case types.GET_RECEIVE_FAILURE:
      return { ...state, loading: false };

    case types.GET_SEND_REQUEST:
      return { ...state, loading: true };
    case types.GET_SEND_SUCCESS:
      return { ...state, send: payload, loading: false };
    case types.GET_SEND_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default barchartReducer;
