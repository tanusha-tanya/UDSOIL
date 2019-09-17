let awards = document.querySelector('.awards');

if(awards){	
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
	
	let awardCarousel = () =>{
		$('.awards-items').owlCarousel({
			items:4,
			dots: false,
			nav:true,
			navContainer: '.awards-arrows',
			navElement: 'div class="peopleslider-arrow"',
			navText: ['<svg role="img" width="11" height="14"><use xlink:href="#triangle"></use></svg>','<svg role="img" width="11" height="14"><use xlink:href="#triangle"></use></svg>'],
			responsive:{
				1920 : {
					items:6,										
				}
			}
		}) 
	}
	let awarDescriptionShow = () =>{
		let description = document.querySelector('.awards-js-description');
		let awardsItem = document.querySelectorAll('.awards-item');
		
		awardsItem.forEach((item)=>{
			item.addEventListener('mouseover', ()=>{
				let text = item.parentElement.querySelector('.awards-description p').textContent
				description.textContent = text;
			})
			item.addEventListener('mouseout', ()=>{				
				description.textContent = '';
			})
		})
	}

	if($(window).width() > 1279){
		awardCarousel();	
		awarDescriptionShow();				
	}
	
}