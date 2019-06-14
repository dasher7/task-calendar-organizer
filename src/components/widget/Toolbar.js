import React, { useState } from "react";
import { Box, Button, Form, FormField, Layer, RadioButtonGroup } from "grommet";
import { AddCircle, Calculator, Clipboard } from "grommet-icons";

export const Toolbar = props => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  return (
    <>
      <Box direction="row" justify="start" align="center">
        <Button margin={{ right: "small" }}>
          <AddCircle size="large" color="brand" onClick={() => setShowAddTaskForm(true)} />
        </Button>
        <Box margin={{ right: "small" }}>
          <Calculator />
        </Box>
        <Clipboard />
      </Box>

      {showAddTaskForm && (
        <Layer>
          <Box pad="medium">
            <h3>Add Your Awesome Task</h3>
            <Box margin="medium" pad="medium">
              <Form>
                <FormField label="Task Title" />
                <FormField label="Task Descritpion" />
                <Box direction="row" align="center" justify="between">
                  <RadioButtonGroup name="period" options={["AM", "PM"]} margin={{ right: "small" }} />
                  <FormField label="Time" />
                </Box>
              </Form>
            </Box>
            <Box direction="row" align="center" justify="center">
              <Button label="Add Task" onClick={() => setShowAddTaskForm(false)} margin={{ right: "small" }} primary />
              <Button label="Close" onClick={() => setShowAddTaskForm(false)} />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default Toolbar;
