var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);

//body.style.background = "red";

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// function isUserValid(bool){
// 	return bool;
// }

// var answer = isUserValid(true) ?  "Acess granted" : "Access denied"

// var automatedAnswer = 
// 	"Your account is " + (isUserValid(true) ?  "1234" : "is Not available");

// var input = window.prompt("Enter a direction");
// moveCommand(input);

// function moveCommand(directioon){
// 	var whatHappens;

// 	switch (directioon){
// 		case "forward":
// 			whatHappens = "You encounter a monster";
// 		break;

// 		case "back":
// 			whatHappens = "You arrived home";
// 		break;

// 		case "right":
// 			whatHappens = "You found a river";
// 		break;

// 		case "left":
// 			whatHappens = "You run into a troll";
// 		break;

// 		default:
// 			whatHappens = "please enter a valid direction";
// 	}

// 	return whatHappens;
// }

// 