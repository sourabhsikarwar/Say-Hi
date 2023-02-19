import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMLxhJJzE-jJ7Pv37QhDLji_FC7b0Z3uQ",
  authDomain: "say-hi-24f24.firebaseapp.com",
  projectId: "say-hi-24f24",
  storageBucket: "say-hi-24f24.appspot.com",
  messagingSenderId: "417780642135",
  appId: "1:417780642135:web:508b72007c9f921417ce12",
  measurementId: "G-2HRC3RYXXK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();