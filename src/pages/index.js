import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { suspend } from "suspend-react";
import Dashboard from "../components/Dashboard";
import SignIn from "../components/SignIn";

let firebaseConfig = {
  // Replace with your config to try it out!
  apiKey: "********",
  authDomain: "********",
  projectId: "********",
  storageBucket: "********",
  messagingSenderId: "********",
  appId: "********",
};
let firebaseApp = initializeApp(firebaseConfig);
let auth = getAuth(firebaseApp);

async function getInitialAuthState() {
  return new Promise((resolve) => {
    let unsub = onAuthStateChanged(auth, (firebaseUser) => {
      resolve(firebaseUser);
      unsub();
    });
  });
}

export default function Home() {
  let user = suspend(getInitialAuthState, ["initialAuthState"]);

  return user ? <Dashboard name={user.displayName} /> : <SignIn />;
}
