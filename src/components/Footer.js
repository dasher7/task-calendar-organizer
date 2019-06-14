import React from "react";
import { Box } from "grommet";

export const Footer = props => (
  <Box direction="row" justify="center" align="center">
    <p style={{ fontSize: "12px" }}>
      Hosted with
      <span role="img" aria-label="heart">
        ❤️
      </span>
      on GitHub, &copy; Andrea Bredice, 2019
    </p>
  </Box>
);

export default Footer;
