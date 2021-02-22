import React, { useRef } from 'react';
import FileInput from '../fileInput/fileInput';
import styles from './editForm.module.css';
const EditForm = ({card, updateCard,deleteCard,imageUpload,updateImg}) => {
    const nameRef=useRef(null);
    const companyRef=useRef(null);
    const titleRef=useRef(null);
    const emailRef=useRef(null);
    const messageRef=useRef(null);

    const handleCahnge=(event)=>{
        if(event.currentTarget==null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]:event.currentTarget.value,
        })
    }

    const handleDelete=(event)=>{
        event.preventDefault();
        deleteCard(card);
    }
    return <form className={styles.editform}>
        <input type="text" name="name" value={card.name} className={styles.input} onChange={handleCahnge} ref={nameRef}/>
        <input type="text" name="company" value={card.company} className={styles.input} onChange={handleCahnge} ref={companyRef}/>
        <input type="text" name="title" value={card.title} className={styles.input} onChange={handleCahnge} ref={titleRef}/>
        <input type="text" name="email" value={card.email} className={styles.input} onChange={handleCahnge} ref={emailRef}/>
        <textarea 
        name="message" 
        id="message" 
        value={card.message} 
        className={styles.textarea}
        onChange={handleCahnge}
        ref={messageRef}
        ></textarea>
        <div className={styles.BtnBox}>
            <FileInput id={card.id}fileName={card.imgName} imageUpload={imageUpload} updateImg={updateImg}></FileInput>
            <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
        </div>
    </form>
}

export default EditForm;