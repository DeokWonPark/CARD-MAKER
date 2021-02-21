import {firebaseAuth, googleAuthProvider, githubAuthProvider} from './firebase';

class AuthService{

    login(targetName){
        const provider=this.getProvider(targetName);
        return firebaseAuth.signInWithPopup(provider);
    }

    logout(){
        firebaseAuth.signOut();
    }

    onAuthChanged(onChanged){
        firebaseAuth.onAuthStateChanged((user)=>{
            onChanged(user);
        });
    }

    getProvider(targetName){
        switch(targetName){
            case "Sign With Google":
                return googleAuthProvider;

            case "Sign With Github":
                return githubAuthProvider;
            default:
                throw new Error(`No Search Provider: ${targetName}`);
        }
    }
}
export default AuthService;