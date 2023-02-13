const inputs = document.querySelectorAll("input");
const form = document.getElementById("myForm");
const cardNumber = document.querySelector(".card__front-number");
const cardOwner = document.querySelector(".nameSurname");
const expDateM = document.querySelector(".dateMM");
const expDateY = document.querySelector(".dateYY");
const cvcNum = document.querySelector(".card__back-cvc");
const thanksBox = document.querySelector(".cardDataThanks");
const errors = document.querySelectorAll(".error");
const contBtn = document.querySelector(".continueBtn");

console.log(errors);

window.addEventListener("load", () => {
	inputs.forEach((e) => {
		e.value = "";
	});
	cardOwner.textContent = "Jane Appleseed";
	cardNumber.textContent = "0000 0000 0000 0000";
	expDateM.textContent = "00/";
	expDateY.textContent = "00";
	cvcNum.textContent = "000";
});

inputs.forEach((e) => {
	e.addEventListener("input", () => {
		var regExp = /[a-zA-Z]/g;
		if (e == inputs[0] && e.value == "") {
			console.log("Trafiłeś mnie, ale jestem pusty");
			cardOwner.textContent = "Jane Appleseed";
		} else if (e == inputs[0]) {
			cardOwner.textContent = e.value;
		}
		if (e == inputs[1] && e.value == "") {
			console.log("Trafiłeś mnie, ale jestem pusty");
			cardNumber.textContent = "0000 0000 0000 0000";
		} else if (e == inputs[1]) {
			cardNumArr = e.value;
			cardNumber.textContent =
				cardNumArr.slice(0, 4) +
				" " +
				cardNumArr.slice(4, 8) +
				" " +
				cardNumArr.slice(8, 12) +
				" " +
				cardNumArr.slice(12, 16);
			if (e.value.length > 16) {
				cardNumArr = e.value.substring(0, 16);
				cardNumber.textContent =
					cardNumArr.slice(0, 4) +
					" " +
					cardNumArr.slice(4, 8) +
					" " +
					cardNumArr.slice(8, 12) +
					" " +
					cardNumArr.slice(12, 16);
				e.value = e.value.substring(0, 16);
			}
		}
		if (e == inputs[2] && e.value == "") {
			expDateM.textContent = "00/";
		} else if (e == inputs[2] && regExp.test(e.value)) {
			e.value = "";
		} else if (e == inputs[2] && e.value <= 9 && e.value > 0) {
			expDateM.textContent = "0" + e.value.substring(0, 2) + "/";
		} else if (e == inputs[2]) {
			expDateM.textContent = e.value.substring(0, 2) + "/";
			e.value = e.value.substring(0, 2);
		}
		if (e == inputs[3] && e.value == "") {
			expDateY.textContent = "00";
		} else if (e == inputs[3] && regExp.test(e.value)) {
			e.value = "";
		} else if (e == inputs[3] && e.value <= 9 && e.value > 0) {
			expDateY.textContent = "0" + e.value.substring(0, 2);
		} else if (e == inputs[3]) {
			expDateY.textContent = e.value.substring(0, 2);
			e.value = e.value.substring(0, 2);
		}
		if (e == inputs[4] && e.value == "") {
			cvcNum.textContent = "000";
		} else if (e == inputs[4] && regExp.test(e.value)) {
			e.value = "";
		} else if (e == inputs[4] && e.value <= 9 && e.value > 0) {
			cvcNum.textContent = "00" + e.value.substring(0, 3);
		} else if (e == inputs[4] && e.value <= 99 && e.value > 0) {
			cvcNum.textContent = "0" + e.value.substring(0, 3);
		} else if (e == inputs[4]) {
			cvcNum.textContent = e.value.substring(0, 3);
			e.value = e.value.substring(0, 3);
		}
	});
});

