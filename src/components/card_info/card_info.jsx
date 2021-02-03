import React, { useEffect, useRef } from 'react';
import styles from './card_info.module.css';

const CardInfo = ({cardItem,onUpload}) => {
    const addref=useRef(null);
    const fileref=useRef(null);
    const filebtn=useRef(null);
    useEffect(()=>{
        if(Object.keys(cardItem).length===0){
            addref.current.textContent="Add";
        }
    },[]);

    const handlefileUpload=()=>{
        fileref.current.click();
    }

    const fileupload=async ()=>{
        filebtn.current.style.background="pink";
        const load=document.createElement("div");
        load.classList.add(styles.loader);
        filebtn.current.textContent="";
        filebtn.current.appendChild(load);

        const user_info=await onUpload(fileref.current.files,cardItem);

        filebtn.current.textContent=user_info.original_filename;
    }
    return (<div className={styles.editor}>
        <input type="text" defaultValue={cardItem.name} className={styles.input} placeholder="Name"/>
        <input type="text" defaultValue={cardItem.company} className={styles.input} placeholder="Company"/>
        <select name="color" id="select" className={styles.select}>
            <option defaultValue="Light">Light</option>
            <option defaultValue="Dark">Dark</option>
            <option defaultValue="Colorful">Colorful</option>
        </select>
        <input type="text" defaultValue={cardItem.Title} className={styles.input} placeholder="Title"/>
        <input type="text" defaultValue={cardItem.email} className={styles.input} placeholder="Email"/>
        <textarea name="discription" id="discription" cols="30" rows="2" className={styles.text} defaultValue={cardItem.discription} placeholder="Message"></textarea>
        <button className={styles.file} onClick={handlefileUpload} ref={filebtn}>No file</button>
        <input type="file" ref={fileref} onChange={fileupload} className={styles.fileinput}/>
        <button className={styles.button} ref={addref}>Delete</button>
    </div>
    );
}

export default CardInfo;