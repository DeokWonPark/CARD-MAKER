import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
    return <div className={styles.card}>
        <img src={card.imgURL || "/images/default_logo.png"} alt="userImg" className={styles.userImg}/>
        <div className={styles.cardInfo}>
            <h2 className={styles.cardName}>{card.name}</h2>
            <p>{card.company}</p>
            <hr/>
            <p>{card.title}</p>
            <p>{card.email}</p>
            <p>{card.message}</p>
        </div>
    </div>
}

export default Card;