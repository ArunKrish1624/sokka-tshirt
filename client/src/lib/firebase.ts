// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWmlQIy4c5EodoU8i1yBiuW2V0FxD-lSI",
    authDomain: "sokka-7eaf4.firebaseapp.com",
    projectId: "sokka-7eaf4",
    storageBucket: "sokka-7eaf4.firebasestorage.app",
    messagingSenderId: "635567821733",
    appId: "1:635567821733:web:7ece145e7e64c9c271ce4c",
    measurementId: "G-VVM0XTZM7H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
