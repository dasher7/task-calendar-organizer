/* eslint-disable no-lone-blocks */
import React from "react";
import { Box, Button, Grid } from "grommet";

export const Task = ({ title, description, time, period, handleComplete, handleDelete }) => (
  <>
    <Grid
      margin="small"
      rows={["xxsmall", "xsmall"]}
      columns={["small", "large"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
    >
      <Box gridArea="header">
        <h3>{title}</h3>
      </Box>
      <Box gridArea="main">
        <p>{description}</p>
        <Box>
          <Box direction="row">
            <Button label="Completed" margin={{ right: "small" }} color="status-ok" onClick={handleComplete} />
            <Button label="Delete" color="status-error" onClick={handleDelete} />
          </Box>
        </Box>
      </Box>
      <Box gridArea="nav">
        <p>
          <strong>{time}</strong>
          <br />
          <span>{period}</span>
        </p>
      </Box>
    </Grid>
  </>
);

export default Task;
