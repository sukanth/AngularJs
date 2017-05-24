/**
 * 
 */
(function() {
	var module = angular.module("gitHubViewer");

	var RepoController = function($scope, $routeParams, github) {
		var repoName = $routeParams.reponame;
		var userName = $routeParams.username;

		var onRepo = function(data) {
			$scope.repo = data;
		};
		var onError = function(reason) {
			$scope.error = reason;
		};

		github.getRepoDetails(userName, repoName).then(onRepo, onError);

	};

	module.controller("RepoController", RepoController);
}());