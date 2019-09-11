let awards = document.querySelector('.awards');

if(awards){
	$(document).ready(function() {
		$('.awards-item').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			tLoading: 'Загрузка #%curr%...',
			gallery: {
				enabled: true
			},
			image: {
				tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
			}				
		});
	});
	
	let awardsMore = document.querySelector('.awards-more')
	let awardsHide = document.querySelectorAll('.awards-block.hide')
	
	awardsMore.addEventListener('click', ()=>{
		for(let i = 0; i < 4; i++){
			if(awardsHide[i]){
				awardsHide[i].classList.remove('hide')
				
			}
			else{
				awardsMore.style.display = 'none'
			}
			
		}
		awardsHide = document.querySelectorAll('.awards-block.hide')
		if(awardsHide.length == 0){		
			awardsMore.style.display = 'none'
		}
	})
}