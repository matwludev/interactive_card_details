const inputs = document.querySelectorAll("input");
const form = document.getElementById("myForm");
const cardNumber = document.querySelector(".card__front-number");
const cardOwner = document.querySelector(".nameSurname");
const expDateM = document.querySelector(".dateMM");
const expDateY = document.querySelector(".dateYY");
const cvcNum = document.querySelector(".card__back-cvc");
const thanksBox = document.querySelector('.cardDataThanks');
const errors = document.querySelectorAll(".error");


console.log(errors);

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
        var regExp = /[a-zA-Z]/g;
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
            cardNumArr = e.value;
            cardNumber.textContent = cardNumArr.slice(0,4) + " " + cardNumArr.slice(4,8) + " " + cardNumArr.slice(8,12) + " " + cardNumArr.slice(12,16);
            if(e.value.length > 16) {
                cardNumArr = e.value.substring(0, 16);
                cardNumber.textContent = cardNumArr.slice(0,4) + " " + cardNumArr.slice(4,8) + " " + cardNumArr.slice(8,12) + " " + cardNumArr.slice(12,16);
                e.value = e.value.substring(0, 16);
            }
        }
        if (e == inputs[2] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            expDateM.textContent = "00/";
        } else if (e == inputs[2] && regExp.test(e.value)) {
            console.log("Nie wolno literek!"); 
            e.value = "";
        } else if (e == inputs[2] && e.value <= 9 && e.value > 0){
            expDateM.textContent = "0" + e.value.substring(0,2) + "/";
        } else if (e == inputs[2]) {
            expDateM.textContent = e.value.substring(0,2) + "/";
            e.value = e.value.substring(0, 2);
        }
        if (e == inputs[3] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            expDateY.textContent = "00";
        } else if (e == inputs[3] && regExp.test(e.value)) {
            console.log("Nie wolno literek!"); 
            e.value = "";
        } else if (e == inputs[3] && e.value <=9 && e.value > 0){
            expDateY.textContent = "0" + e.value.substring(0,2);
        } else if (e == inputs[3]){
            expDateY.textContent = e.value.substring(0,2);
            e.value = e.value.substring(0, 2);
        }
        if (e == inputs[4] && e.value == "") {
            console.log("Trafiłeś mnie, ale jestem pusty");
            cvcNum.textContent = "000";
        } else if (e == inputs[4] && regExp.test(e.value)) {
            console.log("Nie wolno literek!"); 
            e.value = "";
        } else if (e == inputs[4] && e.value <= 9 && e.value > 0){
            cvcNum.textContent = "00" + e.value.substring(0,3);
        } 
         else if (e == inputs[4] && e.value <= 99 && e.value > 0){
            cvcNum.textContent = "0" + e.value.substring(0,3);
         
        } else if (e == inputs[4]){
            cvcNum.textContent = e.value.substring(0,3);
            e.value = e.value.substring(0, 3);
        } 
    })
})

form.addEventListener("submit", function(e) {
    let errorsNum = 0;
    e.preventDefault();
    let errorsArr = [[],[],[],[],[],[],[],[]];
    console.log(errorsArr.length);
    var regExp = /[a-zA-Z]/g;
    for (j=0; j<=(errorsArr.length-2); j++){
       errors[j].style.display = "none";
    }
    if (inputs[0].value == ""){
        console.log("Zapomniałeś imienia i nazwiska?");
        errors[0].style.display = "block";
        errorsArr[0].push("Empty name");
    } 
    if (inputs[1].value == "") {
        console.log("Zapomniałeś wpisać numeru karty");
        errors[1].style.display = "block";
        errorsArr[1].push("Empty number");
    } 
    if (inputs[1].value != "" && inputs[1].value.length < 16) {
        console.log("Za mało znaków");
        errors[3].style.display = "block";
        errorsArr[2].push("Short number");
    } 
    if (regExp.test(inputs[3].value)) {
        console.log("Nie wolno literek!"); 
        errors[2].style.display = "block";
        errorsArr[3].push("Letters");
    } 
    if (inputs[2].value > 12) {
        console.log("Za dużo miesięcy");
        errors[5].style.display = "block";
        errorsArr[4].push("Month");
    }  
    if (inputs[2].value == "") {
        console.log("Brak miesiąca");
        errors[4].style.display = "block";
        errorsArr[5].push("Month");
    }  
    if (inputs[3].value == "") {
        console.log("Brak roku");
        errors[4].style.display = "block";
        errorsArr[6].push("Year");
    }  
    if (inputs[4].value == "") {
        console.log("Brak cvc");
        errors[6].style.display = "block";
        errorsArr[7].push("CVC");
    }  
    for (i=0; i<=errorsArr.length - 1; i++){
        if (errorsArr[i].length != 0) {
            errorsNum++;
        }
    }
    if (errorsNum == 0) {
        thanksBox.style.display = "block";
    }
})