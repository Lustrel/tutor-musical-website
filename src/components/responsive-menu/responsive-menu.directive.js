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