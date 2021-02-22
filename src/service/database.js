import {firebaseDatabase} from './firebase';
class Database{

    write(card,userId){
        firebaseDatabase.ref(`${userId}/${card.id}`).set(card);
    }
    removeCard(card,userId){
        firebaseDatabase.ref(`${userId}/${card.id}`).remove();
    }
    read(userId, onUpdate){
        const starCountRef = firebaseDatabase.ref(`${userId}`);
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            data && onUpdate(data);
        });
        return ()=>{starCountRef.off();}
    }
}
export default Database;