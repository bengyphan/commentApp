var result = document.getElementById("result");

function leaveComment() {

	var nameInput = document.getElementById("username").value;
	var commentInput = document.getElementById("comment").value;
	var displayName = document.createElement("h1");
		displayName.innerText = "Username: " + nameInput;

	var displayComment = document.createElement("h2");
		displayComment.innerText = "Comment: " + commentInput;

	result.appendChild(displayName);
	result.appendChild(displayComment);

	document.body.appendChild(result);
}