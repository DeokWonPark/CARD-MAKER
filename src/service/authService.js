import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService{
    constructor(){
        this.token=null;
        this.user=null;
    }
    login(providerName){
      console.log("login")
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
            console.log(error);
          });
    }

    logout(){
      return firebaseApp.auth().signOut()
              .then(()=>{
                this.token=null;
                this.user=null;
                this.see();
              }).catch((error)=> console.log(error ,"error"));
    }
    see(){
      firebaseApp.auth().onAuthStateChanged(function(user) {
        if (user) {
          return user;
        } else {
          console.log("정상적인 로그아웃");
          return null;
        }
      });
    }
}

export default AuthService;