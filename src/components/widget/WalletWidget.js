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
    <Box margin={{ top: "small", bottom: "small" }}>
      <Box direction="row" margin="small">
        <Square color="status-ok" />
        <Text margin={{ left: "small" }}>Earnings: [60% - 1215,21$]</Text>
      </Box>
      <Box direction="row" margin="small">
        <Square color="status-error" />
        <Text margin={{ left: "small" }}>Expanses: [22% - 208,91$]</Text>
      </Box>
      <Box direction="row" margin="small">
        <Square color="status-warning" />
        <Text margin={{ left: "small" }}>Extras: [8% - 71,47$]</Text>
      </Box>
    </Box>
  </Box>
);

export default WalletWidget;
