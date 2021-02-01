import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
const Login = (props) => {

    const history=useHistory();

    const handleAuth=async (event)=>{
        await props.authObj.login(event.target.textContent);
        const user=props.authObj.user;
        const token=props.authObj.token;
        if(user!==null && token!==null){
            history.push('/app');
        }
    }

    return<section className={styles.login}>
        <h2>Login</h2>
        <button className={styles.loginBtn} onClick={handleAuth}>Google</button>
        <button className={styles.loginBtn} onClick={handleAuth}>Github</button>
    </section>
}

export default Login;