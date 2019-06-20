import { action, thunk } from "easy-peasy";
import mockupAPI from "../api/mockup";
import Firebase from "../firebase/firebase";

//TODO: refactore the object model, create an object for each consistent piece of state and a global store object to export

export const model = {
  //POSSIBLE STATES
  tasks: [],
  authUser: [],
  test: [],

  //ACTION

  //ACTION FOR TASKS
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

  //ACTION FOR USER
  addUser: action((store, payload) => {
    store.authUser.push(payload);
  }),
  removeUser: action((store, payload) => {
    store.authUser.splice(payload, 1);
  }),

  //THUNK
  retrieveTasks: thunk((actions, payload) => {
    const tasks = mockupAPI.getAllTasks();
    tasks.forEach(el => actions.addTask(el));
  }),

  retrieveUserTasks: thunk(async (action, payload) => {
    const firebase = new Firebase();
    const tasks = await firebase.db.ref("/tasks" + this.authUser.uid).once();
    const details = tasks.val();
    test.push(details);
    test.push(1);

    // BOILERPLATE PER LA LETTURA, MIGLIORABILE
    // const tasks = await props.firebase.findAllTasks();
    // const once = await tasks.once("value");
    // const snap = once.val();
    // addTask(snap["6sEjA7A203WRZVkjvYKXZUiuHA02"]["78"]);
    // addTask(snap["6sEjA7A203WRZVkjvYKXZUiuHA02"]["79"]);
    // console.log(snap["6sEjA7A203WRZVkjvYKXZUiuHA02"]);
  })
};

export default model;
