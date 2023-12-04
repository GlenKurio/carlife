import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwfQgG_MtX_qWCZfLoUX1ooFm98MV2a0M",
  authDomain: "carlife-2fd4d.firebaseapp.com",
  projectId: "carlife-2fd4d",
  storageBucket: "carlife-2fd4d.appspot.com",
  messagingSenderId: "181475927339",
  appId: "1:181475927339:web:3b11923a377f0cb1e8916e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
