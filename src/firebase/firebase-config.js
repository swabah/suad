import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC3TWh7SG9o1fyh77klf8FyHQ9Uq5G6vko",
    authDomain: "ahlussuffadars-78939.firebaseapp.com",
    projectId: "ahlussuffadars-78939",
    storageBucket: "ahlussuffadars-78939.appspot.com",
    messagingSenderId: "849437004018",
    appId: "1:849437004018:web:92e915973fabefa237006b",
    measurementId: "G-16TJEYSRQT"
  };


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);