import React, { useState } from "react";
import { Button, Box, Form, FormField, Text } from "grommet";
import * as ROUTES from "../../utils/routes";
import { withFirebase } from "../../firebase/context";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

export const SignUpForm = props => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async event => {
    event.preventDefault();
    try {
      const user = {
        name: name,
        surname: surname,
        email: email
      };
      const createdUser = await props.firebase.doCreateUserWithEmailAndPassword(email, password);
      // eslint-disable-next-line no-unused-vars
      const savedUser = await props.firebase.user(createdUser.user.uid).set(user);
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      if (createdUser) props.history.push(ROUTES.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormField name="name" label="Name" value={name} onChange={event => setName(event.target.value)} />
      <FormField name="surname" label="Surname" value={surname} onChange={event => setSurname(event.target.value)} />
      <FormField name="email" label="Email" value={email} onChange={event => setEmail(event.target.value)} />
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

export const SignUpFormWrapped = compose(
  withRouter,
  withFirebase
)(SignUpForm);

export default SignUpForm;
