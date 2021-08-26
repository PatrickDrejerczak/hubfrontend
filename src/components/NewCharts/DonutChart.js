import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import donutchartActions from "../../redux/actions/donutchart.action";
import { useDispatch, useSelector } from "react-redux";

function DonutChart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(donutchartActions.getCompleted());
  }, [dispatch]);

  useEffect(() => {
    dispatch(donutchartActions.getPending());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const completed = state.donutchartReducer.completed;
  const pending = state.donutchartReducer.pending;

  const data = {
    labels: ["Total Completed Tickets", "Total Pending Tickets"],
    datasets: [
      {
        label: "Ratio of completed/pending tickets",
        data: [completed, pending],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="header">
        <h1 className="title">Pending vs. Complete Tickets</h1>
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default DonutChart;
