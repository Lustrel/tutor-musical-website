"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstBoxHeightEqualizer", Directive);

	function Directive() {
		return {
			restrict: "A",
			link: function(theScope, theElement, theAttributes){
				resizeElementsHeight();

				function resizeElementsHeight() {
					// If window's width is less than 768, we don't need it
					var $window = $(window);
					if($window.width() < 768)
						return;

					var $boxes = $(theElement).find("[box-height-equalized]");

					var biggerHeight = getBiggerHeight($boxes);
					equalizeHeight($boxes, biggerHeight);
				}

				function getBiggerHeight($elements) {
					var bigger = 0;
					$elements.each(function(){
						var height = $(this).outerHeight();
						bigger = (height > bigger) ? height : bigger;
					});
				
					return bigger;
				}
				
				function equalizeHeight($elements, height) {
					$elements.each(function(){
						$(this).css({ height: height + 'px' });
					});
				}
			}
		};
	}
})();