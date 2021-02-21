import React from 'react';
import styles from './themaItem.module.css';

const ThemaItem = ({ThemaInfo}) => {
    return <li className={styles.ThemaItem}>
        <button className={styles.ThemaBtn}><img src={ThemaInfo.imgURL} alt="thema"/></button>
        <p className={styles.ThemaName}>{ThemaInfo.name}</p>
    </li>
}

export default ThemaItem;