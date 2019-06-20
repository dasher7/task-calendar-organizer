import React from "react";
import { Box, Heading, Text } from "grommet";

export const ProfilePage = props => (
  <>
    <Heading level="2">Your Awesome Profile</Heading>
    <Box direction="row" gap="medium" justify="center">
      <Box height="25vh" width="25vw" round="small" elevation="medium">
        <Text>Text #1</Text>
        <Text>Text #2</Text>
        <Text>Text #3</Text>
        <Text>Text #4</Text>
      </Box>
      <Box height="65vh" width="65vw" round="small" elevation="medium">
        <Text>Text #1</Text>
        <Text>Text #2</Text>
        <Text>Text #3</Text>
        <Text>Text #4</Text>
        <Text>Text #5</Text>
        <Text>Text #6</Text>
        <Text>Text #7</Text>
      </Box>
    </Box>
  </>
);

export default ProfilePage;
