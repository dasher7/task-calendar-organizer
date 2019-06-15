import { action, thunk } from "easy-peasy";
import mockupAPI from "../api/mockup";

export const model = {
  tasks: [],
  //ACTION
  addTask: action((store, payload) => {
    store.tasks.push(payload);
  }),
  completeTask: action((store, payload) => {
    store.tasks.forEach(el => {
      if (el.id === payload) el.completed = true;
    });
  }),
  deleteTask: action((store, payload) => {
    store.tasks.forEach(el => {
      if (el.id === payload) el.completed = true;
    });
  }),
  //THUNK
  retrieveTasks: thunk((actions, payload) => {
    const tasks = mockupAPI.getAllTasks();
    tasks.forEach(el => actions.addTask(el));
  })
};

export default model;
