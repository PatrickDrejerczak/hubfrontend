import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import barchartActions from "../../redux/actions/barchart.action";
import { useDispatch, useSelector } from "react-redux";

const BarChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barchartActions.getReceive());
  }, [dispatch]);

  useEffect(() => {
    dispatch(barchartActions.getSend());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const receive = state.barchartReducer.receive;
  const send = state.barchartReducer.send;

  const data = {
    labels: ["Three weeks ago", "Two weeks ago", "One weeks ago", "Latest"],

    datasets: [
      {
        backgroundColor: `rgba(220, 99, 135, 0.2)`,
        data: receive,
        label: "Total Receive",
      },
      {
        backgroundColor: `rgba(255, 99, 132, 1)`,
        data: send,
        label: "Total Send",
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

  return (
    <div>
      <div className="header">
        <h1 className="title">Weekly Tickets Trend</h1>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
