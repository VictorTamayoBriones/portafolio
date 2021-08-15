import {db} from './firebaseConfig.mjs';

const addMessage = (email, message)=>{
    db.collection('correos').add({email, message})
    .then(()=>{
        alert('Se envio el mensaje');
    }).catch((err)=>{
        alert(err);
    });
}

export  {addMessage};