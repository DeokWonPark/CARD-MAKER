import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardPreview from '../cardPreview/cardPreview';
import CardMaker from '../cardMaker/cardMaker';
import styles from './cardPage.module.css';

const CardPage = memo(({card,auth,onUpload,onAdd,onRead,onDelete}) => {
    const history=useHistory();
    useEffect(()=>{
        onRead();
    },[auth.user])

    if(sessionStorage.getItem('users')===null){
        history.push("/");
    }
    return<>
        <CardMaker card={card} onUpload={onUpload} onAdd={onAdd} onDelete={onDelete}></CardMaker>
        <CardPreview card={card}></CardPreview>
    </>
})

export default CardPage;