import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8F_R8ofWn7wXNqPXnEuh7XbrQWIoopQ",
  authDomain: "react-project-dcf21.firebaseapp.com",
  projectId: "react-project-dcf21",
  storageBucket: "react-project-dcf21.appspot.com",
  messagingSenderId: "886999257531",
  appId: "1:886999257531:web:dee69176a540004559b49e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);