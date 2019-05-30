const mobilemenu = document.querySelector('.mobilemenu');
if(mobilemenu){
    const gamburger = document.querySelector('.gamburger');
    const close = document.querySelector('.mobilemenu-close');
    gamburger.addEventListener('click', () => {
        toggleMenu()
    })
    close.addEventListener('click', () => {
        toggleMenu()
    })
    let toggleMenu = () => {
        mobilemenu.classList.toggle('active');
        document.body.classList.toggle('dark')
    }

    let  listSub = document.querySelectorAll('.mobilemenu-li__sub');
    document.body.addEventListener('click', (e) => {
        if(!e.target.closest('.mobilemenu.active') && !e.target.closest('.gamburger') && e.target !== gamburger){
            mobilemenu.classList.remove('active');
            document.body.classList.remove('dark')
        }        
    })
    if (listSub){
        listSub.forEach((sub) => {
            sub.addEventListener('click', (e) => {               
                if(!sub.classList.contains('active')){
                    for(let i = 0; i < listSub.length; i++){
                        listSub[i].classList.remove('active')   
                    }
                    sub.classList.add('active')   
                }
                else{
                    if(!e.target.closest('.mobilemenu-sub-ul')){
                        sub.classList.remove('active') 
                    }
                }
            })
        })

    }
}