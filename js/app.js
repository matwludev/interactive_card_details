const inputs = document.querySelectorAll("input");
const subBtn = document.querySelector("#submitBtn");
const cardNumber = document.querySelector(".card__front-number");
const cardOwner = document.querySelector(".nameSurname");
const expDateM = document.querySelector(".dateMM");
const expDateY = document.querySelector(".dateYY");
const cvcNum = document.querySelector(".card__back-cvc");

console.log(inputs);

window.addEventListener("load", () => {
    inputs.forEach( (e) => {
       e.value = "";
    })
    cardOwner.textContent = "Jane Appleseed";
    cardNumber.textContent = "0000 0000 0000 0000";
    expDateM.textContent = "00/";
    expDateY.textContent = "00";
    cvcNum.textContent = "000";
})

inputs.forEach ( (e) => {
    e.addEventListener('input', () => {
        if (e == inputs[0] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            cardOwner.textContent = "Jane Appleseed";
        } else if (e == inputs[0]){
            cardOwner.textContent = e.value;
        }
        if (e == inputs[1] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            cardNumber.textContent = "0000 0000 0000 0000";
        } else if (e == inputs[1]){
            cardNumber.textContent = e.value;
        }
        if (e == inputs[2] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            expDateM.textContent = "00/";
        } else if (e == inputs[2]){
            expDateM.textContent = e.value + "/";
        }
        if (e == inputs[3] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            expDateY.textContent = "00";
        } else if (e == inputs[3]){
            expDateY.textContent = e.value;
        }
        if (e == inputs[4] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            cvcNum.textContent = "000";
        } else if (e == inputs[4]){
            cvcNum.textContent = e.value;
        }
    })
})