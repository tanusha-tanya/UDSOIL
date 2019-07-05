const tableSpoiler = document.querySelectorAll('.js-tablespoiler');
if(tableSpoiler.length > 0){
    let spoilerFunction = function(){
        if(window.innerWidth < 1990){
            let spoilerButtons = document.querySelectorAll('.js-openspoiler');
            let spoilers = document.querySelectorAll('.table-row');
            spoilerButtons.forEach((button) =>{
                button.addEventListener('click', ()=>{
                    let spoiler = button.parentElement;
                    for(let i = 0; i < spoilers.length; i++){
                        if(spoilers[i] !== spoiler){
                            spoilers[i].classList.remove('table-row__open');
                            spoilers[i].classList.add('table-row__close');
                        }               
                    }
                    if(spoiler.classList.contains('table-row__open')){
                        spoiler.classList.remove('table-row__open');
                        spoiler.classList.add('table-row__close');
                    }
                    else{       
                        spoiler.classList.remove('table-row__close');
                        spoiler.classList.add('table-row__open')       
                    }        
                })
            })
        }
    }
       
    spoilerFunction();

}