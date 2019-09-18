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
		if($(window).width() > 1279){
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
		else{
			$('.awards-items').trigger('destroy.owl.carousel');
		}
	}
	let awarDescriptionShow = () =>{
		if($(window).width() > 1279){
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
		else{
			return
		}
	}
	
	awardCarousel();	
	awarDescriptionShow();				
	
	$(window).resize(function () {		
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function(){
			awardCarousel();	
			awarDescriptionShow();	
		}, 250);      
	  });
}