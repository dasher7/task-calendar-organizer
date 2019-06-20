import React from "react";
import { BarChart } from "grommet-controls/chartjs";

export const MyBarChart = props => (
  <>
    <BarChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [-40, 92, -44, -75, -65, -89, 78],
            borderWidth: 1
          },
          {
            label: "Dataset 2",
            data: [-78, -21, -43, 70, 11, -91, -63],
            borderWidth: 1
          }
        ]
      }}
    />
  </>
);

export default MyBarChart;
