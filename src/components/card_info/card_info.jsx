import React from 'react';
import styles from './card_info.module.css';

const CardInfo = ({cardItem}) => {
    return <form className={styles.editor}>
        <input type="text" defaultValue={cardItem.name} className={styles.input}/>
        <input type="text" defaultValue={cardItem.company} className={styles.input}/>
        <select name="color" id="select" className={styles.select}>
            <option defaultValue="Light">Light</option>
            <option defaultValue="Dark">Dark</option>
            <option defaultValue="Colorful">Colorful</option>
        </select>
        <input type="text" defaultValue={cardItem.Title} className={styles.input}/>
        <input type="text" defaultValue={cardItem.email} className={styles.input}/>
        <textarea name="discription" id="discription" cols="30" rows="2" className={styles.text} defaultValue={cardItem.discription}></textarea>
        <button className={styles.file}>No file</button>
        <button className={styles.button}>Delete</button>
    </form>
}

export default CardInfo;