// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEgbd66IJBykXivAynQSzBxYKiyGPWPXc",
  authDomain: "food-recipe-e8411.firebaseapp.com",
  projectId: "food-recipe-e8411",
  storageBucket: "food-recipe-e8411.appspot.com",
  messagingSenderId: "228043152107",
  appId: "1:228043152107:web:4ba64c8e980eb5ee0a3cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgStorage = getStorage(app);
export const database = getDatabase(app);