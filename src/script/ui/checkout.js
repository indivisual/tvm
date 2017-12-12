var Tvm = Tvm || {};
var isDesktop = $(window).width() > 767;

Tvm.Checkout = function(){

	var _api = {};

	function init() {
    showDiscountCodeForm();
    Tvm.Overlay.setOverlay($('.tvm-checkout'), 'overlay-checkout');
    if (!isDesktop) {
      Tvm.Tabs.setupTabs($('.overlay .tabs.overlay-checkout'), 1, 'a', 'click', true); 
    }
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