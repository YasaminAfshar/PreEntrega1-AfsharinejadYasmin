
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBgeXO8kuka7DI1OXdCKQy9BPPTHscJjnc",
  authDomain: "mundolana-18397.firebaseapp.com",
  projectId: "mundolana-18397",
  storageBucket: "mundolana-18397.appspot.com",
  messagingSenderId: "1091404851002",
  appId: "1:1091404851002:web:6b9f895f77c7124be11203"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)