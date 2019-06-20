import React from "react";
import { Anchor, Box, Heading, Text } from "grommet";

//I CAN USE ROUTE TO MANAGE THE CHANGING OF THE RIGHT PART OF THE PAGE

export const SettingsPage = props => (
  <>
    <Box direction="row" wrap={true} justify="center">
      <Box
        direction="column"
        width="25vw"
        height="45vh"
        margin={{ right: "small" }}
        elevation="medium"
        round="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        {/*settings*/}
        <Box margin="small">
          <Heading level="2">Setting</Heading>
          <Box margin={{ left: "medium" }}>
            <Anchor label="Profile" color="black" margin={{ top: "small", bottom: "small" }} />
            <Anchor label="Privacy" color="black" margin={{ top: "small", bottom: "small" }} />
            <Anchor label="Theme" color="black" margin={{ top: "small", bottom: "small" }} />
            <Anchor label="Setting" color="black" margin={{ top: "small", bottom: "small" }} />
          </Box>
        </Box>
      </Box>
      <Box
        direction="column"
        width="65vw"
        elevation="medium"
        round="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        {/*details*/}
        <Box margin="small">
          <Heading level="2">Profile details</Heading>
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Name:
            </Text>
            <Text>Andrea</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Surname:
            </Text>
            <Text>Bredice</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Username:
            </Text>
            <Text>andreabredice</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Picture:
            </Text>
            <Anchor>change profile picture</Anchor>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Age:
            </Text>
            <Text>25</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Date of birth:
            </Text>
            <Text>08/07/1993</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Email:
            </Text>
            <Text>bredice@bredice.it</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Password:
            </Text>
            <Anchor>View password</Anchor>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Password:
            </Text>
            <Anchor>change password</Anchor>
          </Box>
          {/* end row for display an info */}
        </Box>
      </Box>
    </Box>
  </>
);

export default SettingsPage;
