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
		var getRepoDetails = function(userName, repoName) {
			var repo;
			var repoUrl = "https://api.github.com/repos/"+userName+"/"+repoName;
			return $http.get(repoUrl).then(function(response){
				repo = response.data;
				return repo;
			});
		};
		return {
			getUser : getUser,
			getRepos : getRepos,
			getRepoDetails : getRepoDetails
		};
	};
	var module = angular.module("gitHubViewer");
	module.factory("github", github);
}());
