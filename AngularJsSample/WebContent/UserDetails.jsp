<div>
	<p>Name : {{userInformation.login}}</p>
	<p>Location : {{userInformation.location}}</p>
	<p>
		Github URL : <a href="{{userInformation.html_url}}" target="_blank">{{userInformation.html_url}}</a>
	</p>
	<p>
		Image : <img ng-src="{{userInformation.avatar_url}}" height="30%"
			width="20%">
	</p>
	order: <select ng-model="repoSortOrder">
		<option value="+name">Name</option>
		<option value="-stargazers_count">Stars</option>
		<option value="+language">Language</option>
	</select>
</div>
<table border="1%">
	<thead>
		<tr>
			<th>Name</th>
			<th>language</th>
			<th>stars</th>
			<th>Default branch</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="repo in repos | orderBy: repoSortOrder | limitTo:100">
			<td>{{repo.name | uppercase}}</td>
			<td>{{repo.language}}</td>
			<td>{{repo.stargazers_count | number}}</td>
			<td>{{repo.default_branch}}</td>
		</tr>
	</tbody>
</table>