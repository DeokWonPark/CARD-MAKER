import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardInfo from '../card_info/card_info';
import styles from './cardMaker.module.css';

const CardMaker = ({card,onUpload,onAdd,onDelete}) => {
    const cardItem={};
    return <section className={styles.cardmaker}>
        <h2>Card Maker</h2>
        <ul>
            {card.map((card_item)=>{
                return <CardInfo cardItem={card_item} key={card_item.email} onUpload={onUpload} onAddandDelete={onDelete}></CardInfo>
            })}
            <CardInfo cardItem={cardItem} onUpload={onUpload} onAddandDelete={onAdd}></CardInfo>
        </ul>
    </section>
}
export default CardMaker;