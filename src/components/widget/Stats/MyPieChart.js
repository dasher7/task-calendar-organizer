import React from "react";
import { PieChart } from "grommet-controls/chartjs";

export const MyPieChart = props => (
  <>
    <PieChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [-93, 45, 35, -33, 8, 88, -62]
          }
        ]
      }}
      options={{
        legend: {
          display: false
        },
        themedData: true
      }}
    />
  </>
);

export default MyPieChart;
