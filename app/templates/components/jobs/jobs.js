const jobs = document.querySelector('.jobs');
if(jobs){
    let openerCollection = document.querySelectorAll('.jobs-openner'),
    jobsitems = document.querySelectorAll('.jobs-item')
    openerCollection.forEach((opener)=>{
        opener.addEventListener('click', ()=>{
            let parrent = opener.closest('.jobs-item')
            for(let i = 0; i < jobsitems.length; i++){
                //console.log(jobsitems[i] !== parrent)
                if(jobsitems[i] !== parrent){
                    jobsitems[i].classList.remove('jobs-item__open')
                }
            }              
            if(parrent.classList.contains('jobs-item__open')){
                parrent.classList.remove('jobs-item__open')      
            }
            else{
                parrent.classList.add('jobs-item__open')
            }
        })        
    })
}