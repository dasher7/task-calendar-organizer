import React from "react";
import LandingContent from "./LandingContent";
import SignUpPage from "./login/SignUpPage";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import SettingsPage from "./SettingsPage";
import ProfilePage from "./ProfilePage";
import StatsPage from "./StatsPage";
import * as ROUTES from "../utils/routes";
import Test from "./Test";

export const MainContent = props => (
  <>
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingContent} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SETTINGS} component={SettingsPage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.STATS} component={StatsPage} />
      <Route path={ROUTES.TEST} component={Test} />
    </Switch>
  </>
);

export default MainContent;
