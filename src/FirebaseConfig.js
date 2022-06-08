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

const myQuery = query(collection(db, "Miembros"));

export const listenerMiembros = () =>
  onSnapshot(myQuery, (querySnapshot) => {
    const members = [];
    querySnapshot.forEach((doc) => {
      const time = doc.data().Fecha.seconds * 1000;
      // console.log(doc.data());
      const member = {
        name: doc.data().Nombre,
        birthday: {
          day: new Date(time).getFullYear(),
          month: new Date(time).getDate(),
          year: new Date(time).getMonth()
        }
      };
      return members.push(member);
    });
  });

// const q = query(collection(db, "cities"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });
