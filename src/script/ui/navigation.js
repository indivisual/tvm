var Tvm = Tvm || {};

Tvm.Navigation = (function(){

	var _api = {};
	var _previousPage;


	/* Go to specific page */
	_api.goto = function( page,  callback ) {
		_previousPage = Tvm.vars.page;
		if(_previousPage !== page) {
			$('[data-navigation='+_previousPage+']').hide();
		}
		$('body').scrollTop(0);
		$('[data-navigation='+page+']').fadeIn('slow',callback);
		Tvm.vars.page = page;
	}


	/* Go to next page */
	_api.next = function() {
		_api.goto(Tvm.vars.page + 1);
	}


	/* Go to previous page */
	_api.prev = function() {
		_api.goto(_previousPage);
	}


	_api.goToSection = function( section ) {
		console.log('section',section);
		var _sectionNumber = $( '.' + section ).parent('section').attr('data-navigation');
		console.log('_sectionNumber',_sectionNumber);
		_api.goto(_sectionNumber);
	}



	return _api;

})();