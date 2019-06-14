import React from "react";
import { Box, Meter, Text } from "grommet";
import { Square } from "grommet-icons";

export const WalletWidget = props => (
  <Box>
    <Meter
      round={true}
      type="circle"
      values={[
        { value: 60, label: "incoming", color: "status-ok" },
        { value: 20, label: "expanses", color: "status-error" },
        { value: 15, label: "extra", color: "status-warning" }
      ]}
      aria-label="wallet"
    />
    <Box direction="row" margin="small">
      <Square color="status-ok" />
      <Text margin={{ left: "small" }}>Earnings</Text>
    </Box>
    <Box direction="row" margin="small">
      <Square color="status-error" />
      <Text margin={{ left: "small" }}>Expanses</Text>
    </Box>
    <Box direction="row" margin="small">
      <Square color="status-warning" />
      <Text margin={{ left: "small" }}>Extras</Text>
    </Box>
  </Box>
);

export default WalletWidget;
