import React from 'react';
import FileInput from '../fileInput/fileInput';
import styles from './addForm.module.css';
const AddForm = (props) => {
    return <form className={styles.addform}>
        <input type="text" name="name" placeholder="Name" className={styles.input}/>
        <input type="text" name="company" placeholder="Company" className={styles.input}/>
        <input type="text" name="title" placeholder="Title" className={styles.input}/>
        <input type="text" name="email" placeholder="E-Mail" className={styles.input}/>
        <textarea 
        name="message" 
        id="message" 
        placeholder="Message"
        className={styles.textarea}
        ></textarea>
        <div className={styles.BtnBox}>
            <FileInput></FileInput>
            <button className={styles.addBtn}>ADD</button>
        </div>
    </form>
}

export default AddForm;