// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyANW1iyHQ-flU8sRnWICI3gCLAdU8S5Crw",
	authDomain: "assignment-11-124e0.firebaseapp.com",
	projectId: "assignment-11-124e0",
	storageBucket: "assignment-11-124e0.appspot.com",
	messagingSenderId: "849281189716",
	appId: "1:849281189716:web:fb2eda5af6dd93b3e76ac1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
