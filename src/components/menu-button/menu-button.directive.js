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
})();