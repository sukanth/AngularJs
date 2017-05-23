/**
 * Service for Github
 */
(function() {
	var github = function($http) {
		var getUser = function(username) {
			return $http.get("https://api.github.com/users/" + username).then(
					function(response) {
						return response.data;
					});
		};
		var getRepos = function(userInformation) {
			return $http.get(userInformation.repos_url).then(
					function(response) {
						return response.data;
					});
		};
		return {
			getUser : getUser,
			getRepos : getRepos
		};
	};
	var module = angular.module("gitHubViewer");
	module.factory("github", github);
}());