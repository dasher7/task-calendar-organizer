import React from "react";
import { Box, Text, TextArea } from "grommet";
import { FormClose } from "grommet-icons";

export const ClipboardWidget = props => (
  <>
    <Box height="medium" width="medium" pad="medium">
      <Box direction="row" justify="between">
        <Text>Your personal clipboard:</Text>
        <FormClose />
      </Box>
      <TextArea plain={true} fill={true} />
    </Box>
  </>
);

export default ClipboardWidget;
