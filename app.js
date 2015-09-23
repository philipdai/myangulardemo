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

var searchPeople = function(firstName, lastName, height, age, occupation) {
	return "Jane Doe";
}

console.log(searchPeople(1, 2, 3, 4, 5));
console.log(searchPeople);

console.log(angular.injector().annotate(searchPeople));