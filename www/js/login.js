'use strict';
var starter = angular.module('starter.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', loginFunc);
function loginFunc($scope, $window, $location){
$scope.go = function ( path ) {
  $location.path( path );
};
$scope.login = function(){		
		var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		
		ref.authWithPassword({
		email : $scope.user.uName,
		password : $scope.user.password
		}, function(error, authData) {
		if (error) {
		console.log("Login Failed!", error);
		} else {
		console.log("Authenticated successfully with payload:", authData);
		window.location.href = '#/memberHome';
		
		}
		},{
			remember: "sessiononly"
		});

		}
	
}
