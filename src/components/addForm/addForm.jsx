import React, { useRef, useState } from 'react';
import FileInput from '../fileInput/fileInput';
import styles from './addForm.module.css';
const AddForm = ({imageUpload,updateCard,thema}) => {
    const [file,setFile]=useState({fileName:null,fileURL:null});
    const nameRef=useRef(null);
    const companyRef=useRef(null);
    const titleRef=useRef(null);
    const emailRef=useRef(null);
    const messageRef=useRef(null);
    const formRef=useRef(null);

    const handleAdd=(event)=>{
        event.preventDefault();
        const card={
            id:Date.now(),
            name:nameRef.current.value || "",
            company:companyRef.current.value || "",
            title:titleRef.current.value || "",
            email:emailRef.current.value || "",
            message:messageRef.current.value|| "",
            thema:thema,
            imgName:file.fileName,
            imgURL:file.fileURL,
        }
        updateCard(card);
        setFile({fileName:null,fileURL:null});
        formRef.current.reset();
    }
    const fileChanged=(files)=>{
        setFile({fileName:files.imgName,fileURL:files.imgURL})
    }
    return <form className={styles.addform} ref={formRef}>
        <input type="text" name="name" placeholder="Name" className={styles.input} ref={nameRef}/>
        <input type="text" name="company" placeholder="Company" className={styles.input} ref={companyRef}/>
        <input type="text" name="title" placeholder="Title" className={styles.input} ref={titleRef}/>
        <input type="text" name="email" placeholder="E-Mail" className={styles.input} ref={emailRef}/>
        <textarea 
        name="message" 
        id="message" 
        placeholder="Message"
        className={styles.textarea}
        ref={messageRef}
        ></textarea>
        <div className={styles.BtnBox}>
            <FileInput 
            id={null} 
            fileName={file.fileName} 
            imageUpload={imageUpload}
            updateImg={fileChanged}
            ></FileInput>
            <button className={styles.addBtn} onClick={handleAdd}>ADD</button>
        </div>
    </form>
}

export default AddForm;