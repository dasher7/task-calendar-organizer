import React from "react";
import { Calendar } from "grommet";

//TODO: dimensions are no good, find a better a to structure it

export const CalendarWidget = props => <Calendar size="medium" date={new Date().toISOString()} />;

export default CalendarWidget;
