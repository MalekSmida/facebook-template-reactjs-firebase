import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbyDA7jbzgJB-IgUBMZxFl7AH6NcxeuZg",
  authDomain: "facebook-template-fda6a.firebaseapp.com",
  databaseURL: "https://facebook-template-fda6a.firebaseio.com",
  projectId: "facebook-template-fda6a",
  storageBucket: "facebook-template-fda6a.appspot.com",
  messagingSenderId: "19131686276",
  appId: "1:19131686276:web:62aae965aa6e3e1e3051d1",
  measurementId: "G-PWWGTW7VEF",
};

// connect front and back
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
