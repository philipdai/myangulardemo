// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {
	$scope.name = "Jane Doe";
	$scope.occupation = "Coder";
	
	$scope.getName = function() {
		return $scope.name;
	}
  console.log($scope.getName());  
}]);



