import React, { useState } from "react";
import { Button, Box, Form, FormField, Text } from "grommet";
import * as ROUTES from "../../utils/routes";

export const SignUpForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async event => {
    event.preventDefault();
    try {
      const createdUser = await props.firebase.doCreateUserWithEmailAndPassword(email, password);
      const savedUser = await props.firebase.user(createdUser.user.uid).set({ email: createdUser.user.email });
      console.log(savedUser);
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      if (createdUser) props.history.push(ROUTES.HOME);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormField name="name" label="Email" value={email} onChange={event => setEmail(event.target.value)} />
      <FormField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <FormField
        name="passwordConfirmation"
        label="Password Confirmation"
        type="password"
        value={passwordConfirmation}
        onChange={event => {
          setPasswordConfirmation(event.target.value);
        }}
      />
      <Box direction="row" margin={{ top: "small", bottom: "small" }}>
        {error && <Text color="status-error">{error}</Text>}
      </Box>
      <Button type="submit" label="Sign Up" primary />
    </Form>
  );
};

export default SignUpForm;
