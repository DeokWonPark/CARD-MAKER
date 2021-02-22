import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Thema from '../thema/thema';
import styles from './maker.module.css';

const Maker = ({imageUpload}) => {
    const [cards,setCards]=useState({
        "1":{
            id:"1",
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
            id:"2",
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
            id:"3",
            name:"Pyosick",
            company:"DRX",
            title:"Enjoy Challenge",
            email:"ejrdnjs96@gmail.com",
            message:"Go DRX",
            thema:"/images/thema3.jpg",
            imgName:null,
            imgURL:null,
        },
    });

    const updateCard=(card)=>{
        setCards(cards =>{
            const updated={
                ...cards,
                [card.id]:card,
            };
            return updated;
        })
    }

    const deleteCard=(card)=>{
        setCards(cards =>{
            const updated={...cards};
            delete updated[card.id];
            return updated;
        })
    }

    const updateImg=(imgInfo)=>{
        setCards(cards =>{
            const updated={...cards};
            updated[imgInfo.cardId].imgName=imgInfo.imgName;
            updated[imgInfo.cardId].imgURL=imgInfo.imgURL;
            return updated;
        })
    }

    return <section className={styles.Maker}>
        <Thema></Thema>
        <Editor 
        cards={cards} 
        updateCard={updateCard} 
        deleteCard={deleteCard} 
        imageUpload={imageUpload}
        updateImg={updateImg}
        ></Editor>
        <Preview cards={cards}></Preview>
    </section>
}

export default Maker;