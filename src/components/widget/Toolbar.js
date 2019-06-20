/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Draggable from "react-draggable";
import { Box, Button, Form, FormField, Layer, RadioButtonGroup, Text, TextArea } from "grommet";
import { AddCircle, Calculator, Clipboard } from "grommet-icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import mockupAPI from "../../api/mockup";
import moment from "moment";
import { withFirebase } from "../../firebase/context";
import ClipboardWidget from "../widget/ClipboardWidget";
import CalculatorWidget from "../widget/CalculatorWidget";

//TODO: for sure it will have some props to handle the closing of the modal

export const Toolbar = props => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formPeriod, setFormPeriod] = useState("");
  const [formTime, setFormTime] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [showClipboard, setshowClipboard] = useState(false);
  const authUser = useStoreState(store => store.authUser);
  const addTask = useStoreActions(action => action.addTask);

  const newTaskId = mockupAPI.getMaximumId() + 1;
  const timestamp = moment();

  const handleSubmiTask = event => {
    event.preventDefault();
    //TODO: can't call function and then save to firebase, how to fix? why?
    const newTask = {
      id: newTaskId,
      title: formTitle,
      description: formDescription,
      scheduled_time: formTime,
      scheduled_period: formPeriod,
      creation_date: null,
      completed: false,
      deleted: false
    };
    console.log(authUser[0].uid);
    const taskToSave = { ...newTask, user_id: authUser[0].uid };
    props.firebase.addTask(authUser[0].uid, newTask.id).set({ ...taskToSave });
    addTask(newTask);
    setShowAddTaskForm(false);
  };

  return (
    <>
      <Box direction="row" justify="start" align="center">
        <Button margin={{ right: "small" }}>
          <AddCircle size="large" color="brand" onClick={() => setShowAddTaskForm(true)} />
        </Button>
        <Box margin={{ right: "small" }}>
          <Calculator onClick={() => setShowCalculator(!showCalculator)} />
        </Box>
        <Clipboard onClick={() => setshowClipboard(!showClipboard)} />
      </Box>
      {/* TODO: i can move all this code into a separate component */}
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
                <Box margin={{ top: "small" }} direction="row" align="center" justify="center">
                  <Button type="submit" label="Add Task" margin={{ right: "small" }} primary />
                  <Button label="Close" onClick={() => setShowAddTaskForm(false)} />
                </Box>
              </Form>
            </Box>
          </Box>
        </Layer>
      )}
      {showCalculator && (
        <Layer modal={true} plain={true} onClickOutside={() => setShowCalculator(false)}>
          <Draggable defaultPosition={{ x: 100, y: 0 }} position={null} grid={[25, 25]} scale={1}>
            <CalculatorWidget />
          </Draggable>
        </Layer>
      )}
      {showClipboard && (
        <Layer modal={true} plain={false} onClickOutside={() => setshowClipboard(false)}>
          <ClipboardWidget />
        </Layer>
      )}
    </>
  );
};

//TODO: use a better to export this via HOC (needed to have firebase available)
export default withFirebase(Toolbar);
