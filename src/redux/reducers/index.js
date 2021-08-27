import { combineReducers } from "redux";
import barchartReducer from "./barchart.reducer";
import donutchartReducer from "./donutchart.reducer";
import ticketReducer from "./ticket.reducer";

export default combineReducers({
  donutchartReducer: donutchartReducer,
  ticketReducer: ticketReducer,
  barchartReducer: barchartReducer,
});
