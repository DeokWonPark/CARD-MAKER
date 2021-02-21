import React from 'react';
import styles from './fileInput.module.css';

const FileInput = ({fileName}) => {
    return <div className={styles.File}>
        <input 
        type="file"
        accept="image/*"
        name="file"
        className={styles.fileInput}
        />
        <button className={styles.fileBtn}>{fileName || "No file"}</button>
    </div>
}

export default FileInput;