import React from "react";
import { Box } from "grommet";
import SignUpForm from "./SignUpForm";
import {compose} from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../firebase/context";

export const SingUpPage = props => {
  return (
    <Box direction="row" justify="center" animation="fadeIn">
      <Box height="large" justify="center">
        <SignUpFormWrapper />
      </Box>
    </Box>
  );
};

const SignUpFormWrapper = compose(
  withRouter,
  withFirebase
)(SignUpForm);

export default SingUpPage;
