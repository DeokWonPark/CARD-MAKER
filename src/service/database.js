import firebase from "firebase";
import firebaseApp from "./firebase";

class Database{

    dataWrite=(userId,userName,company,color,title,email,description,img,imgName)=>{
        firebase.database().ref('users/'+ `${userId}/` + `${userName}/`).set({
            username: userName,
            company:company,
            color:color,
            title:title,
            email: email,
            description : description,
            img:img,
            imgName:imgName,
        });
    }

    dataRead=(userId)=>{
        const userInfoRef=firebase.database().ref('users/' + `${userId}/`);
        return userInfoRef;
    }
}

export default Database;