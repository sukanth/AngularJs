/**
 * 
 */

(function() {
	var app = angular.module("gitHubViewer", [ "ngRoute" ]);
	app.config(function($routeProvider) {
		$routeProvider
		.when("/main", {
			templateUrl : "main.jsp",
			controller : "MainController"
		})
		.when("/user/:username",{
			templateUrl : "user.jsp",
			controller : "UserController"
		})
		.otherwise({
			redirectTo : "/main"
		});
	});

}());