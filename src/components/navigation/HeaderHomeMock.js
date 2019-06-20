import React from "react";
import { Anchor, Box, Clock, DropButton, Heading } from "grommet";
import { Tasks } from "grommet-icons";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../firebase/context";
import { compose } from "recompose";
import * as ROUTES from "../../utils/routes";
import { useStoreActions, useStoreState } from "easy-peasy";

export const HeaderHomeMock = props => {
  const authUser = useStoreState(store => store.authUser);
  const removeAddUser = useStoreActions(actions => actions.removeUser);

  const handleLogOut = () => {
    props.firebase.doSignOut();
    removeAddUser(authUser);
    props.history.push(ROUTES.LANDING);
  };

  return (
    <Box direction="row" justify="between" align="center">
      <Box direction="row" justify="center" align="center">
        <Link to={ROUTES.HOME}>
          <Tasks color="black" size="large" />
        </Link>
        <Heading level="2" style={{ margin: "2rem" }}>
          It's Friday, 06/13/2019
        </Heading>
        <Clock size="large" type="digital" />
      </Box>

      <Box direction="row" justify="center" align="center">
        <Heading level="2">Hello, Andrea</Heading>
        <DropButton
          dropAlign={{ top: "bottom", center: "center" }}
          dropContent={
            <Box pad="small">
              <Anchor
                label="Home"
                size="medium"
                margin={{ top: "small", bottom: "small" }}
                onClick={() => {
                  props.history.push(ROUTES.HOME);
                }}
              />
              <Anchor
                label="Profile"
                size="medium"
                margin={{ top: "small", bottom: "small" }}
                onClick={() => {
                  props.history.push(ROUTES.PROFILE);
                }}
              />
              <Anchor
                label="Stats"
                size="medium"
                margin={{ top: "small", bottom: "small" }}
                onClick={() => {
                  props.history.push(ROUTES.STATS);
                }}
              />
              <Anchor
                label="Settings"
                size="medium"
                margin={{ top: "small", bottom: "small" }}
                onClick={() => {
                  props.history.push(ROUTES.SETTINGS);
                }}
              />
              <Anchor
                label="Sign Out"
                size="medium"
                margin={{ top: "small", bottom: "small" }}
                onClick={handleLogOut}
              />
            </Box>
          }
        >
          {/**TODO: USE IMAGE FROM GROMMET-CONTROL */}
          <img
            style={{ borderRadius: "50%", marginLeft: "2rem" }}
            src="https://miro.medium.com/fit/c/64/64/1*NE21mTcETny4mS2X2esEgQ.jpeg"
            alt="propic"
          />
        </DropButton>
      </Box>
    </Box>
  );
};

//TODO: refactore the way componenets are wrapped via HOC

export const HeaderHomeMockWrapped = compose(
  withRouter,
  withFirebase
)(HeaderHomeMock);

export default withRouter(withFirebase(HeaderHomeMock));
