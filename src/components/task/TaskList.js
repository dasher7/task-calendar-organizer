/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Box } from "grommet";
import Task from "./Task";
import mockupAPI from "../../api/mockup";
import { useStore, useActions } from "easy-peasy";

export const TaskList = props => {
  // const [tasks, setTasks] = React.useState([{}]);
  const tasks = useStore(store => store.tasks);
  const addTask = useActions(action => action.addTask);
  const completeTask = useActions(action => action.completeTask);
  const deleteTask = useActions(action => action.deleteTask);

  useEffect(() => {
    const getData = async () => {
      mockupAPI.getAllTasks().forEach(el => addTask(el));
    };
    getData();
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

export default TaskList;
