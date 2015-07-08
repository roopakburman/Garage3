'use strict';
var starter = angular.module('starter.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', registerFunc);
function registerFunc($scope, $window, $location){
$scope.go = function ( path ) {
  $location.path( path );
};
$scope.register = function(){
	    var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		ref.createUser({
		email : $scope.user.uEmail,
		password : $scope.user.password
		}, function(error, userData) {
		if (error) {
		console.log("Error creating user:", error);
		} else {
		console.log("Successfully created user account with uid:", userData.uid);
		
		}

		});
}	
}