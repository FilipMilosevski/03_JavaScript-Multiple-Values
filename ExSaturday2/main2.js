let spacename = "Homeland";
let shutspeed = 17500;
let distamars = 225000000;
let distomoon = 384400;
const miltokil = 0.621;


console.log (typeof spacename);
console.log (typeof shutspeed, "mph");
console.log (typeof distamars, "km");
console.log (typeof distomoon, "km");
console.log (typeof miltokil);


let mphmars = distamars * miltokil;
console.log (mphmars, "mph")

let hour = mphmars / shutspeed;
console.log (hour, "hours to mars");

let hours = 24;
let day = hour / hours;
console.log (day,"days to mars");

let mphmoon = distomoon * miltokil;
console.log (mphmoon, "mph");

let hour2 = mphmoon / shutspeed;
console.log (hour2, "hours to moon");

let day2 = hour2 / hours;
console.log (day2, "days to moon");

console.log (`${spacename} will take ${day} to Mars`);
console.log (spacename + " will take " + day2 +" to Moon");







let a = prompt ("a= ?");
console.log ("a = " +a);
let b = prompt ("b= ?");
console.log ("b= "+b);
let a2 = a**2;
console.log (a2);
let b2 = b**2;
console.log (b2);
let c2 = a2 + b2; 
console.log (c2);
let c = Math.sqrt (c2);
console.log (c);






cars = ["filip", "martin", "stefan"]
console.log (cars)
cars [1]= "sssss";
console.log (cars)

x=1;
y=2;
z=3;
console.log (x>z && y>x)


let randomNum = Math.random () *5;
console.log ("My random number: " +randomNum);
let roundNum = Math.floor (randomNum) +1;
console.log ("My rounded number: "+roundNum)
let num = prompt ("Guess a number from 1 to 5");
if (roundNum==num) {
  alert ("you guessed right!")
} else {
  alert ("you guessed wrong!")
}



filip = ["ime", "prezime", "godini","grad", "drzava", "adresa", "kontakt"]
console.log (filip)



fm = ["ime", "prezime", "godini"]
console.log (fm)


fi = ["kola", "motor", "kamion", "avion", "brod"]
console.log(fi);




