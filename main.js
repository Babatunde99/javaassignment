
/*
let book = prompt ("Enter Name of book:");
let author = prompt ("Enter Authors' Name:");
let qty = prompt ("Enter quantity needed:");

const data = {

}

data[book] = author;
console.log(data);


NB.innerHTML = book;
NM.innerHTML = author;
QT.innerHTML = qty;



let Book = prompt ("Enter Name of book:");
let Author = prompt ("Enter Authors' Name:");
let Qty = prompt ("Enter quantity needed:");
data[Book] = Author;



NB1.innerHTML = Book;
NM1.innerHTML = Author;
QT1.innerHTML = Qty;



let booK = prompt ("Enter Name of book:");
let authoR = prompt ("Enter Authors' Name:");
let qtY = prompt ("Enter quantity needed:");
data[booK] = authoR;



NB2.innerHTML = booK;
NM2.innerHTML = authoR;
QT2.innerHTML = qtY;



//creating an Array



const car = ["Porche", "Ferrari", "Lamboghini", "Lexus", "Mercedes", "Audi", "VolksWagen", "Ford", "Toyota", "Apple" ]
console.log (car)
demo.innerHTML= car;

const Vehicle = ["Porche", "Ferrari", "Lamboghini", "Lexus", "Mercedes", "Audi", "VolksWagen", "Ford", "Toyota", "Apple" ]
Vehicle.push("Omolanke")
console.log (Vehicle)
onto.innerHTML = Vehicle;

const autom = ["Porche", "Ferrari", "Audi", "VolksWagen", "Ford", "Toyota", "Apple" ]
autom.pop()
console.log (autom)
automo.innerHTML = autom;


let t = 10000
let x = 3
let p = 30/100
let w = t * p
let z = t + w
let total = z / x
console.log (total)

function equalto() {
 document.getElementsByTagName("span")[1].innerHTML = total;   
}
*/


alert("Welcome to the Discount Sales Dashboard. The higher your purchase, the higher your discount.")
let amount = prompt("How much is your total purchase")

const data = {
    "amount" : amount
}
if (data ["amount"] < 2000){
    alert("You've qualified for 10% discount")
}

else if ((data["amount"] >= 2000) && (data["amount"] <= 5000 )){
    alert("You've qualified for 20% discount")
}

else if (data ["amount"] > 5000){
    alert("You've qualified for 30% discount")
}



const frd = prompt("Enter payment amount: ");
const dist = prompt("Enter Tip percentage: ");
const frinds = prompt("Enter numbers of friends: ")


let number = (parseInt(frd));
let discount = (parseInt(dist) /100);
let hood = discount * number;
let look = number + hood;
let good= (parseInt(frinds));
let total= look / good;

document.getElementById("koko").innerHTML = number;
document.getElementById("popo").innerHTML = good;
document.getElementById("lolo").innerHTML = discount;
document.getElementById("hello").innerHTML = total;

console.log(number);
console.log(discount);
console.log(hood);
console.log(look);
console.log(good);
console.log(total);