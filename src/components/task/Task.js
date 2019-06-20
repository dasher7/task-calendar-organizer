/* eslint-disable no-lone-blocks */
import React from "react";
import { Box, Button, Text } from "grommet";

//TODO: i can pass {task} directly and the use destructuring or use task.title
export const Task = ({ title, description, time, period, handleComplete, handleDelete }) => (
  <>
    <Box margin={{ top: "small", bottom: "small" }} pad="small">
      <Box direction="row">
        <Text size="xlarge" weight="bold">
          {title}
        </Text>
      </Box>
      <Box direction="row" align="center" justify="start">
        <Box margin={{ bottom: "small" }} align="center">
          <Text weight={600}>{time}</Text>
          <Text>{period}</Text>
        </Box>
        <Box margin="small">
          <Box direction="row">
            <Text>{description}</Text>
          </Box>
          <Box direction="row" margin={{ top: "small", bottom: "small" }}>
            <Button margin={{ right: "small" }} label="Complete" color="status-ok" onClick={() => handleComplete()} />
            <Button label="Delete" color="status-error" onClick={() => handleDelete()} />
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default Task;

{
  /* <>
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
</> */
}
