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
})();