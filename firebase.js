import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
const firebaseConfig={apiKey:"AIzaSyDHUN77PGqYRYNDyFDb4P_Fzzuf6T_Fx8Q",authDomain:"auto-dae98.firebaseapp.com",projectId:"auto-dae98",messagingSenderId:"573466912206",appId:"1:573466912206:web:75b1469006ee60f7b4379f",measurementId:"G-M25Y1WJQ70"};
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
