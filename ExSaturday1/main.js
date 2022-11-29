let number = 15;
//prediciton = number;
console.log (typeof(number));

let number1 = 5.5;
//prediciton = number; 
console.log (typeof(number1));

let nene = NaN;
//predicion = string;
console.log (typeof(nene));

let he = ("hello");
//predicion = string;
console.log (typeof(he));

let tr = true;
//prediction = boolean;
console.log (typeof (tr));

let kom = (1!=2);
//predicion = string;
console.log (typeof (kom));


let hs = ("hamburger" + "s");
//predicion = string;
console.log (typeof (hs));

let hss = ("hamburger" - "s");
//predicion = number;
console.log (typeof (hss));

let test = ("1" + "3");
//prediction: string; 
console.log (typeof(test));

let test1 = (1 + 2);
//prediction:number;
console.log (typeof(test1));

let test2 = ("1"-"2");
//prediction: number;
console.log (typeof(test2))

let test3 = ("johhny" + "5");
//prediction: string;
console.log (typeof(test3));

let test4 = ("johhny" - "5");
//prediction: number;
console.log ( typeof(test4));


let spacename = "Homeland";
let sspeed = 17500;
let distamars = 225000000;
let distomoon = 384400;
const miltokil = 0.621;
console.log (spacename);
console.log (sspeed);
console.log (distamars, "km");
console.log (distomoon, "km");
console.log (miltokil);



let mphmars = distamars * miltokil;
console.log (mphmars, "mph");

let newww = mphmars / sspeed;
console.log (newww, "hours");


let hrs = 24;
let disdays = newww / hrs;
console.log (disdays, "days")


console.log (spacename +" will take "+ disdays+ " days to Mars.")
console.log (`${spacename} will take ${disdays} days to Mars. `)




let mphmoon = distomoon * miltokil;
console.log (mphmoon, "mph");

let newest = mphmoon / sspeed;
console.log (newest, "hourd to moon");

let disdays2 = newest / hrs; 
console.log (disdays2, "days to moon");

console.log (spacename+ " will take "+ disdays2+ " days to Moon.")
console.log (`${spacename} will take ${disdays2} days to Moon`)








