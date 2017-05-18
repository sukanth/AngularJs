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
			<div ng-show="userInformation">
				<p>Name : {{userInformation.login}}</p>
				<p>Location : {{userInformation.location}}</p>
				<p>
					Github URL : <a href="{{userInformation.html_url}}" target="_blank">{{userInformation.html_url}}</a>
				</p>
				<p>
					Image : <img ng-src="{{userInformation.avatar_url}}" height="30%"
						width="20%">
				</p>
				order:
				<select ng-model="repoSortOrder">
					<option value="+name">Name</option>
					<option value="-stargazers_count">Stars</option>
					<option value="+language">Language</option>
				</select>
			</div>
			<table border="1%" ng-show="userInformation">
				<thead>
					<tr>
						<th>Name</th>
						<th>language</th>
						<th>stars</th>
						<th>Default branch</th>
					</tr>
				</thead>
				<tbody>
					<tr
						ng-repeat="repo in repos | orderBy: repoSortOrder | limitTo:100">
						<td>{{repo.name | uppercase}}</td>
						<td>{{repo.language}}</td>
						<td>{{repo.stargazers_count | number}}</td>
						<td>{{repo.default_branch}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>