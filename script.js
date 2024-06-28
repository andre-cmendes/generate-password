
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXZ0123456789!@#$%&/()=/?<>-_.;,~^´`+*{}[]§£"
let novaPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
	sizePassword.innerHTML = this.value;
}

function generatePassword(){

	let pass = "";

	for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
		pass += charset.charAt(Math.floor(Math.random() * n));
	}

	containerPassword.classList.remove("hide");
	password.innerHTML = pass;
	novaPassword = pass;

}

function copyPassword(){
	alert("Password foi copiada!")
	navigator.clipboard.writeText(novaPassword);
}