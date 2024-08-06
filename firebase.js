// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCskivGn9A2G-ajkibVVIgILxi6EZa1n5Q",
  authDomain: "inventory-management-5e13c.firebaseapp.com",
  projectId: "inventory-management-5e13c",
  storageBucket: "inventory-management-5e13c.appspot.com",
  messagingSenderId: "1059710168003",
  appId: "1:1059710168003:web:651884c3a9b59c9d836b76",
  measurementId: "G-WWHKMTQQS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
