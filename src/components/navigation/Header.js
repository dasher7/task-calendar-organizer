/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Form, FormField, Layer, Text } from "grommet";
import { Tasks } from "grommet-icons";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";
import { withFirebase } from "../../firebase/context";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

export const Header = props => {
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleOnSubmit = async event => {
    event.preventDefault();
    try {
      const singedUser = await props.firebase.doSignInWithEmailAndPassword(email, password);
      console.log(singedUser);
      setEmail("");
      setPassword("");
      setShowModal(false);
      if (singedUser) props.history.push(ROUTES.HOME);
    } catch (error) {
      console.log(email);
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <Box direction="row" justify="between" align="center">
        <Box direction="row" justify="start" align="center">
          <Link to={ROUTES.LANDING}>
            <Tasks size="large" color="black" />
          </Link>
          <h1 style={{ margin: "2rem" }}>ToDo YourSelf</h1>
        </Box>
        <Box direction="row" align="center">
          <Link to={ROUTES.SIGN_UP}>
            <Button label="Sign Up" margin="small" primary />
          </Link>
          <Button label="Sign In" onClick={() => setShowModal(true)} />
        </Box>
      </Box>

      {/* HANDLING SIGN IN FORM */}
      {showModal && (
        <Layer>
          <Box margin="medium">
            <Form onSubmit={handleOnSubmit}>
              <FormField
                name="email"
                label="email"
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <FormField
                name="password"
                label="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              {error && (
                <Box direction="row" margin={{ top: "small", bottom: "small" }}>
                  <Text color="status-error">{error}</Text>
                </Box>
              )}
              <Button type="submit" label="Sign In" margin="small" primary />
              <Button label="Close" onClick={() => setShowModal(false)} />
            </Form>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default Header;
