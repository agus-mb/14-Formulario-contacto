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

const isBetween= (length, min, max)=> length>min&&length<max;//si el largo esta entre max y min, sirve para nombre.

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

