import React, { Component } from "react";
import { Box, Button, Form, FormField } from "grommet";

export class SignUpForm extends Component {
  render() {
    return (
      <Box
        direction="row"
        height="large"
        width="medium"
        pad="small"
        align="center"
        animation="fadeIn"
      >
        <Form>
          <FormField
            type="text"
            name="name"
            label="name"
            placeholder="insert name"
          />
          <FormField
            type="text"
            name="surname"
            label="surname"
            placeholder="insert surname"
          />
          <FormField
            type="password"
            name="password"
            label="password"
            placeholder="insert passowrd"
          />
          <FormField
            type="password"
            name="password confirmation"
            label="password confirmation"
            placeholder="insert passowrd again"
          />
          <Button type="submit" label="Sign Up" primary />
        </Form>
      </Box>
    );
  }
}

export default SignUpForm;
