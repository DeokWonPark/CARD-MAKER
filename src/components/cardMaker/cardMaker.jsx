import React, { useState } from 'react';
import CardInfo from '../card_info/card_info';
import styles from './cardMaker.module.css';

const CardMaker = ({card,onUpload}) => {
    return <section className={styles.cardmaker}>
        <h2>Card Maker</h2>
        <ul>
            {card.map((card_item)=>{
                return <CardInfo cardItem={card_item} key={card_item.email} onUpload={onUpload}></CardInfo>
            })}
        </ul>
    </section>
}
export default CardMaker;