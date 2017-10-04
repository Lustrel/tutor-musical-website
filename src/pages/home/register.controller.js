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

		$scope.areFieldsValid = function(){
			return (
				!!$scope.newUser.firstName &&
				!!$scope.newUser.lastName &&
				!!$scope.newUser.email &&
				!!$scope.newUser.birthday
			);
		}

		$scope.register = function(){
			if(!$scope.areFieldsValid()) return false;
			
			$http
				.post("http://tutormusical-api.azurewebsites.net/api/Account/Register", $scope.newUser)
				.then(function(res){
					$scope.alreadyRegistered = true;
				}, function(res){});
		};
	}
})();