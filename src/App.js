import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProgressPage from "./pages/ProgressPage/ProgressPage";
import ChartPage from "./pages/ChartPage/ChartPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/progress" component={ProgressPage} />
        <Route exact path="/chartpage" component={ChartPage} />
      </Switch>
    </Router>
  );
}

export default App;
