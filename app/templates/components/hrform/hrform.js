let hrForm = document.querySelector('.hr-resume');
if(hrForm){
    let inputs = document.querySelectorAll('.hr-input')
    inputs.forEach((input) => {
        input.addEventListener('input', ()=>{
            let label = input.closest('.hr-fieldset').querySelector('.hr-label')
            if(input.value.length > 0){
                input.classList.add('notempty')
                label.classList.add('notempty')
            }
            else{
                input.classList.remove('notempty')
                label.classList.remove('notempty')
            }
        })
    })
}

let ajaxforms = document.querySelectorAll('.js-ajaxform')

if(ajaxforms.length > 0){
    ajaxforms.forEach((form)=>{
        let inputs = form.querySelectorAll('.js-input'),
            button = form.querySelector('.js-button'),
            files = form.querySelectorAll('.js-file');

        inputs.forEach((input)=>{
            input.addEventListener('input', ()=>{
                checkForm(inputs, button)
            })
        })

        button.addEventListener('click', (e)=>{
            e.preventDefault();
            if(button.classList.contains('disabled')){
                return
            }
            else{
                form.submit()
            }
        })

        files.forEach((file)=>{
            file.addEventListener('change', ()=>{
                let label = file.parentNode.querySelector('label');
                if(file.value.length > 0){
                    label.innerHTML =  file.value
                }
            })
        })
    })
}
let checkForm = (inputs, button) => {
    let j = inputs.length;
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value.length > 0){
            j--   
        } 
    }
    if(j == 0){
        button.classList.remove('disabled')
        button.removeAttribute("disabled");
    }
    else{
        button.classList.add('disabled')
        button.setAttribute("disabled", "disabled");
    }
}

