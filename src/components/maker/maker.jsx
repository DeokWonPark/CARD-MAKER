import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Thema from '../thema/thema';
import styles from './maker.module.css';

const Maker = (props) => {
    const [cards,setCards]=useState({
        "1":{
            name:"Pyosick",
            company:"DRX",
            title:"Enjoy Challenge",
            email:"ejrdnjs96@gmail.com",
            message:"Go DRX",
            thema:"/images/thema1.jpg",
            imgName:null,
            imgURL:null,
        },
        "2":{
            name:"Pyosick",
            company:"DRX",
            title:"Enjoy Challenge",
            email:"ejrdnjs96@gmail.com",
            message:"Go DRX",
            thema:"/images/thema2.jpg",
            imgName:null,
            imgURL:null,
        },
        "3":{
            name:"Pyosick",
            company:"DRX",
            title:"Enjoy Challenge",
            email:"ejrdnjs96@gmail.com",
            message:"Go DRX",
            thema:"/images/thema3.jpg",
            imgName:null,
            imgURL:null,
        },
    })
    return <section className={styles.Maker}>
        <Thema></Thema>
        <Editor cards={cards}></Editor>
        <Preview cards={cards}></Preview>
    </section>
}

export default Maker;