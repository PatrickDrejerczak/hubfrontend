import { combineReducers } from "redux";
import donutchartReducer from "./donutchart.reducer";
import ticketReducer from "./ticket.reducer";

export default combineReducers({
  donutchartReducer: donutchartReducer,
  ticketReducer: ticketReducer,
});
