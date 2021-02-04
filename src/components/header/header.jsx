import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
    const history=useHistory();
    const handleLogout=async ()=>{
        const user=await props.onLogout();
        if(user===null){
            history.push("/");
        }
    }
    return <header>
        <div className={styles.headerBtns}>
            <img src="/images/logo.png" alt="logo"/>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <h2>Business Card Maker</h2>
    </header>
}

export default Header;