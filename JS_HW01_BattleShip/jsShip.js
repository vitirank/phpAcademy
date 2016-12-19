var ship1 = 3;
var ship2 = 4;
var ship3 = 5;

function hit() {
	var fieldNumber = prompt("Enter Number of the Filed from 0 to 6");
	var isValid = fieldNumber > 0 && fieldNumber < 7 && !isNaN(fieldNumber);

	if(isValid) { 

		console.log("You Hit # " + fieldNumber);

		if(ship1 == fieldNumber || ship2 == fieldNumber || ship3 == fieldNumber) {
			console.log("You Hit");
			highLight(fieldNumber);

			if(checkIfSank()) {
				console.log("You Won");
				setTimeout(
					function() {
						alert("Congrats! You Won");
					}, 0);

			}

		} else {
			console.log("You miss. Hit Again");
		}

	} else {
		console.error("Not Valid Input")
	}
}

function highLight(id) {
	var fieldId = "field" + id;
	var field = document.getElementById(fieldId);
	var fieldClass = field.getAttribute("class");
	field.setAttribute("class", fieldClass + " ship");
}

function checkIfSank() {
	var hittedFileds = document.getElementsByClassName("ship");
	return hittedFileds.length > 2;

}