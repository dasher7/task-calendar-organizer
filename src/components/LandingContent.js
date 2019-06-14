import React from "react";
import { Box, Image } from "grommet";

export const LandingContent = props => (
  <>
    <h2>A Minimalistic Progressive Web App To Easily Manage Your Life</h2>
    <Box direction="row" align="center" justify="center" height="large">
      <Box justify="start" margin="medium" align="start">
        <div style={{ fontSize: "22px" }}>
          <h3>The Power Of Keep It Simple</h3>
          <ul style={{ lineHeight: "2rem" }}>
            <li>Manage Your Daily Tasks With No Strees</li>
            <li>Copy Whatever You Want In Your Personal Clipboard</li>
            <li>Calculate Very Complex Sum and Convert Your Huge Amount Of Bitcoin</li>
            <li>Manage Your Money Avoiding To Spend Few Of Them</li>
          </ul>
        </div>
      </Box>
      <Box direction="row" margin="medium">
        <Image fit="contain" src="https://joplinapp.org/images/AllClients.jpg" />
      </Box>
    </Box>
  </>
);

export default LandingContent;
