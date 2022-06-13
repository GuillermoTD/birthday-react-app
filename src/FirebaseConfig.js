// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  onSnapshot
} from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS1E-IXRfzkhYNL73RNtgy1I9mrZ1JiEQ",
  authDomain: "membrecia-ibec-app.firebaseapp.com",
  projectId: "membrecia-ibec-app",
  storageBucket: "membrecia-ibec-app.appspot.com",
  messagingSenderId: "699774068592",
  appId: "1:699774068592:web:f11bbbc2823cacb98dd1b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const membersQuery = query(collection(db, "Miembros"));

export const listenerMiembros = () =>
  onSnapshot(membersQuery, (querySnapshot) => {
    const members = [];
    
  });
  export const onGetMembers = (callback) => onSnapshot(membersQuery,callback)

// const q = query(collection(db, "cities"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });
