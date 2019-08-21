$(document).ready(function() {
	$('.newsgallery-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка #%curr%...',
		mainClass: 'newsgallery-pick',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
		}
	});
});