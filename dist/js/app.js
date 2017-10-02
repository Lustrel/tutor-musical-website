"use strict";

angular
	.module("Website", ["ngRoute"])
	.config(function($routeProvider, $httpProvider){
		var templatesPath = "./dist/templates/pages";

		// Routes configuration
		$routeProvider
			.when("/", { templateUrl: (templatesPath + "/home/home.template.html") });
	});; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstAccordionItem", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/accordion-item/accordion-item.template.html",
			transclude: true,
			replace: true,
			scope: {
				title: "@"
			},
			link: function(theScope, theElement, theAttributes){
				var $element = $(theElement);
				var $question = $element.find(".lst-title");
				var $content = $element.find(".lst-content");

				$content.css("display", "none");

				$question.click(function(){
					$content.slideToggle();
				});
			}
		};
	}
})();; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstMenuButton", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/menu-button/menu-button.template.html",
			transclude: true,
			replace: true,
			scope: {
				menu: "@"
			},
			link: function($scope){
				var $overlay = $(".lst-menu-button__overlay");
				var $items = $($scope.menu).clone();

				addContentToOverlay();

				function addContentToOverlay(){
					$overlay.append($items);
				}

				$scope.openMenu = function(){
					console.log("Opening menu");
					$overlay.css({ display: 'block' });
				};

				$scope.closeMenu = function(){
					console.log("Closing menu");
					$overlay.css({ display: 'none' });
				};
			}
		};
	}
})();; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstPriceBox", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/price-box/price-box.template.html",
			transclude: true,
			replace: true,
			scope: {
				title: "@",
				price: "@",
				description: "@",
				featured: "@"
			}
		};
	}
})();; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstResponsiveMenu", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/responsive-menu/responsive-menu.template.html",
			transclude: true,
			replace: true,
			scope: {
				links: "="
			},
			link: function($scope){
				$scope.openMenu = function(){
					
				}
			}
		};
	}
})();; 
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
})();; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstCallToAction", Directive);

	function Directive() {
		return {
			restrict: "A",
			link: function(theScope, theElement, theAttributes){
				// If window's width is less than 768, we don't need it
				var $window = $(window);
				if($window.width() < 768)
					return;

				var $boxes = $(theElement).find("[box-height-equalized]");

				var biggerHeight = getBiggerHeight($boxes);
				equalizeHeight($boxes, biggerHeight);

				function getBiggerHeight($elements)
				{
					var bigger = 0;
					$elements.each(function(){
						var height = $(this).outerHeight();
						bigger = (height > bigger) ? height : bigger;
					});
				
					return bigger;
				}
				
				function equalizeHeight($elements, height)
				{
					$elements.each(function(){
						$(this).css({ height: height + 'px' });
					});
				}
			}
		};
	}
})();