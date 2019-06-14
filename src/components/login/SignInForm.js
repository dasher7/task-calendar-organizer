import React, { Component } from "react";
import { Box, Button, Form, FormField } from "grommet";
import * as ROUTE from "../../utils/routes";

export const SignInForm = props => {
  return (
    <Box margin="medium">
      <Form>
        <FormField label="email" />
        <FormField label="password" />
        <Button type="submit" label="Sign In" margin="small" primary />
        <Button label="Close" />
      </Form>
    </Box>
  );
};

export default SignInForm;
