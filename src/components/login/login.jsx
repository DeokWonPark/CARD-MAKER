import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService}) => {
    const history=useHistory();
    const goToMaker=(uid)=>{
        history.push({
            pathname:"/cardmaker",
            state:{id : uid}
        });
    };
    const onLogin=(e)=>{
        authService.login(e.target.innerText)
        .then((data)=>goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService.onAuthChanged((user)=>{
            user && goToMaker(user.uid);
        })
    })
    return <section className={styles.login}>
        <div className={styles.loginBox}>
            <img src="/images/logo.png" alt="logo" className={styles.logoImg}/>
            <h2 className={styles.title}>Business Card Maker</h2>
            <button className={styles.Btn} onClick={onLogin}>Sign With Google</button>
            <button className={styles.Btn} onClick={onLogin}>Sign With GitHub</button>
        </div>
    </section>
}

export default Login;