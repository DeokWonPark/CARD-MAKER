import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
const Login = (props) => {

    const history=useHistory();

    const goToMaker=(uid)=>{
        history.push({
            pathname:"/app",
            state:{id : uid},
        });
    }
    const handleAuth=async (event)=>{
        const data=await props.authObj.login(event.target.textContent);
        console.log(data);
        const user=props.authObj.user;
        const token=props.authObj.token;
        if(token!==null){
            const users={
                user:user,
                token:token,
            }
            sessionStorage.setItem('users',JSON.stringify(users));
            goToMaker(data.user.uid)
        }
    }

    // useEffect(()=>{
    //     props.authObj.onAuthChange((user)=>{
    //         user && goToMaker(user.uid);
    //     })
    // })

    return<section className={styles.login}>
        <h2>Login</h2>
        <button className={styles.loginBtn} onClick={handleAuth}>Google</button>
        <button className={styles.loginBtn} onClick={handleAuth}>Github</button>
    </section>
}

export default Login;