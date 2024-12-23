jQuery(document).ready(function($){
	var $window = $(window);
	
	$('body').bind('touchstart touchmove touchend');
	
	$('.faq .collapse').on('shown.bs.collapse', function() {
		$(this).parent().find('.closed').removeClass('closed').addClass('opened');
	}).on('hidden.bs.collapse', function() {
		$(this).parent().find('.opened').removeClass('opened').addClass('closed');
	});
});