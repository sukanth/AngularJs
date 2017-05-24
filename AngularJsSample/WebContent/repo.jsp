<h2>Repository Name : {{repo.name}}</h2>
<div>
	<ul>
		<li>subscribers : {{repo.subscribers_count}}</li>
		<li>Created Date : {{repo.created_at}}</li>
		<li>Updated Date : {{repo.updated_at}}</li>
	</ul>
</div>

<a href="#/main">Back to Search</a>
<a href="#!/user/{{repo.owner.login}}">Back</a>