import { action, thunk } from "easy-peasy";
import mockupAPI from "../api/mockup";

export const model = {
  tasks: [],
  //ACTION
  addTask: action((store, payload) => {
    store.tasks.push(payload);
  }),
  //THUNK
  retrieveTasks: thunk((actions, payload) => {
    const tasks = mockupAPI.getAllTasks();
    tasks.forEach(el => actions.addTask(el));
  })
};

export default model;
