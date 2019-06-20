import React from "react";
import { Box, Heading } from "grommet";
// eslint-disable-next-line no-unused-vars
import TaskList from "./task/TaskList";
import CalendarWidget from "./widget/CalendarWidget";
import WalletWidget from "./widget/WalletWidget";
// eslint-disable-next-line no-unused-vars
import Toolbar from "./widget/Toolbar";

//TODO: refactor the grid to better adapt at the content

export const Home = props => (
  <Box direction="row" margin="small" justify="center" gap="medium" wrap={true}>
    <Box width="25vw" gap="small">
      <Box
        height="60vh"
        overflow="hidden"
        elevation="medium"
        pad="small"
        round="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <Heading level="2">Calendar</Heading>
        <Box align="center">
          <CalendarWidget />
        </Box>
      </Box>
      <Box
        height="50vh"
        elevation="medium"
        pad="small"
        round="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        <Heading level="2">Wallet</Heading>
        <Box align="center">
          <WalletWidget />
        </Box>
      </Box>
    </Box>
    <Box
      width="65vw"
      elevation="medium"
      round="small"
      pad="small"
      border={{ color: "border", size: "small", side: "all" }}
    >
      <Heading level="2" margin={{ left: "small" }}>
        Dashboard
      </Heading>
      <Box margin={{ left: "medium" }}>
        <Toolbar />
      </Box>
      <Box margin={{ left: "medium" }} overflow="auto">
        <TaskList />
      </Box>
    </Box>
  </Box>
);

export default Home;

// rows = { ["medium", "medium"]}
// columns = { ["medium", "auto"]}

// <Box wrap={true}>
//   <Grid
//     rows={["50vh", "50vh"]}
//     columns={["medium", "auto"]}
//     areas={[
//       { name: "calendar", start: [0, 0], end: [0, 0] },
//       { name: "wallet", start: [0, 1], end: [0, 1] },
//       { name: "tasklist", start: [1, 0], end: [1, 1] }
//     ]}
//     gap="medium"
//   >
//     <Box gridArea="calendar" animation="slideRight" elevation="medium" round="medium" overflow="hidden">
//       <h2>Calendar</h2>
//       <CalendarWidget />
//     </Box>
//     <Box gridArea="wallet" margin={{ top: "small" }} elevation="medium" round="medium" pad="medium">
//       <h2>Wallet</h2>
//       <WalletWidget />
//     </Box>
//     <Box
//       gridArea="tasklist"
//       margin={{ left: "small" }}
//       elevation="medium"
//       round="medium"
//       pad="medium"
//       style={{ zIndex: 1 }}
//     >
//       <h2 style={{ marginLeft: 0 }}>Dashboard</h2>
//       <Toolbar />
//       <TaskList />
//     </Box>
//   </Grid>
// </Box>
