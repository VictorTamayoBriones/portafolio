import addMessage from '../../firebase/addMessage.mjs';

const Email = document.querySelector('#email');
const Message = document.querySelector('#mensaje');
const BtnEnviar = document.querySelector('#enviar');

BtnEnviar.addEventListener('click', ()=>{
    let correo = Email.value;
    let mensaje = Message.value;

    addMessage(correo, mensaje);
});