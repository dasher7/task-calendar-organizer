import React from "react";
import { Box, Heading, Image, Paragraph } from "grommet";
import Footer from "./Footer";

export const LandingContent = props => (
  <>
    <Heading level="2">A Minimalistic Progressive Web App To Easily Manage Your Life</Heading>
    <Box direction="row" align="center" justify="center" wrap={true}>
      <Box justify="center" margin="medium" align="start">
        <Heading level="3">The Power Of Keep It Simple</Heading>
        <Paragraph size="large">Manage Your Daily Tasks With No Strees</Paragraph>
        <Paragraph size="large">Copy Whatever You Want In Your Personal Clipboard</Paragraph>
        <Paragraph size="large">Calculate Very Complex Sum and Convert Your Huge Amount Of Bitcoin</Paragraph>
        <Paragraph size="large">Manage Your Money Avoiding To Spend Few Of Them</Paragraph>
      </Box>
      <Box direction="row">
        <Image
          fit="contain"
          margin={{ top: props.size === "small" ? "small" : "large" }}
          src="https://joplinapp.org/images/AllClients.jpg"
        />
      </Box>
      <Footer />
    </Box>
  </>
);

export default LandingContent;
