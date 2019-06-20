import React from "react";
import { Box, Button, TextArea } from "grommet";
import Draggable from "react-draggable";

//TODO: probabibly it will have some props to handle calculation

export const CalculatorWidget = props => {
  return (
    <>
      <Draggable defaultPosition={{ x: 100, y: 0 }} position={null} grid={[25, 25]} scale={1}>
        <Box
          pad="medium"
          margin="small"
          background="white"
          elevation="large"
          border={{ size: "small", side: "all", color: "accent-1" }}
          round="small"
        >
          {/** START OUTPUT TEXT AREA */}
          <Box direction="row" fill="horizontal">
            <TextArea focusIndicator={false} placeholder="Difficult calc here" plain={true} />
          </Box>
          {/** END OUTPUT TEXT AREA */}

          {/** START ROW OF NUMBERS */}
          <Box direction="row" fill="horizontal">
            <Box direction="row" width="30vh" height="10vh" justify="center" align="center">
              <Button label="+" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="-" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="*" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="/" primary />
            </Box>
          </Box>
          {/** START ROW OF NUMBERS */}

          {/** START ROW OF NUMBERS */}
          <Box direction="row" fill="horizontal">
            <Box direction="row" width="30vh" height="10vh" justify="center" align="center">
              <Button label="7" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="8" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="9" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="CC" primary />
            </Box>
          </Box>
          {/** START ROW OF NUMBERS */}

          {/** START ROW OF NUMBERS */}
          <Box direction="row" fill="horizontal">
            <Box direction="row" width="30vh" height="10vh" justify="center" align="center">
              <Button label="4" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="5" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="6" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="C" primary />
            </Box>
          </Box>
          {/** START ROW OF NUMBERS */}

          {/** START ROW OF NUMBERS */}
          <Box direction="row" fill="horizontal">
            <Box direction="row" width="30vh" height="10vh" justify="center" align="center">
              <Button label="1" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="2" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="3" primary />
            </Box>
            <Box width="30vh" height="10vh" justify="center" align="center">
              <Button label="0" primary />
            </Box>
          </Box>
          {/** START ROW OF NUMBERS */}
        </Box>
      </Draggable>
    </>
  );
};

export default CalculatorWidget;
