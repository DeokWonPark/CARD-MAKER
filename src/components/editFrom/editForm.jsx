import React from 'react';
import FileInput from '../fileInput/fileInput';
import styles from './editForm.module.css';
const EditForm = ({card}) => {
    return <form className={styles.editform}>
        <input type="text" name="name" value={card.name} className={styles.input}/>
        <input type="text" name="company" value={card.company} className={styles.input}/>
        <input type="text" name="title" value={card.title} className={styles.input}/>
        <input type="text" name="email" value={card.email} className={styles.input}/>
        <textarea 
        name="message" 
        id="message" 
        value={card.message} 
        className={styles.textarea}
        ></textarea>
        <div className={styles.BtnBox}>
            <FileInput fileName={card.imgName}></FileInput>
            <button className={styles.deleteBtn}>Delete</button>
        </div>
    </form>
}

export default EditForm;