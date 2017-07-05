jQuery(document).ready(function($) {
	
	var isDesktop = $(window).width() > 767;


	function init() {
		setBurguerMenu();
	} /* fin init */



	/* Burguer menu */
	function setBurguerMenu() {
		$('#burguer-menu').on('click', function(e) {
			e.preventDefault();
			$('.main-menu').toggleClass('open-menu');
		});
	}



	init();
});