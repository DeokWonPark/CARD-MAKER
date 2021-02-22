import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Maker from '../maker/maker';
import styles from './cardMaker.module.css';

const CardMaker = ({authService,imageUpload}) => {
    const historyState=useHistory().state;
    const history=useHistory(historyState && historyState.id);
    const [userId,setUserId]=useState();
    const onLogout=()=>{
        authService.logout();
    }
    useEffect(()=>{
        authService.onAuthChanged((user)=>{
            if(user){
                setUserId(user.uid);
            }
            else{
                history.push("/");
            }
        })
    },[userId,history,authService])
    return <section className={styles.CardMaker}>
        <Header onLogout={onLogout}></Header>
        <Maker imageUpload={imageUpload}></Maker>
    </section>
}

export default CardMaker;