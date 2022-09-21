// import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDagW6pLBVZzrb-3YWwQXQ5OKb5t6t_uIg",
  authDomain: "web-ce254.firebaseapp.com",
  projectId: "web-ce254",
  storageBucket: "web-ce254.appspot.com",
  messagingSenderId: "300704530391",
  appId: "1:300704530391:web:498d98e0ad755a703d9592",
  measurementId: "G-ZQD9XWEMTV"
};
// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore;
// const auth = app.auth;
// const storage = firebase.storage;
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
  // https://e-web-60cc5.web.app amazon deployed

// export { auth, db, storage };

// const firebaseApp = firebase.initalizeApp(firebaseConfig)
// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// export {db}
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth, db };