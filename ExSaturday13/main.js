arr = ["FILIP", "MARTIN", "STEFAN", "TRAJAN", "DARKO"];
console.log(arr);

console.log(arr[4]);
console.log(arr.indexOf("MARTIN"));
console.log(arr.slice(2));
console.log(arr[arr.length -1]);



arr2 = [5,1,2,7,8,4,3]//8
console.log(arr2.sort());          //6
console.log(arr2.reverse());       //7


let random = Math.floor(Math.random()*10)
console.log(random);
console.log(arr2[random]);

arr12=[1,3,6,8,9];

let random1=arr12[Math.floor(Math.random()*arr12.length)];
console.log(random1);



arr5 = [5,3,1,6,4,6,7];
console.log(arr5.minimum);
console.log(Math.min.apply(Math, arr5)); ///8
console.log(Math.max.apply(Math, arr5)); ///9


arr6 = [11,55,33,22,77];    ////10
console.log(arr6);
arr6.push(99)
console.log(arr6);


let lists = {
  name:"Filip",
  surname:"Millosevski",
  age:25,
  activity:"Basketball",
  car:"Mercedes"
}

console.log(lists);  ///1

console.log(lists.name);

delete lists.name;    ///2
console.log(lists);


console.log(lists.car.length); ///3


let book = {
  bookname: "FILIPSON",
  authorname: "FILIP",
  readingstatus:true
}                           ///4
console.log(book);

book["make"] = "audi";      ///5
console.log(book);





console.log(typeof (book.readingstatus));    ///6


let cake = {
  name:"Nutella",
  servings:5,
  ingridiens:["cream", "sugar", "strawberry", "banana", "bisquits"]
}


console.log(cake.ingridiens[2]);

let triangle = {
  stranaa:"5",
  stranab:"5",
  stranac:"5"
}

console.log(triangle.stranaa*triangle.stranab*triangle.stranac);


let library = [
  {
    title:"The road ahead",
    author:"Bill Gates",
    libraryid:4222,
  },
  {
    title:"Final fight",
    author:"Michael Jordan",
    libraryid:1322,
  },
  {
    title:"Rednecks",
    author:"Denzel Washington",
    libraryid:5289,
  }

];
let newbook = {
  title:"War and Peace",
  author:"Dostoevski",
  libraryid:0021,
};

library.push(newbook)
console.log(library);

