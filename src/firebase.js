import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQglFYcxJkMBEGIoxVpzwagqjjgxEmmZ0",
  authDomain: "shop-b348a.firebaseapp.com",
  projectId: "shop-b348a",
  storageBucket: "shop-b348a.appspot.com",
  messagingSenderId: "454867276468",
  appId: "1:454867276468:web:2cc3df2d07a51ae13dfde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;