import React, { useEffect, useState } from 'react';
import styles from './themaItem.module.css';

const ThemaItem = ({ThemaInfo,selectThema,propsThema}) => {
    const [select,setSelect]=useState(false);

    useEffect(()=>{
        if(propsThema===ThemaInfo.imgURL){
            setSelect(true);
        }
        else{
            setSelect(false);
        }
    },[propsThema,ThemaInfo])

    const themaChecked=()=>{
        selectThema(ThemaInfo)
    }
    return <li className={`${styles.ThemaItem} ${select?styles.select:""}`} onClick={themaChecked}>
        <button className={styles.ThemaBtn}><img src={ThemaInfo.imgURL} alt="thema"/></button>
        <p className={styles.ThemaName}>{ThemaInfo.name}</p>
    </li>
}

export default ThemaItem;