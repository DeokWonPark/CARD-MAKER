import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return <header>
        <div className={styles.headerBtns}>
            <img src="/images/logo.png" alt="logo"/>
            <button>Logout</button>
        </div>
        <h2>Business Card Maker</h2>
    </header>
}

export default Header;