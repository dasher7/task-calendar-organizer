import React from "react";
import { Box, Button, Text } from "grommet";

export const TestTask = () => (
  <>
    <Box margin={{ top: "small", bottom: "small" }} pad="small">
      <Box direction="row">
        <Text size="xlarge" weight="bold">
          Remember to finish this awesome PWA
        </Text>
      </Box>
      <Box direction="row" align="center" justify="start">
        <Box margin={{ bottom: "small" }} align="center">
          <Text weight={600}>11</Text>
          <Text>AM</Text>
        </Box>
        <Box margin="small">
          <Box direction="row">
            <Text>I wish I can say more on this task, but i can't</Text>
          </Box>
          <Box direction="row" margin={{ top: "small", bottom: "small" }}>
            <Button margin={{ right: "small" }} label="Complete" color="status-ok" />
            <Button label="Delete" color="status-error" />
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default TestTask;
