/*
Requires jQuery.
*/

var Tvm = Tvm || {};

var tabHeight;
var tabSelected;
var tabContentOpen;

Tvm.Tabs = (function(){

	var _api = {};

	function init() {

	}

	_api.setupTabs = function(tabsScope, tabActive, tabTrigger, tabEvent) {

		//setup initial tab
		//active current tab
		tabSelected = $('.tab', tabsScope).eq(tabActive);
		tabSelected.addClass('tab--active');
		//show current tab content
		tabContentOpen = $('.tab-content', tabsScope).eq(tabActive);
		tabContentOpen.addClass('open');
		tabContentOpen.fadeIn(0, function () {
			setupTabHeight(tabsScope, tabContentOpen);
		});

		//trigger to change visible tab
		tabsScope.find('.tab ' + tabTrigger).off(tabEvent).on(tabEvent, function(e) {
			if(e) {e.preventDefault();}

			tabsScope.find('.tab').removeClass('tab--active');
			tabSelected = $(this).parents('.tab').attr('data-js-target');
			//active new current tab
			$(this).parents('.tab').addClass('tab--active');

			tabsScope.find('.tab-content').stop().fadeOut().removeClass('open');
			tabContentOpen = $('.tab-content', tabsScope).eq(tabSelected);
			//show new current tab content
			tabsScope.find(tabContentOpen).stop().fadeIn().addClass('open');

			setupTabHeight(tabsScope, tabContentOpen);
		});
	};

	_api.removeTabs = function(tabsScope) {
		tabsScope.find('.tab-content').removeClass('open').hide();
		tabsScope.find('.tab').removeClass('tab--active');
	}

	function setupTabHeight(tabsScope, tabContentOpen){
		tabHeight = tabContentOpen.outerHeight();

		tabsScope.find('.tabs__container').animate({
			height: tabHeight
		},400);
	}

	

	return _api;

})();
