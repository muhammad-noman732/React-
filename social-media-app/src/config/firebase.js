// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // for uploading images
import { getAuth } from "firebase/auth"; // for auth  
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKC7sYGJcUVMHhwbd14aWfKGs9OxhJhu0",
  authDomain: "social-media-app-394d0.firebaseapp.com",
  databaseURL: "https://social-media-app-394d0-default-rtdb.firebaseio.com",
  projectId: "social-media-app-394d0",
  storageBucket: "social-media-app-394d0.firebasestorage.app",
  messagingSenderId: "1085130152467",
  appId: "1:1085130152467:web:8fb0d86872fcb67b807de6",
  measurementId: "G-EH5YZ6LGSM",
  databaseURL: "https://social-media-app-394d0-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// const analytics = getAnalytics(app);