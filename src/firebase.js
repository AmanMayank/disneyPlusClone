// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHHf9NAQ1RcbiASD7NIO7GWp2flPX_R8M",
  authDomain: "disneyplus-clone-e7bcc.firebaseapp.com",
  projectId: "disneyplus-clone-e7bcc",
  storageBucket: "disneyplus-clone-e7bcc.appspot.com",
  messagingSenderId: "616766186571",
  appId: "1:616766186571:web:c40a4633685a0ddec319ce",
  measurementId: "G-X4DCSLNP5G",
};

// const storage = firebase.storage();

// export { auth, provider, storage };

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export { firebaseApp };
