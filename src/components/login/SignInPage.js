import React from "react";
import { Layer } from "grommet";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../firebase/index";
import SignInForm from "./SignInForm";

export const SingInPage = ({ show }) => {
  return <Layer margin="medium">{show && <SignInFormWrapper />}</Layer>;
};

//TODO: refactor the way componenet are wrapped via HOC

const SignInFormWrapper = compose(
  withRouter,
  withFirebase
)(SignInForm);

export default SingInPage;
