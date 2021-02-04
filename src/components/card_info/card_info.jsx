import React, { useEffect, useRef, useState, useCallback} from 'react';
import styles from './card_info.module.css';

const CardInfo = ({cardItem,onUpload,onAddandDelete}) => {

    const [card_item,setCardItem]=useState(cardItem);
    const addref=useRef(null);
    const fileref=useRef(null);
    const filebtn=useRef(null);

    const nameref=useRef(null);
    const companyref=useRef(null);
    const colorref=useRef(null);
    const titleref=useRef(null);
    const emailref=useRef(null);
    const descriptionref=useRef(null);

    useEffect(()=>{
        if(Object.keys(cardItem).length===0){
            addref.current.textContent="Add";
            const item={
                username:null,
                company:null,
                color:null,
                title:null,
                email:null,
                description:null,
                img:null,
                imgName:null,
            }
            setCardItem(item);
        }
        else{
            const item={
                username:cardItem.username,
                company:cardItem.company,
                color:cardItem.color,
                title:cardItem.title,
                email:cardItem.email,
                description:cardItem.description,
                img:cardItem.img,
                imgName:cardItem.imgName,
            }
            setCardItem(item);
            if(item.img!=="https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/default_logo.png"){
                filebtn.current.style.background="pink";
            }
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
        fileref.current.filename=user_info.secure_url;
        filebtn.current.textContent=user_info.original_filename;
    }

    const handleAdd=()=>{
        if(!fileref.current.filename){
            fileref.current.filename="https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/default_logo.png";
        }
        const item={
            username:nameref.current.value,
            company:companyref.current.value,
            color:colorref.current.options[colorref.current.selectedIndex].value,
            title:titleref.current.value,
            email:emailref.current.value,
            description:descriptionref.current.value,
            img:fileref.current.filename,
            imgName:filebtn.current.textContent,
        }
        onAddandDelete(item);
        resetForm();
    }

    const resetForm=useCallback(()=>{
        nameref.current.value="";
        companyref.current.value="";
        titleref.current.value="";
        emailref.current.value="";
        descriptionref.current.value="";
        fileref.current.filename="https://raw.githubusercontent.com/DeokWonPark/CARD-MAKER/master/public/images/default_logo.png";
        colorref.current.selectedIndex=0;
        filebtn.current.style.background="lightgray";
        filebtn.current.textContent="No file";
    })
    return (<div className={styles.editor}>
        <input type="text" defaultValue={cardItem.username} className={styles.input} placeholder="Name" ref={nameref}/>
        <input type="text" defaultValue={cardItem.company} className={styles.input} placeholder="Company" ref={companyref}/>
        <select name="color" id="select" className={styles.select} ref={colorref}>
            <option defaultValue="Light">Light</option>
            <option defaultValue="Dark">Dark</option>
            <option defaultValue="Colorful">Colorful</option>
        </select>
        <input type="text" defaultValue={cardItem.title} className={styles.input} placeholder="Title" ref={titleref}/>
        <input type="text" defaultValue={cardItem.email} className={styles.input} placeholder="Email" ref={emailref}/>
        <textarea name="discription" id="discription" cols="30" rows="2" className={styles.text} defaultValue={cardItem.description} placeholder="Message" ref={descriptionref}></textarea>
        <button className={styles.file} onClick={handlefileUpload} ref={filebtn}>{cardItem.imgName!=null?cardItem.imgName:"No file"}</button>
        <input type="file" ref={fileref} onChange={fileupload} className={styles.fileinput}/>
        <button className={styles.button} ref={addref} onClick={handleAdd}>Delete</button>
    </div>
    );
}

export default CardInfo;