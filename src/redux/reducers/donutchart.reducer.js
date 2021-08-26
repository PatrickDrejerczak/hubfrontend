import * as types from "../constants/donutchart.constant";

const initialState = {
  completed: [],
  pending: [],
  loading: false,
};

const donutchartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_COMPLETED_REQUEST:
      return { ...state, loading: true };
    case types.GET_COMPLETED_SUCCESS:
      return { ...state, completed: payload, loading: false };
    case types.GET_COMPLETED_FAILURE:
      return { ...state, loading: false };

    case types.GET_PENDING_REQUEST:
      return { ...state, loading: true };
    case types.GET_PENDING_SUCCESS:
      return { ...state, pending: payload, loading: false };
    case types.GET_PENDING_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default donutchartReducer;
