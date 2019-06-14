import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

export class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // AUTHENTICATION FIREBASE API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doResetPassword = email => this.auth.sendPasswordResetEmail(email);

  doUpdateEmail = email => this.auth.currentUser.updateEmail(email);

  doUpdatePassword = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
