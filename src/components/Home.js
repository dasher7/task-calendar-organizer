import React from "react";
import { Box, Grid } from "grommet";
import TaskList from "./task/TaskList";
import CalendarWidget from "./widget/CalendarWidget";
import WalletWidget from "./widget/WalletWidget";
// eslint-disable-next-line no-unused-vars
import Toolbar from "./widget/Toolbar";

export const Home = props => (
  <Grid
    rows={["50vh", "50vh"]}
    columns={["medium", "auto"]}
    areas={[
      { name: "calendar", start: [0, 0], end: [0, 0] },
      { name: "wallet", start: [0, 1], end: [0, 1] },
      { name: "tasklist", start: [1, 0], end: [1, 1] }
    ]}
    gap="medium"
  >
    <Box gridArea="calendar" animation="slideRight" elevation="medium" round="medium" overflow="hidden">
      <h2>Calendar</h2>
      <CalendarWidget />
    </Box>
    <Box gridArea="wallet" margin={{ top: "small" }} elevation="medium" round="medium" pad="medium">
      <h2>Wallet</h2>
      <WalletWidget />
    </Box>
    <Box gridArea="tasklist" margin={{ left: "small" }} elevation="medium" round="medium" pad="medium">
      <h2 style={{ marginLeft: 0 }}>Dashboard</h2>
      <Toolbar />
      <TaskList />
    </Box>
  </Grid>
);

export default Home;

// rows = { ["medium", "medium"]}
// columns = { ["medium", "auto"]}
