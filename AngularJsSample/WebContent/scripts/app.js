/**
 * 
 */

(function() {
	var app = angular.module("gitHubViewer", [ "ngRoute" ]);
	app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "main.jsp",
			controller : "MainController"
		})
		.when("/user/:username", {
			templateUrl : "user.jsp",
			controller : "UserController"
		})
		.when("/repo/:username/:reponame", {
			templateUrl : "repo.jsp",
			controller : "RepoController"
		})
		.otherwise({
			redirectTo : "/"
		});
	});
}());
