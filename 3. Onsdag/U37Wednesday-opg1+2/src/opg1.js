//Opgave a)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];

//Opgave b)
var all = boys.concat(girls);

//Opgave c)
var names = all.join(", ");
var hyphen = all.join("-");
console.log("c) ", names);
console.log("c) ", hyphen);

//Opgave d)
all.push("Lone", "Gitte");
console.log("d) ", all.join("-"));

//Opgave e)
all.unshift("Hans  ", "Kurt");
console.log("e) ", all.join("-"));

//Opgave f)
all.shift("Hans");
console.log("f) ", all.join("-"));

//Opgave g)
all.pop("Gitte");
console.log("g) ", all.join("-"));

//Opgave h)
all.splice(4, 2);
console.log("h) ", all.join("-"));

//Opgave i)
all.reverse();
console.log("i) ", all.join("-"));

//Opgave j)
all.sort()
console.log("j) ", all.join("-"));

//Opgave k)
var lowerCase = all.map((x) => x.toLowerCase()).sort();
console.log("k) ", lowerCase.map(x=>x.charAt(0).toUpperCase().concat(x.slice(1, x.length))));

//Opgave i)
var uppercase = all.map(string => string.toUpperCase());
console.log("i) ", uppercase.join("-"));

//Opgave m)
var result = all.filter(string => string.startsWith("L") || string.startsWith("I"));
console.log("m) ", result);



