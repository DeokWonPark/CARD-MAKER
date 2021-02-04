import React, { useRef,useEffect } from 'react';
import styles from './card.module.css';

const Card = ({cardItem}) => {
    const cardref=useRef();
    useEffect(()=>{
        setup();
    },[]);

    const setup=()=>{
        if(cardItem.color==='Dark'){
            cardref.current.classList.add(styles.dark);
        }
        else if(cardItem.color==='Light'){
            cardref.current.classList.add(styles.light);
        }
        else{
            cardref.current.classList.add(styles.colorful);
        }
    }

    return <div className={styles.card} ref={cardref}>  
        <img src={cardItem.img} alt="user_img" className={styles.userImg}/>
        <span className={styles.userInfo}>
            <h3>{cardItem.userName}</h3>
            <p>{cardItem.company}</p>
            <hr/>
            <p>{cardItem.title}</p>
            <p>{cardItem.email}</p>
            <p>{cardItem.description}</p>
        </span>
    </div>
}

export default Card;