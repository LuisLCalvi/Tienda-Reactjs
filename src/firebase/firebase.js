import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqzru2iXflkyuO7SHoKOyHHed-j72aydw",
  authDomain: "tienda-shop-3fa15.firebaseapp.com",
  projectId: "tienda-shop-3fa15",
  storageBucket: "tienda-shop-3fa15.appspot.com",
  messagingSenderId: "780367128338",
  appId: "1:780367128338:web:e074f48d26701e2d7df5cb"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);