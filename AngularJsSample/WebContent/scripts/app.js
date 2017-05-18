/**
 * 
 */
(function() {
	var app = angular.module("myAngular", []);

	var firstController = function($scope, $http) {
		var onResponseGitData = function(response) {
			$scope.userInformation = response.data;
			$http.get($scope.userInformation.repos_url).then(onRepos,onError);
		};
		var onRepos = function(response){
			$scope.repos = response.data;
		};
		var onError = function(reason) {
			$scope.error = "something went wrong while retrieving information";
		};
		$scope.search = function(username){
			$http.get("https://api.github.com/users/"+username).then(onResponseGitData,
					onError);
		}
		
		$scope.username = "sukanth";
		$scope.message = "Welcome to Angular !!";
		$scope.repoSortOrder = "+language";
	};

	app.controller("firstController", ["$scope","$http",firstController]);
}());
