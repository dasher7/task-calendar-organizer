import React from "react";
import { Box, Heading, Tabs, Tab, Text } from "grommet";
import SignUpForm from "./SignUpForm";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../firebase/context";

export const SingUpPage = props => {
  return (
    <>
      <Heading level="2">A Minimalistic way to register</Heading>
      <Box direction="row" height="60vh" justify="center" align="center" animation="fadeIn">
        <Tabs>
          <Tab title="I am in a rush">
            <SignUpFormWrapper />
          </Tab>
          <Tab title="I am bored">
            <Text>Text</Text>
            <SignUpFormWrapper />
          </Tab>
        </Tabs>
      </Box>
    </>
  );
};

//TODO: Refactore the way components are wrapped via HOC

const SignUpFormWrapper = compose(
  withRouter,
  withFirebase
)(SignUpForm);

export default SingUpPage;
