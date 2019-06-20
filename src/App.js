/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Box } from "grommet";
import Header from "./components/navigation/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HeaderHomeMock from "./components/navigation/HeaderHomeMock";
import HeaderSelector from "./components/navigation/HeaderSelector";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./firebase/context";
import { useStoreState, useStoreActions } from "easy-peasy";

function App(props) {
  const authUser = useStoreState(store => store.authUser);
  const addAuthUser = useStoreActions(action => action.addUser);

  //TODO: IS IT CORRECT TO HAVE THIS METHOD HERE? GO GET MORE INFO

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged(auth => {
      if (auth) addAuthUser(auth);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pad="small" margin="medium">
      <HeaderSelector />
      <MainContent />
      {/* <Footer /> */}
    </Box>
  );
}
//TODO: refactor the way components are wrapped via HOC
//i can just wrap the component inside theri classes and then export/import as needed
const HeaderHomeMockWrapped = compose(
  withRouter,
  withFirebase
)(HeaderHomeMock);

const HeaderWrapped = compose(
  withRouter,
  withFirebase
)(Header);

export default withFirebase(App);
