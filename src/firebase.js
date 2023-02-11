import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBv161N2DFjo7Ly9o6WVBbk8kaO6KhM9Xo",
  authDomain: "chat-7ffd8.firebaseapp.com",
  projectId: "chat-7ffd8",
  storageBucket: "chat-7ffd8.appspot.com",
  messagingSenderId: "778503458560",
  appId: "1:778503458560:web:fe769d2d1264c098d1ede5"
};

// Inicializando Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();