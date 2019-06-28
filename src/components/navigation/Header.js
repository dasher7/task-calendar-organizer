/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Form, FormField, Heading, Layer, Text } from "grommet";
import { Tasks } from "grommet-icons";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";
import { withFirebase } from "../../firebase/context";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { useStoreState, useStoreActions } from "easy-peasy";
import withResponsiveContext from "../hoc/withResponsiveContext";

export const Header = props => {
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  //TODO: why is this async?  BECAUSE I USE AWAIT IN THE FUNCTION, MORON
  const handleOnSubmit = async event => {
    event.preventDefault();
    try {
      const singedUser = await props.firebase.doSignInWithEmailAndPassword(email, password);
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

  console.log(props.size);

  return (
    <>
      <Box direction="row" justify="between" align="center">
        <Box direction="row" justify="start" align="center">
          <Link to={ROUTES.LANDING}>
            <Tasks size="large" color="black" />
          </Link>
          <Heading level={props.size === "small" ? "4" : "2"} style={{ margin: "2rem" }}>
            Simplify Me
          </Heading>
        </Box>
        <Box direction="row" align="center">
          <Link to={ROUTES.SIGN_UP}>
            <Button label="Sign Up" margin="small" primary />
          </Link>
          <Button label="Sign In" onClick={() => setShowModal(true)} />
        </Box>
      </Box>

      {/* TODO: I can move all of the things into its seperate component
          HANDLING SIGN IN FORM */}
      {showModal && (
        <Layer position="center" responsive={false} onClickOutside={() => setShowModal(false)}>
          <Box margin="medium" wrap={true}>
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

//TODO: refactore the way components are wrapped via HOC

export const HeaderWrapped = compose(
  withRouter,
  withFirebase,
  withResponsiveContext
)(Header);

export default Header;
