// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', function($scope, $log, $filter, $resource) {
	$log.log("This is some log.");
	$log.info("This is some info.");
	$log.warn("This is some warning!");
	$log.debug("This is some debug info.");
	$log.error("This is some error infor!");
	
	$scope.name = "John";
	$scope.formattedName = $filter('uppercase')($scope.name);
	$log.log("The name is " + $scope.name);
	$log.log("The formatted name is " + $scope.formattedName);
	
	$log.log($resource);
}]);

