let awards = document.querySelector('.awards');
let yearsToggler = document.querySelector('.years-toggler');

let awardCarousel = () =>{
	if(window.innerWidth > 1139){			
		if(!$('.awards-items').hasClass('owl-loaded')){				
			$('.awards-items').owlCarousel({
				items:4,
				dots: false,
				nav:true,
				navContainer: '.awards-arrows',
				navElement: 'div class="peopleslider-arrow"',
				navText: ['<svg role="img" width="11" height="14"><use xlink:href="#triangle"></use></svg>','<svg role="img" width="11" height="14"><use xlink:href="#triangle"></use></svg>'],
				responsive:{
					1800 : {
						items:6,										
					}
				}
			}) 
		}			
	}
	else{			
		if($('.awards-items').hasClass('owl-loaded')){			
			$('.awards-items').trigger('destroy.owl.carousel');
		}	
	}
}

let  yearsSlick = function(){
    if(window.innerWidth < 767){
      if(!$('.years-items').hasClass('slick-initialized')){
          $('.years-items').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            infinite: false,
            asNavFor: '.years-toggler',
            mobileFirst: true,      
          });  
      }
      if(!$('.years-toggler').hasClass('slick-initialized')){
        $('.years-toggler').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.years-items',
            dots: false,
            arrows: false, 
            infinite: false,
            centerMode: false,
            focusOnSelect: true,           
        });
      }
    }   
    else{
      if($('.years-toggler').hasClass('slick-initialized')){       
        $('.years-toggler').slick('unslick');
      }
      if($('.years-items').hasClass('slick-initialized')){        
        $('.years-items').slick('unslick');
      }
    } 
  } 	

let awarDescriptionShow = () =>{
	if(window.innerWidth > 1139){
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
}
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
	awardCarousel();	
	awarDescriptionShow();

	if(yearsToggler){ 
		yearsSlick();
	}	
		
}	
$(window).resize(function () {		
	clearTimeout(window.resizedFinished);
	window.resizedFinished = setTimeout(function(){
	  yearsSlick();	
	  awardCarousel();	
	  awarDescriptionShow();	
	}, 250);      
  });	

  $('.awards-item-link').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	gallery: {
		enabled: true,
		navigateByImgClick: true
	}
  });