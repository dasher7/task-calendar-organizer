import React from "react";
import { Grommet } from "grommet";
import SignUpPage from "./components/SignUpPage";

const theme = {
  global: {
    font: {
      size: "16px",
      height: "20px"
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <SignUpPage />
    </Grommet>
  );
}

export default App;
