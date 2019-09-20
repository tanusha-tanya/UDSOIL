let securityToggler = document.querySelectorAll('.security-documents-title')
if(securityToggler.length > 0){
    let securityFunction = function(){
        if(window.innerWidth < 1990){
            let items = document.querySelectorAll('.security-documents-item')
            securityToggler.forEach((toggler)=>{
                toggler.addEventListener('click', () =>{            
                    let parent = toggler.parentElement;
                    if(parent.classList.contains('active')){
                        parent.classList.remove('active')
                    }
                    else{
                        parent.classList.add('active')
                    }
                    for(let i = 0; i < items.length; i++){
                        if(items[i] !== parent){
                        items[i].classList.remove('active') 
                        }
                    }     
                })
            })
        }
    }
    securityFunction()
}