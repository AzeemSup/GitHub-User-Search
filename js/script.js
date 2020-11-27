const form = document.getElementById("my-form");

form.addEventListener('submit', function(e){
	e.preventDefault();

	const search = document.getElementById("search-area").value;

	document.getElementById("result").innerHTML = "";

	fetch("https://api.github.com/users/"+search)
	.then((result) => result.json())
	.then((data) => {
		console.log(data);
		document.getElementById("username").innerHTML = `
			<div>Username: ${data.login}</div>
		`;
		document.getElementById("fullname").innerHTML = `
			<div>Full Name: ${data.name}</div>
		`;
		document.getElementById("repos").innerHTML = `
			<div>Repositories: ${data.public_repos}</div>
		`;
		document.getElementById("account-created").innerHTML = `
			<div>Account created on: ${data.created_at}</div>
		`;
		document.getElementById("result").innerHTML = `
			<a target="_blank" href="https://www.github.com/${search}">	<img alt="no user exist!!" src="${data.avatar_url}"/> </a>
		`;
	})
})