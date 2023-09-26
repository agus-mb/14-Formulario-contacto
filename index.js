const inputs=document.getElementsByClassName('form-input')
console.log(inputs)

for(var i=0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijarse')
        }else{
            this.nextElementSibling.classList.add('remover')
        }

    })

}