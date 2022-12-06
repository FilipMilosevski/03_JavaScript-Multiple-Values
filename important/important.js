let fm1 = ["sdaw","sdawss", "sscccsdaw"]
let fm2 = [[10],[10],[10]]
console.log (fm1)
console.log(fm2);


a23 = [fm2, fm2, fm2, fm1, fm1, fm1]
console.log(a23);

let filip = ['hi there', 20, true];
console.log(typeof filip [0])
console.log(typeof filip [1])
console.log(typeof filip [2])
filip [3] = "KIA";
filip [-1] = "FIAT";
console.log(filip [3]);
console.log(filip [-1]);
console.log (filip[1])

colors = ["red", "blue", "white", "green", "orange"]
booleans = [true, false, true, false];
emptyarr = [];
console.log ("Colors length: ", colors.length);
console.log ("Booleans length: ", booleans.length);
console.log ("Empty arrow length: ", emptyarr.length);

numbers = [12,24,36];
numbers[5] = 48;
console.log (numbers.length)


ex1 = ["milk", "bread", "apples", "cream", "soda"];
console.log (ex1.length);
console.log(ex1);
ex1.splice (1,1, "banana") // da dodades primer 1,1 e posle prviot element da pises nesto i vtorata 1ca e dali da go brises(1) ili ne(0) a ako odis (2) togas ke gi izbrises 2ta naredni!!
console.log(ex1);
ex1.push ("cars", "bikes"); // da dodades 
console.log(ex1);


let vezba = ["circle","triangle",  "rectangle", "pentagon"];
console.log(vezba);
vezba.splice (3,0, "square", "trapezoid");
console.log(vezba);


fora1 = [1,2,3];
fora2 = [4,5,6];
fori = fora1.concat(fora2)
console.log(fori);
fori1 = fori.concat(7,8,9)  // na postoecki arrray dodavam nov array
console.log (fori1)
console.log (fori1)

fori1.shift(); // go krati prviot element, znaci nulata
console.log(fori1);

fori1.pop ();
console.log(fori1); // go krati posledniot element


let proba1 = [11,22,33];
let proba2 = [44,55,66];
console.log(proba1);
console.log(proba2);
proba = proba1.concat(proba2)
console.log(proba)
// console.log (proba1.concat(proba2)); drug nacin na concat
proba.splice(3,1, "1994");
console.log(proba);
delete proba[2];
console.log(proba); //brises vrednost a mestoto si stoi empty

let milo = [1,2,3,4,5,6,7];
console.log(milo);
let fin1 = milo.indexOf(5);
console.log(fin1)

let mile = ["fiat", "bmw", "ford", "kia", "volvo"]
console.log(mile);
let fin2 = mile.indexOf("kia");
console.log(fin2) ///se bara tocnoto ime na vrednosta


let names = ["marijan","marko",  "kristijan", "stefan", "andrej", "vlatko" ,"sinisa"];
console.log (names)
console.log (names.sort())//redosled po abeceda ili broj
console.log (names.reverse())//obraten redosled

let number = [22,19,36,97,11,28,76];
console.log (number);
console.log(number.sort());
console.log(number.reverse())


let sv1 = [1,2,3];
let sv2 = [4,5,6];
let sv3 = [7,8,9];
let svs = [sv1,sv2,sv3]
console.log(svs)///// edna vrsta na array
console.log(svs [1] [1]);
console.log(svs[2][0]);
console.log(svs[0][2]);

let bbb = [[1,2,3],[4,5,6],[7,8,9]];
console.log(bbb)///// druga vrsta na array

let masa = [
  [[1,2,3],[4,5,6],[7,8,9]],
  [[1,2,3],[4,5,6],[7,8,9]],
  [[1,2,3],[4,5,6],[7,8,9]],
  [[1,2,3],[4,5,6],[7,8,9]],
  [[1,2,3],[4,5,6],[7,8,9]],

 
]
console.log(masa)
console.log(masa [0][0][0])
console.log(masa [2][2][2])
console.log(masa [1][2][2])
console.log(masa [3][1][0])
console.log(typeof masa)




let len = [15,25,35,45,55];
console.log(len)
console.log(len.length);
len [20] = 1;
console.log(len.length);
console.log(len);


let exe1 = ["milk", "bread", "apples"];
console.log(exe1);
console.log(exe1.length);
exe1.splice(1,1, ("banana"));
console.log(exe1);


let shop = [];
console.log(shop)
shop.push("milk", "bread", "apples");
console.log(shop)
shop.splice(1,1,"banana","eggs");
console.log(shop);
shop.pop();
console.log(shop);
console.log(shop.sort())
console.log(shop.indexOf("milk")) ///koj broj e indexot
console.log(shop [2])  ///imeto na indeksot na vtoro mesto
shop.splice(1,0, "carrot","lettuce");
console.log(shop);
shop2 = ["orange", "lemon"];
console.log(shop2)
newshop = shop.concat (shop2, shop2)
console.log(newshop);

console.log(newshop.lastIndexOf("lemon")) //poslednata vrednost 
console.log(newshop.indexOf("lemon"))     //koja pozicija e vrednosta



let www = [
[["francija", "germanija", "spanija"],["kina", "indija", "japonija"],["kanada", "amerika", "meksiko"]],
[["mercedes", "bmw", "volkswagen"], ["honda","mazda", "suzuki"], ["ford","gmc","pontiac"]],
[["brod", "jahta", "gliser"],["motor","karting","cetiricikl"],["tocak","kola","trotinet"]]
]
console.log(www)
console.log((www[0][0][1]),(www[1][0][0]),(www[2][2][1]))
console.log((www[0][1][2]),(www[1][1][2]),(www[2][1][0]) +" , "+ (www[2][0][2]) +" i "+ (www[2][2][1]))
console.log((www[0][2][1]),(www[1][2][0]),(www[2][2][1]))
console.log((www[0][1][2]),(www[1][1][0]),(www[2][2][1]) +" i "+ (www[2][1][0]))
console.log((www[1][2][0]) +","+ (www[1][2][1]) +" i "+ (www[1][2][2]) +" se proizvedeni vo "+(www[0][2][1]))
console.log((www[1][1][0]) +", "+ (www[1][1][1]) +" i "+ (www[1][1][2])+" se proizvedeni vo "+(www[0][1][2]))
console.log((www[1][0][0])+ ","+ (www[1][0][2])+" i "+(www[1][2][0])+" se najprodovavani vo "+(www[0][0][2]))
///koga imam "," ne mora da imam zapirki megju nabrojuvanite vrednosti


///koga varijablata stanuva objekt togas stanuva properti



let ddd = {
  dogName: "Javascript",
  weight:2.4,
  color:"brown",
  breed:"chihuahua",
  age:3,
  burglarBiter: true
}


console.log(ddd);