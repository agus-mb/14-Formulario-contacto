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

const PHONE_REGEX=/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

const isEmpty=value =>value===''; //true si la cadena esta vacia, sirve para nombre.

const isBetween= (length, min, max)=> length>min&&length<max;//si el largo esta entre max y min, sirve para nombre.

const isMailValid=email=>{
return EMAIL_REGEX.test(email)
}


const isPhoneValid= phone=>{
    return PHONE_REGEX.test(phone);
}


//////////////////////////////////////////////////

const error = (input,mensaje)=>{
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const small = formField.querySelector('small');
    small.textContent = mensaje;
}

const sucess=(input)=>{
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const small = formField.querySelector('small');
    small.textContent = '';
}


const checkUsername=()=>{
    let valid=false;

    const min=3;
    const max=25;

    const username=nombreInput.value.trim();
    if(isEmpty(username)){

        error(nombreInput, "Este campo es obligatorio.")

    }else if (!isBetween(username.length, min, max)){

        error(nombreInput,`Debe tener entre ${min} y ${max}`)

    }else{
        sucess(nombreInput)
        valid=true;
    }
    return valid;
  
}

const checkEmail=()=>{
    let valid=false;
    const email= correoInput.value.trim()

    if(isEmpty(email)){
        error(correoInput, 'El mail es obligatorio')

    }else if(!isMailValid(email)){
        error(correoInput,'El mail es invalido')
    }else{
        sucess(correoInput)
        valid=true
    }
    return valid
}

const checkPhone=()=>{
    let valid=false;
    const phone= telefonoInput.value.trim()

    if(isEmpty(phone)){
        error(telefonoInput, 'El telefono es obligatorio')

    }else if(!isPhoneValid(phone)){
        error(telefonoInput,'El mail es invalido')
    }else{
        sucess(telefonoInput)
        valid=true
    }
    return valid
}

form.addEventListener('submit',e=>{
    e.preventDefault();

    const isUsernameValid= checkUsername();
    const isEmailValid= checkEmail();
    const isPhoneValid= checkPhone();

    const isFormValid=isUsernameValid && isEmailValid && isPhoneValid;


})
