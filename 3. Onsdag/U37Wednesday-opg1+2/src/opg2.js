//JavaScript functions and Callbacks
//Opgave 1)
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2;
}

var cb = function (n1, n2, callback) {
    if(typeof n1 != "number" || typeof n2 != "number" || typeof callback != "function") {
        throw new Error("Some of the values are written incorrectly.");
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
}

//Opgave 4)
var mul = function (n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1/n2;
}

//Opgave 2)
console.log(add(1, 2));
console.log(add);
console.log(add(1, 2, 3));
//Opgave 3)
try {
    console.log(cb(3, 3, add));
    console.log(cb(4, 3, sub));
    console.log(cb(3, 3, add()));
    console.log(cb(3, "hh", add));
} catch (e) {
    console.error(e.name + ': ' + e.message);
}

//Opgave 5
console.log(cb(10,5, divide));

//Getting comfortable with filter, map and forEach:
//Opgave 1
var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var filtered = array.filter(name => name.length <= 3);

console.log(array.join("-"));
console.log(filtered.join("-"));

//Opgave 2
console.log(array.map(name => name.toUpperCase()));

//Opgave 3
console.log("<ul><li>"+array.join("</li><li>")+"</li></ul>");

//Opgave 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newCars = cars.filter(car => car.year >= 1999); 
var volvos = cars.filter(car => car.make === 'Volvo');
var cheapCars = cars.filter(car => car.price > 5000);

console.log("Newer than 1999: ", newCars);
console.log("Volvos: ", volvos);
console.log("Cars cheaper than 5000: ", cheapCars);

//Opgave 4a
var arrayToDB = cars.map(myFunction);
console.log(arrayToDB)


function myFunction(car) {
    return "INSERT INTO cars (id, year, make, model, price) VALUES("+car.id+", "+car.year+", "+car.make+", "+car.model+", "+car.price+");";
}

/* Asynchronous Callbacks
 * Opgave 1 + 2
 * I would expect to see a, d, f then e and b last.
 */
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
//I was right, the numbers are second delay while console.log doesn't have delay.


/*
 * this and constructor functions
 * Opgave 1
 */
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Printing out the name with delay when function is called.
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //It remembers the name from the person

//Opgave 2
var p = new Person("Kurt Wonnegut");
console.log("I'm global: "+ name);


