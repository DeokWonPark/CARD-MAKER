import React from 'react';
import styles from './card.module.css';

const Card = ({cardItem}) => {
    return <div className={styles.card}>  
        <img src={cardItem.img} alt="user_img" className={styles.userImg}/>
        <span className={styles.userInfo}>
            <h3>{cardItem.name}</h3>
            <p>{cardItem.company}</p>
            <hr/>
            <p>{cardItem.Title}</p>
            <p>{cardItem.email}</p>
            <p>{cardItem.discription}</p>
        </span>
    </div>
}

export default Card;