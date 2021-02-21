import React, { useState } from 'react';
import ThemaItem from '../themaItem/themaItem';
import styles from './thema.module.css';

const Thema = (props) => {
    const [thema,setThema]=useState({
        "1":{
            name:"Purple Load",
            imgURL:"/images/thema1.jpg",
        },
        "2":{
            name:"Black Gard",
            imgURL:"/images/thema2.jpg",
        },
        "3":{
            name:"Colorful Geometric",
            imgURL:"/images/thema3.jpg",
        },
        "4":{
            name:"Avengers",
            imgURL:"/images/thema4.jpg",
        },
        "5":{
            name:"City",
            imgURL:"/images/thema5.jpg",
        },
    })
    return <section className={styles.ThemaBox}>
        <h2 className={styles.title}>Choose a Thema</h2>
        <ul className={styles.Thema}>
            {Object.keys(thema).map((key)=>{
                return <ThemaItem ThemaInfo={thema[key]} key={key}></ThemaItem>
            })}
        </ul>
    </section>
}

export default Thema;