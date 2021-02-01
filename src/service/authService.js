import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService{
    constructor(){
        this.token=null;
        this.user=null;
    }
    login(providerName){
        const provider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;
            const token = credential.accessToken;
            this.token=token;

            const user = result.user;
            this.user=user;
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
          });
    }
}

export default AuthService;