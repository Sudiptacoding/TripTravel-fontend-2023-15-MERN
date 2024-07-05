import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   databaseURL: import.meta.env.VITE_databaseURL,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCADF-kLAimO9gVsBDxQ7Io71F7FuMfYfc",
  authDomain: "notes-apps-d0322.firebaseapp.com",
  projectId: "notes-apps-d0322",
  storageBucket: "notes-apps-d0322.appspot.com",
  messagingSenderId: "273389439616",
  appId: "1:273389439616:web:b96dc83959c11b974f3465"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth