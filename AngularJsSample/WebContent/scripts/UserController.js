/**
 * 
 */
(function() {
	var app = angular.module("gitHubViewer");

	var UserController = function($scope, github, $routeParams) {
		var onResponseGitData = function(data) {
			$scope.userInformation = data;
			github.getRepos($scope.userInformation).then(onRepos, onError);
		};
		var onRepos = function(data) {
			$scope.repos = data;
		};
		var onError = function(reason) {
			$scope.error = "something went wrong while retrieving information";
		};
		$scope.username = $routeParams.username;
		$scope.repoSortOrder = "+language";
		github.getUser($scope.username).then(onResponseGitData, onError);
	};
	app.controller("UserController", UserController);
}());
