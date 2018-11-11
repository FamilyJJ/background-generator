var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("button");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);

random.addEventListener("click", randomColor);

function randomColor() {
	var x = Math.floor((Math.random() * 999999) + 1);
	var y = Math.floor((Math.random() * 999999) + 1);
	body.style.background =
	"linear-gradient(to right, #"
	+ x
	+ ", #"
	+ y
	+ ")";

	css.textContent = body.style.background + ";";
}
