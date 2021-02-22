import React, { useState } from 'react';
import ThemaItem from '../themaItem/themaItem';
import styles from './thema.module.css';

const Thema = ({selectThema,propsThema}) => {
    const [thema,setThema]=useState({
        "1":{
            name:"Purple Load",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/thema1.jpg",
        },
        "2":{
            name:"Black Gard",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/thema2.jpg",
        },
        "3":{
            name:"Colorful Geometric",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/thema3.jpg",
        },
        "4":{
            name:"Avengers",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/thema4.jpg",
        },
        "5":{
            name:"City",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/thema5.jpg",
        },
    })
    return <section className={styles.ThemaBox}>
        <h2 className={styles.title}>Choose a Thema</h2>
        <ul className={styles.Thema}>
            {Object.keys(thema).map((key)=>{
                return <ThemaItem ThemaInfo={thema[key]} selectThema={selectThema} propsThema={propsThema} key={key}></ThemaItem>
            })}
        </ul>
    </section>
}

export default Thema;