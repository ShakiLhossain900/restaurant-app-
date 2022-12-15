import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUYOIvhW8nCHaHwo-p6voKVcFwFB8I4pE",
  authDomain: "restaurantapp-42290.firebaseapp.com",
  projectId: "restaurantapp-42290",
  storageBucket: "restaurantapp-42290.appspot.com",
  messagingSenderId: "976870998481",
  appId: "1:976870998481:web:a202f0ee82c3d585c060f0"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
