
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXZ0123456789!@#$%&/()=/?<>-_.;,~^´`+*{}[]§£"
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
	sizePassword.innerHTML = this.value;
}

function generatePassword() {

	let pass = "";

	for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
		pass += charset.charAt(Math.floor(Math.random() * n));
	}

	containerPassword.classList.remove("hide");
	password.innerHTML = pass;
	newPassword = pass;

}

function copyPassword() {
	alert("The password has copied!")
	navigator.clipboard.writeText(newPassword);
}