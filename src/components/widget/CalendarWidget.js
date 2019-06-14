import React from "react";
import { Box, Calendar } from "grommet";

export const CalendarWidget = props => (
  <Box>
    <Calendar size="medium" date={new Date().toISOString()} />
  </Box>
);

export default CalendarWidget;
