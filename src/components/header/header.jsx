import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    const handleLogout=()=>{
        onLogout();
    }
    return <header className={styles.header}>
        <div className={styles.title}>
            <i className="fas fa-id-card-alt"></i>
            <p>Business Card Maker</p>
        </div>
        <button className={styles.logout} onClick={handleLogout}>LogOut</button>
    </header>
}

export default Header;