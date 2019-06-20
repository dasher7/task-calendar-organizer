import React from "react";
import { PolarChart } from "grommet-controls/chartjs";

export const MyPolarChart = props => (
  <>
    <PolarChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [94, 94, 97, 92, 96, 91, 99],
            opacity: 0.2
          }
        ]
      }}
      options={{
        themedData: true,
        legend: {
          position: "right"
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        }
      }}
    />
  </>
);

export default MyPolarChart;
