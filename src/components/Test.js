import React from "react";
import { Box, Heading, Text } from "grommet";
// eslint-disable-next-line no-unused-vars
import { TaskList } from "./task/TaskList";
import CalendarWidget from "./widget/CalendarWidget";
import { WalletWidget } from "./widget/WalletWidget";
import { TestTask } from "./task/TestTask";
import { Toolbar } from "./widget/Toolbar";

export const Test = props => (
  <Box direction="row" height="100vh" margin="small" gap="medium" wrap={true}>
    <Box width="25vw" gap="small">
      <Box height="50vh" overflow="hidden" elevation="medium" pad="small" round="small">
        <Heading level="2">Calendar</Heading>
        <Box align="center">
          <CalendarWidget />
          <Text margin={{ top: "medium" }}>You have 10 ToDo's</Text>
        </Box>
      </Box>
      <Box height="50vh" elevation="medium" pad="small" round="small">
        <Heading level="2">Wallet</Heading>
        <WalletWidget />
      </Box>
    </Box>
    <Box width="65vw" elevation="medium" round="small" pad="small" overflow="auto">
      <Heading level="2" margin={{ left: "small" }}>
        Dashboard
      </Heading>
      <Box margin={{ left: "medium" }}>
        <Toolbar />
      </Box>
      <Box margin={{ left: "medium" }} overflow="auto">
        <TestTask />
        <TestTask />
        <TestTask />
      </Box>
    </Box>
  </Box>
);

export default Test;
