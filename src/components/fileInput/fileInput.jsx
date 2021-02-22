import React, { useRef, useState } from 'react';
import styles from './fileInput.module.css';

const FileInput = ({id,fileName,imageUpload,updateImg}) => {
    const [loading,setLoading]=useState(false);
    const inputRef=useRef(null);
    const handleFileUpload=(event)=>{
        event.preventDefault();
        inputRef.current.click();
    }
    const changedImage=async(event)=>{
        setLoading(true);
        const uploaded=await imageUpload.uploadImage(event.target.files[0]);
        setLoading(false);
        updateImg({
            cardId:id,
            imgName:uploaded.original_filename,
            imgURL:uploaded.secure_url,
        });
    }
    return <div className={styles.File}>
        <input 
        type="file"
        accept="image/*"
        name="file"
        ref={inputRef}
        className={styles.fileInput}
        onChange={changedImage}
        />
        <button className={`${styles.fileBtn} ${fileName?styles.on:""}`} onClick={handleFileUpload}>{!loading && (fileName || "No file")}{loading && <div className={styles.loading}></div>}</button>
    </div>
}

export default FileInput;