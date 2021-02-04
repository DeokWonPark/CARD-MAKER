import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardPreview from '../cardPreview/cardPreview';
import CardMaker from '../cardMaker/cardMaker';
import styles from './cardPage.module.css';

const CardPage = ({card,auth,onUpload,onAdd,onRead,onDelete}) => {
    const history=useHistory();
    if(auth.user===null){
        history.push("/");
    }
    useEffect(()=>{
        onRead();
    },[])
    return<>
        <CardMaker card={card} onUpload={onUpload} onAdd={onAdd} onDelete={onDelete}></CardMaker>
        <CardPreview card={card}></CardPreview>
    </>
}

export default CardPage;