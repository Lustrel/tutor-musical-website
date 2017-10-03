"use strict";

(function(){
	angular
		.module("Website")
		.controller("RegisterController", ["$scope", "$http", Controller]);

	function Controller($scope, $http){
		$scope.newUser = {
			firstName: '',
			lastName: '',
			email: '',
			birthday: '',
			newsletter: true
		};

		$scope.register = function(){
			console.log($scope.newUser);
			$http
				.post("http://tutormusical-api.azurewebsites.net/api/Account/Register", $scope.newUser)
				.then(function(res){
					$scope.successMessage = "Oba! Você se cadastrou no app. Que tal fazer download dele agora?"
				});
		};
	}
})();