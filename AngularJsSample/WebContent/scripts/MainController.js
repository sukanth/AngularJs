/**
 * 
 */
(function() {
	var app = angular.module("gitHubViewer");
	var MainController = function($scope, $interval, $location) {
		var decrementCountDown = function() {
			$scope.countdown -= 1;
			if ($scope.countdown < 1) {
				$scope.search($scope.username);
			}
		}
		var countDownInterval = null;
		var startCountDown = function() {
			countDownInterval = $interval(decrementCountDown, 2000,
					$scope.countdown);
		};
		$scope.search = function(username) {
			if (countDownInterval) {
				$interval.cancel(countDownInterval);
				$scope.countdown = null;
			}
			$location.path("/user/" + username);
		};
		$scope.username = "sukanth";
		$scope.countdown = 10;
		startCountDown();
	};
	app.controller("MainController", MainController);
}());
