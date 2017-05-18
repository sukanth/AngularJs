<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Angular Sample</title>
<script src="scripts/angular.js"></script>
<script src="scripts/app.js"></script>
</head>
<body>
	<div ng-app="myAngular">
		<div ng-controller="firstController">
			<h1>{{message}}</h1>
			<div style="color: red">{{error}}</div>
			<form name="searchUser" ng-submit="search(username)">
				<input type="search" required placeholder="username to search"
					ng-model="username"> <input type="submit" value="search">
			</form>
			<div ng-include="'UserDetails.jsp'" ng-show="userInformation"></div>
		</div>
	</div>
</body>
</html>