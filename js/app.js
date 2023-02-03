const inputs = document.querySelectorAll("input");
const form = document.getElementById("myForm");
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
            if (cardNumber.textContent.length >= 16) {
                inputs[1].value = inputs[1].value.slice(0,16);
            }
        }
        if (e == inputs[2] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            expDateM.textContent = "00/";
        } else if (e == inputs[2] && e.value <= 9){
            expDateM.textContent = "0" +e.value + "/";
        } else if (e == inputs[2]) {
            expDateM.textContent = e.value + "/";
            
        }
        if (e == inputs[3] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            expDateY.textContent = "00";
        } else if (e == inputs[3] && e.value <=9 ){
            expDateY.textContent = "0" + e.value;
        } else if (e == inputs[3]){
            expDateY.textContent = e.value;

        }
        if (e == inputs[4] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            cvcNum.textContent = "000";
        } else if (e == inputs[4] && e.value <= 9){
            cvcNum.textContent = "00" + e.value;
        } 
         else if (e == inputs[4] && e.value <= 99){
            cvcNum.textContent = "0" + e.value;
         
        } else if (e == inputs[4]){
            cvcNum.textContent = e.value;
        } 
    })
})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var regExp = /[a-zA-Z]/g;
    if (inputs[0] == ""){
        console.log("Zapomniałeś imienia i nazwiska?");
        e.preventDefault();
    } else if (inputs[1] == "") {
        console.log("Zapomniałeś wpisać numeru karty");
    } else if (inputs[1].value.length < 16) {
        console.log("Za mało znaków");
    } else if (regExp.test(inputs[1].value)) {
        console.log("Nie wolno literek!"); 
    } else {
        console.log("Dzienks!");
    }
})