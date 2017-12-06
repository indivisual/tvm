var Tvm = Tvm || {};

Tvm.Checkout = function(){

	var _api = {};
	var estado;

	function init() {
    showDiscountCodeForm();
    Tvm.Overlay.setOverlay($('.tvm-checkout'), 'overlay-checkout');
	}

	
  function showDiscountCodeForm() {
    $('.order-summary__discount-link').on('click', function(e) {
      if(e) {e.preventDefault();}
      
        $(this).slideUp(300, function() {
          $(this).parents('.order-summary__discount').find('form').slideDown(300);
        });
      
    });
  }

	init();
	return _api;

}();