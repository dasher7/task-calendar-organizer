import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "./config";

export class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  // AUTHENTICATION FIREBASE API

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doResetPassword = email => this.auth.sendPasswordResetEmail(email);

  doUpdateEmail = email => this.auth.currentUser.updateEmail(email);

  doUpdatePassword = password => this.auth.currentUser.updatePassword(password);

  // DATABASE API

  //USERS

  //add a user
  user = uid => this.db.ref("users/" + uid);

  //read all users
  users = () => this.db.ref("users");

  //TASKS
  //i should pass to it an object which shape is:
  //{
  //  id: user.uid,
  //  title: task.title,
  //  description: task.description,
  //  period: task.period
  //  time: task.time
  //}
  addTask = (uid, tid) => this.db.ref("task/" + uid + "/" + tid);

  //Find all task, givend the uid of the user
  findUserTask = uid => this.db.ref("/task" + uid);
  findAllTasks = () => this.db.ref("/task");
}

export default Firebase;
