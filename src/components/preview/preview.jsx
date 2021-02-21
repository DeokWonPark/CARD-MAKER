import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css'

const Preview = ({cards}) => {
    return <section className={styles.Preview}>
        <h2 className={styles.title}>Card Preview</h2>
        {Object.keys(cards).map((key)=>{
            return <Card card={cards[key]} key={key}></Card>
        })}
    </section>
}

export default Preview;