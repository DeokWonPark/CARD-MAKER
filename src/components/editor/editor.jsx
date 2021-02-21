import React from 'react';
import AddForm from '../addForm/addForm';
import EditForm from '../editFrom/editForm';
import styles from './editor.module.css';

const Editor = ({cards}) => {
    return <section className={styles.Editor}>
        <h2 className={styles.title}>Card Editor</h2>
        <div className={styles.editorBox}>
            {Object.keys(cards).map((key)=>{
                return <EditForm card={cards[key]} key={key}></EditForm>
            })}
            <AddForm></AddForm>
        </div>
    </section>
}

export default Editor;