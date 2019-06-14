import React from "react";
import { Anchor, Box, Clock, DropButton } from "grommet";
import { Tasks } from "grommet-icons";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";

export const HeaderHomeMock = props => {
  const handleLogOut = async () => {
    alert("1");
    //props.firebase.doSignOut();
  };

  return (
    <Box direction="row" justify="between" align="center">
      <Box direction="row" justify="center" align="center">
        <Link to={ROUTES.HOME}>
          <Tasks color="black" size="large" />
        </Link>
        <h2 style={{ margin: "2rem" }}>It's Friday, 06/13/2019</h2>
        <Clock size="large" type="digital" />
      </Box>

      <Box direction="row" justify="center" align="center">
        <h2>Hello, Andrea</h2>
        <DropButton
          dropAlign={{ top: "bottom", center: "center" }}
          dropContent={
            <Box pad="small">
              <Anchor label="Profile" size="medium" margin={{ bottom: "medium" }} />
              <Anchor label="Setting" size="medium" margin={{ bottom: "medium" }} />
              <Anchor label="Stats" size="medium" margin={{ bottom: "medium" }} />
              <Anchor label="Sign Out" size="medium" onClick={handleLogOut} />
            </Box>
          }
        >
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

export default HeaderHomeMock;
