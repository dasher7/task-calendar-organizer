/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Box } from "grommet";
import Task from "./Task";
// eslint-disable-next-line no-unused-vars
import mockupAPI from "../../api/mockup";
import { useStoreState, useStoreActions } from "easy-peasy";
import { withFirebase } from "../../firebase/context";

export const TaskList = props => {
  // const [tasks, setTasks] = React.useState([{}]);
  const tasks = useStoreState(store => store.tasks);
  const addTask = useStoreActions(action => action.addTask);
  const completeTask = useStoreActions(action => action.completeTask);
  const deleteTask = useStoreActions(action => action.deleteTask);

  //TODO: We need to use thunk here!!
  //TODO: We also need to have a better way of parsing the response
  useEffect(() => {
    const getData = async () => {
      // mockupAPI.getAllTasks().forEach(el => addTask(el));
      const tasks = await props.firebase.findAllTasks();
      const once = await tasks.once("value");
      const snap = once.val();
      addTask(snap["6sEjA7A203WRZVkjvYKXZUiuHA02"]["78"]);
      addTask(snap["6sEjA7A203WRZVkjvYKXZUiuHA02"]["79"]);
      console.log(snap["6sEjA7A203WRZVkjvYKXZUiuHA02"]);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addTask]);

  const handleComplete = id => {
    completeTask(id);
  };

  const handleDelete = id => {
    deleteTask(id);
  };

  return (
    <>
      <Box overflow="auto">
        {tasks
          .filter(el => {
            if (el.completed !== true || el.completed !== true) {
              return el;
            }
          })
          .map((el, index) => (
            <Task
              key={index}
              title={el.title}
              description={el.description}
              time={el.scheduled_time}
              period={el.scheduled_period}
              handleComplete={() => handleComplete(el.id)}
              handleDelete={() => handleDelete(el.id)}
            />
          ))}
      </Box>
    </>
  );
};

export default withFirebase(TaskList);
