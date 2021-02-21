import React, { useEffect, useRef } from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
    const cardRef=useRef(null);

    useEffect(()=>{
        if(card.thema===null){
            cardRef.current.style.backgroundColor=`white`;
            return;
        }
        cardRef.current.style.backgroundImage=`url(${card.thema})`;
    },[card])
    return <div className={styles.card} ref={cardRef}>
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