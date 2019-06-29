import React from "react";
import { Box, Tabs, Tab } from "grommet";
import { SignUpFormWrapped } from "./SignUpForm";
import { SignUpFormExtendedWrapped } from "./SignUpFormExtended";

export const SingUpPage = props => {
  return (
    <>
      <Box direction="column" height="60vh" justify="center" align="center" animation="fadeIn">
        <Tabs>
          <Tab title="I am in a rush">
            <SignUpFormWrapped />
          </Tab>
          <Tab title="I am bored">
            <SignUpFormExtendedWrapped />
          </Tab>
        </Tabs>
      </Box>
    </>
  );
};

export default SingUpPage;
