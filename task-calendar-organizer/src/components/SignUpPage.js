import React from "react";
import SignUpForm from "./SignUpForm";
import { Grid } from "grommet";

export const SignUpPage = props => (
  <Grid margin="medium" justifyContent="center" alignSelf="center">
    <h1>Sign Up</h1>
    <SignUpForm />
  </Grid>
);

export default SignUpPage;
