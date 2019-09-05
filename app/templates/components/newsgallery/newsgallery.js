$(document).ready(function() {
	$('.newsgallery-pick').magnificPopup({
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