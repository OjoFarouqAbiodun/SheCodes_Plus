// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

let clickedBtn = document.querySelector("button");
clickedBtn.addEventListener("click", function clicked() {
	alert(`It is 18 degrees`);
});

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

let clickedBtn = document.querySelector("button");
clickedBtn.addEventListener("click", function clicked(event) {
	event.preventDefault();
	clickedBtn.innerHTML = `18 degrees`;
});
