import React from "react";
import { LineChart } from "grommet-controls/chartjs";

export const MyLineChart = props => (
  <>
    <LineChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [-40, 92, -44, -75, -65, -89, 78],
            fill: false
          },
          {
            label: "Dataset 2",
            data: [-78, -21, -43, 70, 11, -91, -63],
            fill: false
          }
        ]
      }}
    />
  </>
);

export default MyLineChart;
