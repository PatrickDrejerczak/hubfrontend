import React from "react";
import LineChart from "./components/lineChart";
import data from "./components/lineChart";

const App = () => {
  return (
    <div>
      <LineChart data={data} />
    </div>
  );
};

export default App;
