import React from 'react';
import Card from '../card/card';
import styles from './cardPreview.module.css';

const CardPreview = ({card}) => {
    return <section className={styles.cardPreview}>
        <h2>Card Preview</h2>
        <ul>
            {card.map((cardItem)=>{
                return <Card cardItem={cardItem} key={cardItem.email}></Card>
            })}
        </ul>
    </section>
}

export default CardPreview;