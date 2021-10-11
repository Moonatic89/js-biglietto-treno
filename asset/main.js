//Ask for distance
const distance = parseInt(prompt("How many KMs you want to travel?"));

//Ask for age
const age = parseInt(prompt("How old are you?"));

//Utility Variable Initialization
let discount = 1;
let pricePerKilometer = 0,21;

//Define discount
if (age < 18) {
    discount = 0.8;
    //price at 0.8 is 20% discount
} else if (age >= 65) {
    discount = 0.6;
    //price at 0.6 is 40% discount
}
//Math 

console.log(distance);
console.log(age);
console.log(discount);



const finalPrice = (distance * pricePerKilometer) * discount;

//Print Price

document.getElementById("ticket").innerHTML = finalPrice;
