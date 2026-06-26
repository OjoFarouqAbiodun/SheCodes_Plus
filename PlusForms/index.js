// Challenge 1
let specialButton = document.querySelector("#special-button");

function clicked() {
	alert("Hooray!");
}

specialButton.addEventListener("click", clicked);

// Challenge 2
let passwordForm = document.querySelector("#password-form");

function passwordSubmit(event) {
	event.preventDefault();
	let passwordInput = document.querySelector("#password-input");
	let submitButton = document.querySelector("#submit-btn");

	if (passwordInput.value) {
		alert(`Your super secret password is ${passwordInput.value}`);
	} else {
		alert("Please enter a password before submitting.");
	}

	submitButton.addEventListener("click");
}

passwordForm.addEventListener("submit", passwordSubmit);

// Challenge 3
let signupForm = document.querySelector("#signup-form");
function signupSubmit(event) {
	event.preventDefault();
	let emailInput = document.querySelector("#email-input");
	let usernameInput = document.querySelector("#username-input");
	let signupSubmitButton = document.querySelector("#signup-submit-btn");

	function signupSubmitted(event) {
		event.preventDefault();
		alert(
			`Your email is ${emailInput.value} and Your username is ${usernameInput.value}`,
		);
	}

	signupSubmitButton.addEventListener("click", signupSubmitted);
}
signupForm.addEventListener("submit", signupSubmit);
