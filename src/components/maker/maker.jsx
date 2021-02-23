import React, { useEffect, useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Thema from '../thema/thema';
import styles from './maker.module.css';

const Maker = ({imageUpload, database,userId}) => {
    const defaultThema="https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/thema1.jpg";
    const [thema,setThema]=useState(defaultThema);
    const [cards,setCards]=useState({});

    useEffect(()=>{
        if(!userId){
            return;
        }
        const unmount=database.read(userId,(cards)=>{
            setCards(cards);
        });
        return ()=>{unmount();}
    },[userId,database]);

    const updateCard=(card)=>{
        setCards(cards =>{
            const updated={
                ...cards,
                [card.id]:card,
            };
            return updated;
        });
        database.write(card,userId);
    }

    const deleteCard=(card)=>{
        setCards(cards =>{
            const updated={...cards};
            delete updated[card.id];
            return updated;
        });
        database.removeCard(card,userId);
    }

    const updateImg=(imgInfo)=>{
        setCards(cards =>{
            const updated={...cards};
            updated[imgInfo.cardId].imgName=imgInfo.imgName;
            updated[imgInfo.cardId].imgURL=imgInfo.imgURL;
            return updated;
        });
        database.write(cards[imgInfo.cardId],userId);
    }

    const selectThema=(themaItem)=>{
        setThema(themaItem.imgURL);
    }

    return <section className={styles.Maker}>
        <Thema selectThema={selectThema} propsThema={thema}></Thema>
        <div className={styles.cardMaker}>
            <Editor
            cards={cards}
            updateCard={updateCard}
            deleteCard={deleteCard}
            imageUpload={imageUpload}
            updateImg={updateImg}
            thema={thema}
            ></Editor>
            <Preview cards={cards}></Preview>
        </div>
    </section>
}

export default Maker;