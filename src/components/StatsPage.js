import React from "react";
import { Box, Heading } from "grommet";
import MyBarChart from "./widget/Stats/MyBarChart";
import MyDoughnutChart from "./widget/Stats/MyDoughnutChart";
import MyLineChart from "./widget/Stats/MyLineChart";
import MyPieChart from "./widget/Stats/MyPieChart";
import MyPolarChart from "./widget/Stats/MyPolarChart";
import MyScatterChart from "./widget/Stats/MyScatterChart";

export const StatsPage = props => (
  <>
    <Heading level="2">Your Awesome Stats Page</Heading>
    <Box
      direction="row"
      pad="medium"
      margin="small"
      alignContent="center"
      gap="medium"
      justify={props.size === "medium" || "large" ? "between" : "center"}
      wrap={true}
      fill
    >
      <Box
        height="30vh"
        width="28vw"
        elevation="medium"
        round="small"
        pad="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <MyDoughnutChart />
      </Box>
      <Box
        height="30vh"
        width="28vw"
        elevation="medium"
        round="small"
        pad="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <MyPieChart />
      </Box>
      <Box
        height="30vh"
        width="28vw"
        elevation="medium"
        round="small"
        pad="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <MyPolarChart />
      </Box>
    </Box>
    <Box
      direction="row"
      pad="medium"
      margin="small"
      alignContent="center"
      gap="medium"
      wrap={true}
      justify={props.size === "medium" || "large" ? "between" : "center"}
      fill
    >
      <Box
        height="30vh"
        width="28vw"
        elevation="medium"
        round="small"
        pad="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <MyBarChart />
      </Box>
      <Box
        height="30vh"
        width="28vw"
        elevation="medium"
        round="small"
        pad="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <MyLineChart />
      </Box>
      <Box
        height="30vh"
        width="28vw"
        elevation="medium"
        round="small"
        pad="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <MyScatterChart />
      </Box>
    </Box>
  </>
);

export default StatsPage;
