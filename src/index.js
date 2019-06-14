import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Grommet, grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext, Firebase } from "./firebase/index";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./store/model";

//REDUX: when adding redux we have to create the store and wrap everything inside a <Provider store={store}> component

//GROMMET: i can add a const which is a global theme settings for Grommet, i am using the basic one for now

//FIREBASE: when we add firebase, we will wrap our app with our HOC component in order to have it available throughout the app

//REDUX WITH EASY-PEASY: wrap the whole application within <StoreProvide> to have Redux available everywhere we need in our app

const store = createStore(model);

ReactDOM.render(
  <Grommet theme={grommet}>
    <StoreProvider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </StoreProvider>
  </Grommet>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
