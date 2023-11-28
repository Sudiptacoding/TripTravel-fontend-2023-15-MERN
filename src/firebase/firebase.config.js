import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     databaseURL: import.meta.env.VITE_databaseURL,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
// };



const firebaseConfig = {
    apiKey: "AIzaSyBnI15dz9g_QywmCrxmP2V76-qN275HiVo",
    authDomain: "chef-2894f.firebaseapp.com",
    projectId: "chef-2894f",
    storageBucket: "chef-2894f.appspot.com",
    messagingSenderId: "105824539431",
    appId: "1:105824539431:web:7fd6f466a024a263848f02",
    measurementId: "G-D4MS87CVRL"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth