import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HeaderHomeMock from "./HeaderHomeMock";
import * as ROUTES from "../../utils/routes";

export const HeaderSelector = props => (
  <>
    <Switch>
      <Route path={ROUTES.LANDING} componenet={Header} />
      <Route path={ROUTES.HOME} componenet={HeaderHomeMock} />
    </Switch>
  </>
);

export default HeaderSelector;
