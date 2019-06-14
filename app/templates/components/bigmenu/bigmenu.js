const bigmenu = document.querySelector('.bigmenu')
if(bigmenu){
    let menuUl = document.querySelector('.bigmenu-ul'),
        menuLi = document.querySelectorAll('.bigmenu-li__sub');
    menuLi.forEach((li) => {
        li.addEventListener('click', () =>{
            if(!li.classList.contains('open')){
                for(let i = 0; i < menuLi.length; i++){
                    menuLi[i].classList.remove('open');                
                }
                li.classList.add('open');
                menuUl.classList.add('open');
            }          
            else{
                li.classList.remove('open');
                menuUl.classList.remove('open');
            }
        })
    })
    document.body.addEventListener('click', (e) => {
        if(menuUl.classList.contains('open')){            
            if(!e.target.closest('.bigmenu') && !e.target.classList.contains('bigmenu')){
                for(let i = 0; i < menuLi.length; i++){
                    menuLi[i].classList.remove('open');                
                }
                menuUl.classList.remove('open');
            }
        }
    })
}