form.addEventListener("submit", function (e) {
	let errorsNum = 0;
	e.preventDefault();
	let errorsArr = [[], [], [], [], [], [], [], [], []];
	console.log(errorsArr.length);
	var regExp = /[a-zA-Z]/g;
	for (j = 0; j <= errorsArr.length - 2; j++) {
		errors[j].style.display = "none";
	}
	if (inputs[0].value == "") {
		errors[0].style.display = "block";
		errorsArr[0].push("Empty name");
		inputs[0].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else {
		inputs[0].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (inputs[1].value == "") {
		errors[2].style.display = "block";
		errorsArr[1].push("Empty number");
		inputs[1].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (
		inputs[1].value != "" &&
		inputs[1].value.length == 16 &&
		!regExp.test(inputs[1].value)
	) {
		inputs[1].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (inputs[1].value != "" && inputs[1].value.length < 16) {
		errors[3].style.display = "block";
		errorsArr[2].push("Short number");
		inputs[1].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (
		inputs[1].value != "" &&
		inputs[1].value.length == 16 &&
		!regExp.test(inputs[1].value)
	) {
		inputs[1].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (inputs[1].value != "" && regExp.test(inputs[1].value)) {
		errors[1].style.display = "block";
		errorsArr[3].push("Letters");
		inputs[1].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (
		inputs[1].value != "" &&
		inputs[1].value.length == 16 &&
		regExp.test(inputs[1].value) == false
	) {
		inputs[1].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (
		(inputs[3].value == "" ||
			inputs[3].value < 0 ||
			regExp.test(inputs[3].value)) &&
		(inputs[2].value == "" ||
			inputs[2].value > 12 ||
			inputs[2].value < 1 ||
			regExp.test(inputs[2].value))
	) {
		errors[4].style.display = "block";
		errors[5].style.display = "none";
		errors[6].style.display = "none";
		errorsArr[4].push("Empty Year, Wrong Month");
		inputs[2].style.border = ".1rem solid hsl(0, 100%, 66%)";
		inputs[3].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (
		inputs[3].value != "" &&
		inputs[2].value != "" &&
		inputs[2].value <= 12 &&
		inputs[2].value >= 1
	) {
		inputs[2].style.border = ".1rem solid hsl(270, 3%, 87%)";
		inputs[3].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (
		(inputs[2].value == "" ||
			inputs[2].value > 12 ||
			inputs[2].value < 1 ||
			regExp.test(inputs[2].value)) &&
		inputs[3].value != ""
	) {
		errors[4].style.display = "block";
		errors[5].style.display = "none";
		errors[6].style.display = "none";
		errorsArr[5].push("Month");
		inputs[2].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (
		inputs[2].value != "" &&
		inputs[2].value <= 12 &&
		inputs[2].value >= 1
	) {
		inputs[2].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (
		(inputs[3].value == "" ||
			inputs[3].value < 0 ||
			regExp.test(inputs[3].value)) &&
		inputs[2].value != ""
	) {
		errors[4].style.display = "block";
		errors[5].style.display = "none";
		errors[6].style.display = "none";
		errorsArr[6].push("Year");
		inputs[3].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (inputs[3].value != "") {
		inputs[3].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (
		(inputs[2].value > 12 ||
			inputs[2].value < 1 ||
			regExp.test(inputs[2].value)) &&
		inputs[3].value != ""
	) {
		errors[5].style.display = "block";
		errors[4].style.display = "none";
		errors[6].style.display = "none";
		errorsArr[5].push("Month");
		inputs[2].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else if (
		inputs[2].value != "" &&
		inputs[2].value <= 12 &&
		inputs[2].value >= 1
	) {
		inputs[2].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	if (inputs[4].value == "") {
		errors[7].style.display = "block";
		errorsArr[8].push("CVC");
		inputs[4].style.border = ".1rem solid hsl(0, 100%, 66%)";
	} else {
		inputs[4].style.border = ".1rem solid hsl(270, 3%, 87%)";
	}
	for (i = 0; i <= errorsArr.length - 1; i++) {
		if (errorsArr[i].length != 0) {
			errorsNum++;
		}
	}
	if (errorsNum == 0) {
		thanksBox.style.display = "flex";
		form.style.display = "none";
	}
	console.log(inputs[1].value);
});

contBtn.addEventListener("click", () => {
	thanksBox.style.display = "none";
	form.style.display = "block";
	inputs.forEach((e) => {
		e.value = "";
		e.style.border = ".1rem solid hsl(270, 3%, 87%)";
	});
	cardOwner.textContent = "Jane Appleseed";
	cardNumber.textContent = "0000 0000 0000 0000";
	expDateM.textContent = "00/";
	expDateY.textContent = "00";
	cvcNum.textContent = "000";
});
