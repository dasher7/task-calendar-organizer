import React, { useState } from "react";
import { Box, Button, Form, FormField, Text, Select } from "grommet";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../firebase/context";
import * as ROUTES from "../../utils/routes";

const SignUpFormExtended = props => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async event => {
    event.preventDefault();
    const user = {
      name: name,
      surname: surname,
      dateOfBirth: ` ${day} / ${month} / ${year} `,
      profilePicture: profilePicture,
      email: email
    };
    try {
      const singedUser = await props.firebase.doCreateUserWithEmailAndPassword(email, password);
      const savedUser = await props.firebase.user(singedUser.user.uid).set(user);
      setName("");
      setSurname("");
      setDay("");
      setMonth("");
      setYear("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      if (singedUser) props.history.push(ROUTES.HOME);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormField name="name" label="Name" value={name} onChange={event => setName(event.target.value)} />
      <FormField name="surname" label="Surname" value={surname} onChange={event => setSurname(event.target.value)} />
      <FormField label="Date of birth">
        <Select placeholder="day" options={["01", "02", "03", "04", "05"]} />
        <Select placeholder="month" options={["01", "02", "03", "04", "05"]} />
        <Select placeholder="year" options={["01", "02", "03", "04", "05"]} />
      </FormField>
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

export const SignUpFormExtendedWrapped = compose(
  withRouter,
  withFirebase
)(SignUpFormExtended);

export default SignUpFormExtended;
