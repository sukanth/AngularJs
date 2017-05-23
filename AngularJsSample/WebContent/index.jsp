<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html ng-app="gitHubViewer">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Angular Sample</title>
<script src="scripts/angular.js"></script>
<script src="scripts/angular-route.js"></script>
<script src="scripts/app.js"></script>
<script src="scripts/MainController.js"></script>
<script src="scripts/UserController.js"></script>
<script src="scripts/github.js"></script>
</head>
<body>
	<h1>GitHub Viewer</h1>
	<div ng-view></div>
</body>
</html>
