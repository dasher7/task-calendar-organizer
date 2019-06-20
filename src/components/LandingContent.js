import React from "react";
import { Box, Heading, Image, Paragraph } from "grommet";
import Footer from "./Footer";

export const LandingContent = props => (
  <>
    <Heading level="2">A Minimalistic Progressive Web App To Easily Manage Your Life</Heading>
    <Box direction="row" align="center" justify="center" height="large" wrap={true}>
      <Box justify="start" margin="medium" align="start">
        <Box margin={{ left: "small" }}>
          <Heading level="3">The Power Of Keep It Simple</Heading>
          <ul style={{ lineHeight: "2rem" }}>
            {/*TODO: i should use a box here*/}
            <Paragraph size="large">Manage Your Daily Tasks With No Strees</Paragraph>
            <Paragraph size="large">Copy Whatever You Want In Your Personal Clipboard</Paragraph>
            <Paragraph size="large">Calculate Very Complex Sum and Convert Your Huge Amount Of Bitcoin</Paragraph>
            <Paragraph size="large">Manage Your Money Avoiding To Spend Few Of Them</Paragraph>
          </ul>
        </Box>
      </Box>
      {/** TODO: on smaller screen this image should not be rendered */}
      <Box direction="row" margin="medium">
        <Image fit="contain" src="https://joplinapp.org/images/AllClients.jpg" />
      </Box>
      <Footer />
    </Box>
  </>
);

export default LandingContent;
