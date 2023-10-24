const inputs=document.getElementsByClassName('form-input');
const form=document.getElementById('formulario');
const nombreInput= document.getElementById('nombre');
const correoInput= document.getElementById('correo');
const telefonoInput= document.getElementById('telefono');
const mensajeInput= document.getElementById('mensaje');
const botonEnviar=document.getElementById('boton-submit')


for(var i=0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijarse')
        }else{
            this.nextElementSibling.classList.add('remover')
        }

    })

}


const EMAIL_REGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%])[A-Za-z\d@#$!%]{8,}$/;
const PHONE_REGEX=/^\d{3}-\d{3}-\d{4}$/;

const isEmpty=value =>value===' '; //true si la cadena esta vacia, sirve para nombre.

const isBetween= (lenght, min, max)=> lenght>min&&lenght<max;//si el largo esta entre max y min, sirve para nombre.

const isMailValid=email=>{
return EMAIL_REGEX.test(email)
}

const isPasswordValid= password=>{
   return PASSWORD_REGEX.test(password);
}

const isPhoneValid= phone=>{
    return PHONE_REGEX.test(phone);
}


//////////////////////////////////////////////////

const error = (input,mensaje)=>{
    const formFiled=inputs.parentElement;
    formFiled.classList.remove('sucess');
    formFiled.classList.add('error')
}

const checkUsername=()=>{
    let valid=false;

    const min=3;
    const max=25;
}