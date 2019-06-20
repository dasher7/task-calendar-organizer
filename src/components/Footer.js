import React from "react";
import { Box, Anchor, Text } from "grommet";

export const Footer = props => (
  <>
    <Box>
      <Box direction="row" align="center" justify="center">
        <Text size="small">
          Made with
          <span role="img" aria-label="heart">
            ❤️
          </span>
          thanks to <Anchor label="Grommet" /> &copy;
        </Text>
      </Box>
      <Box direction="row">
        <Text size="small">
          Andrea Bredice, 2019 &copy; find me on <Anchor label="andreabredice.com" />
        </Text>
      </Box>
    </Box>
  </>
);

export default Footer;
