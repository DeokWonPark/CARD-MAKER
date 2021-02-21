import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

export const firebaseAuth=firebaseApp.auth();
export const firebaseDatabase=firebaseApp.database();
export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider=new firebase.auth.GithubAuthProvider();