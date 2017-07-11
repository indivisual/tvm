var Tvm = Tvm || {};

Tvm.Events = function(){

	var _api = {};

	function init() {
		setNavigationButtons();
		setChooseUniqueButtons();
		setChooseMultipleButtons();
	}

	function setNavigationButtons() {
		$( Tvm.vars.path ).on( 'click', '[data-goto]', function( event ) {
			event.preventDefault();
			if(typeof $(this).attr('data-goto') == 'number' ) {
				Tvm.Navigation.goto($(this).attr('data-goto'));
			} else {
				switch($(this).attr('data-goto')) {
					case 'next':
						Tvm.Navigation.next();
						break;

					case 'prev':
						Tvm.Navigation.prev();
						break;

					default:
						Tvm.Navigation.goToSection($(this).attr('data-goto') + '-section');
				}
			}
		});
	}


	function setChooseUniqueButtons() {
		$( Tvm.vars.path + ' .choose-unique' ).on( 'click', '.btn-multiple', function( event ) {
			event.preventDefault();
			$(this).siblings().removeClass('selected');
			$(this).addClass('selected');
			$(this).parents('.choose-unique').attr('data-validate',true);
			$(this).parents('.input-group').next('.input-group').removeClass('disabled');
			checkPageValidation();
		});
	}


	function setChooseMultipleButtons() {
		$( Tvm.vars.path + ' .choose-multiple' ).on( 'click', '.btn-multiple', function( event ) {
			event.preventDefault();
			$(this).addClass('selected');
			$(this).parents('.choose-unique').attr('data-validate',true);
			$(this).parents('.input-group').next('.input-group').removeClass('disabled');
			checkPageValidation();
		});
	}


	function checkPageValidation() {
		var notValidated = true;
		$('[data-navigation=' + Tvm.vars.page + '] [data-validate]').each(function() {
			if($(this).attr('data-validate')) {
				notValidated = false;
			} else {
				notValidated = true;
				return false;
			}
		});
		if(!notValidated) {
			$('[data-navigation=' + Tvm.vars.page + '] [data-continue]').removeClass('btn-disabled');
		}
	}


	init();
	return _api;

};