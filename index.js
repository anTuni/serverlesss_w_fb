import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc , getDocs } from "firebase/firestore"; 
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDo9KWxMGmRRM5Da_V8hSha5KQoZaDNHTw",
    authDomain: "toyweb-7389e.firebaseapp.com",
    projectId: "toyweb-7389e",
    storageBucket: "toyweb-7389e.appspot.com",
    messagingSenderId: "40436245456",
    appId: "1:40436245456:web:c18b69fc9961b175d3cfd5",
    measurementId: "G-Z5ZV31XMZ6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Add data
try {
    const docRef = await addDoc(collection(db, "users"), {
      title: "Eva",
      model: "Hi I'm Eva",
      producesIn: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`,doc.data());
});
