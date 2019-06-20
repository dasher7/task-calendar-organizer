import React from "react";
import { ResponsiveContext } from "grommet";

export const withResponsiveContext = Component => props => (
  <ResponsiveContext.Consumer>{size => <Component {...props} size={size} />}</ResponsiveContext.Consumer>
);

export default withResponsiveContext;
