import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

if (typeof window !== "undefined") {
  // Replace with your config to try it out!
  let firebaseConfig = {
    // apiKey: "***********",
    // authDomain: "***********",
    // projectId: "***********",
    // storageBucket: "***********",
    // messagingSenderId: "***********",
    // appId: "***********",
  };
  let firebaseApp = initializeApp(firebaseConfig);
  let auth = getAuth(firebaseApp);

  window.signin = (username, password) =>
    // Replace with one of your Firebase auth users to easily signin/signout
    signInWithEmailAndPassword(auth, "frodo@theshire.com", "1234abcd");

  window.signout = () => signOut(auth);
}
