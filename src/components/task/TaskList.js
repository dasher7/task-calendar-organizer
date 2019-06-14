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

  useEffect(() => {
    const getData = async () => {
      mockupAPI.getAllTasks().forEach(el => addTask(el));
    };
    getData();
  }, [addTask]);

  const handleComplete = id => {
    const taskCompleted = tasks.filter(el => el.id !== id);
    taskCompleted.completed = true;
    addTask(taskCompleted);
  };

  const handleDelete = id => {
    const deltedTask = tasks.filter(el => el.id !== id);
    deltedTask.deleted = true;
    addTask(deltedTask);
  };

  return (
    <>
      <Box overflow="auto">
        {tasks
          .filter(el => {
            if ((el.completed === false) | (el.deleted === true)) {
              console.log(el.completed);
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
