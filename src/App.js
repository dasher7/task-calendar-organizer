/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "grommet";
import Header from "./components/navigation/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HeaderHomeMock from "./components/navigation/HeaderHomeMock";
import HeaderSelector from "./components/navigation/HeaderSelector";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./firebase/context";

function App() {
  return (
    <Box pad="small" margin="medium">
      <HeaderHomeMock />
      {/* <HeaderWrapped /> */}
      <MainContent />
      {/* <Footer /> */}
    </Box>
  );
}

const HeaderWrapped = compose(
  withRouter,
  withFirebase
)(Header);

export default App;
