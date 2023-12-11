// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP-Eov0H1TcmoFabo_MxSc0TxEoMwz4m8",
  authDomain: "genius-car-1a9b5.firebaseapp.com",
  projectId: "genius-car-1a9b5",
  storageBucket: "genius-car-1a9b5.appspot.com",
  messagingSenderId: "627600290010",
  appId: "1:627600290010:web:2b94e24963fd059a3175e3"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;