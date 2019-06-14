import React from "react";
import LandingContent from "./LandingContent";
import SignUpPage from "./login/SignUpPage";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../utils/routes";

export const MainContent = props => (
  <>
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingContent} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={Home} />
    </Switch>
  </>
);

export default MainContent;
