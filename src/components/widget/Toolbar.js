import React, { useState } from "react";
import { Box, Button, Form, FormField, Layer, RadioButtonGroup } from "grommet";
import { AddCircle, Calculator, Clipboard } from "grommet-icons";
import { useActions } from "easy-peasy";
import mockupAPI from "../../api/mockup";
import moment from "moment";

export const Toolbar = props => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formPeriod, setFormPeriod] = useState("");
  const [formTime, setFormTime] = useState("");
  const addTask = useActions(action => action.addTask);

  const handleSubmiTask = event => {
    event.preventDefault();
    const newTask = {
      id: mockupAPI.getMaximumId() + 1,
      title: formTitle,
      description: formDescription,
      scheduled_time: formTime,
      scheduled_period: formPeriod,
      creation_date: moment(),
      completed: false,
      deleted: false
    };
    addTask(newTask);
    setShowAddTaskForm(false);
  };

  return (
    <>
      <Box direction="row" justify="start" align="center">
        <Button margin={{ right: "small" }}>
          <AddCircle
            size="large"
            color="brand"
            onClick={() => setShowAddTaskForm(true)}
          />
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
              <Form onSubmit={event => handleSubmiTask(event)}>
                <FormField
                  name="title"
                  label="Task Title"
                  value={formTitle}
                  onChange={event => setFormTitle(event.target.value)}
                />
                <FormField
                  name="description"
                  label="Task Descritpion"
                  value={formDescription}
                  onChange={event => setFormDescription(event.target.value)}
                />
                <Box direction="row" align="center" justify="between">
                  <RadioButtonGroup
                    name="period"
                    options={["AM", "PM"]}
                    value={formPeriod}
                    margin={{ right: "small" }}
                    onChange={event => setFormPeriod(event.target.value)}
                  />
                  <FormField
                    name="time"
                    label="Time"
                    value={formTime}
                    onChange={event => setFormTime(event.target.value)}
                  />
                </Box>
                <Box
                  margin={{ top: "small" }}
                  direction="row"
                  align="center"
                  justify="center"
                >
                  <Button
                    type="submit"
                    label="Add Task"
                    margin={{ right: "small" }}
                    primary
                  />
                  <Button
                    label="Close"
                    onClick={() => setShowAddTaskForm(false)}
                  />
                </Box>
              </Form>
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default Toolbar;
