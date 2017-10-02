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
				$scope.openMenu = function(){
					var $body = $("body");
					var $overlay = $(".lst-menu-button__overlay");
					if(!$overlay || !$overlay.length){
						$overlay = $('<div class="lst-menu-button__overlay"></div>');

						var $close = $('<span class="lst-menu-button__close" ng-click="closeMenu()">X</span>');
						$overlay.append($close);

						var $menuContent = $($scope.menu);
						$overlay.append($menuContent);

						$body.append($overlay);
					}

					$overlay.css("display", "block");
					$body.css("overflow", "hidden");
				};

				$scope.closeMenu = function(){
					console.log("Closing menu");
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
})();