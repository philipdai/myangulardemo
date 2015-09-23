// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$timeout', '$log', '$filter', '$resource', function($scope, $timeout, $log, $filter, $resource) {
	$log.log("This is some log.");
	$log.info("This is some info.");
	$log.warn("This is some warning!");
	$log.debug("This is some debug info.");
	$log.error("This is some error infor!");
	
	$scope.name = "Philip Dai";
	$scope.formattedName = $filter('uppercase')($scope.name);
	$log.log("The name is " + $scope.name);
	$log.log("The formatted name is " + $scope.formattedName);
	
	$log.log($resource);
	
	$timeout(function() {
		$scope.name = "Everybody";
	}, 3000);
	
	$scope.handle = "";
	
	$scope.lowercaseHandle = function() {
		return $filter('lowercase')($scope.handle);
	}
}]);

