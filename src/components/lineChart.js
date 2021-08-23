import React from "react";
import { Line } from "react-chartjs-2";
// import charity from "../../charity.json";

const data = {
  labels: ["4 weeks ago", "3 weeks ago", "2 weeks ago", "1 week ago"],
  datasets: [
    {
      label: "# of new requests over time",
      data: [12, 19, 3, 5],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
