/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { HeaderWrapped } from "./Header";
import HeaderHomeMock from "./HeaderHomeMock";
import * as ROUTES from "../../utils/routes";
import { useStoreState } from "easy-peasy";

//TODO: sometimes we se both components, like an overlay, find a better way to structure it. Maybe use just one component

export const HeaderSelector = props => {
  const authUser = useStoreState(store => store.authUser);
  const selectHeader = authUser[0] ? <HeaderHomeMock /> : <HeaderWrapped />;
  return <>{selectHeader}</>;
};

export default HeaderSelector;
