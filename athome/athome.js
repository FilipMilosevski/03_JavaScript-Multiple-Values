

// let arr = ["filip",5,true]
// console.log(arr[0], typeof arr[0]);
// console.log(arr[1], typeof arr[1]);
// console.log(arr[2], typeof arr[2]);


// let arr = ["AUDI", "HONDA", "FORD"]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// // console.log(arr[-1]); ///undefined
// // console.log(arr[5]); ///undefined
// arr[0] = "TESLA"
// console.log(arr);
// arr[3] = "KIA";
// console.log(arr);
// arr[-1] = "FIAT"
// console.log(arr[-1]);  ///vmetnuvanje pred array



// colors = ["blue", "yellow", "red"]
// console.log(colors);
// console.log("LENTGTH OF COLORS ARRAY: "+colors.length);       /// dolzina na array
// booleans = [true,false,false,true]
// console.log(booleans);
// console.log("LENGTH OF BOOLEANS ARRAY: "+booleans.length);
// empty = []
// console.log(empty);
// console.log("LEGTH OF EMPTY "+empty.length);
// last = colors[colors.length -1]
// console.log(last);    ///posledniot element od arrayot


// numbers = [11,32,54];
// numbers[5] = 22;
// console.log(numbers);
// console.log(numbers.length);


///////////////////////ex3.1
// let arr = ["Milk", "Bread", "Apples"]
// console.log(arr);
// console.log(arr.length);
// arr[1] ="Bananas"
// console.log(arr);


//////////////////////adding and replacing
// ff = ["grapefriut", "orange","lemon"]   ///add so push na kraj na arrayot
// console.log(ff);
// ff.push("tangerine")
// console.log(ff);
// let leff = ff.push("lime")      ///add so push vo varijabla na kraj na arrayot
// console.log(ff);


// let arr = ["circle", "triangle", "rectagon", "pentagon"]  ////add so splice 2;0  koe mesto;kolku brises
// console.log(arr);
// arr.splice(2,0,"square","trapezoid")
// console.log(arr);
// // arr.splice(2,2,"square","trapezoid")
// // console.log(arr);

/////////////////////// arr vo arr so concat()
// let ar1 =[1,2,3]
// console.log(ar1);
// let ar2 =[4,5,6]
// console.log(ar2);
// let ar3 =ar1.concat(ar2)        ////arr so concat
// console.log(ar3);
// let ar4 = ar3.concat(7,8,9)    //////varijabla so concat
// console.log(ar4);




///////////////////////deleting items   so pop()
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr);
// arr.pop()
// console.log(arr);               ////////brisenje na posledniot element
// arr.shift()
// console.log(arr);               ////////brisenje na prviot element
// arr.splice(1,3)                 
// console.log(arr);               ////////brisenje so splice
// delete arr[0]
// console.log(arr);               ////////brisenje so delete, ostanuva elementot empty



///////////////////////naogjanje elementi

// let arr = [1,2,3,4,5]
// console.log(arr);
// let find = arr.find (function(e) {return e === 6})
// console.log(find);
// let find2 = arr.find(e => e === 10)
// console.log(find2);                                ///naogjanje na tocniot element

// let arr=[1,2,3,4,5]
// console.log(arr);
// let find = arr.indexOf(3)
// console.log(find);                                   ///naogjanje na tocniot index

// let arr = ["FILIP","MARTIN","STEFAN","DARKO","IVAN"]
// console.log(arr);
// let find = arr.indexOf("DARKO")
// console.log(find);

///////////////////////SORTING
// let arr = ["MARTIN","STEFAN","ALEKSANDAR","BORIS","GORAN"]
// console.log(arr);
// console.log(arr.sort());                                  ///po abeceda
// let arr = [22,35,15,89,54]
// console.log(arr);
// console.log(arr.sort());                                  ///po broj
// let arr = ["MARTIN","STEFAN","ALEKSANDAR","BORIS","GORAN"]
// console.log(arr);
// // console.log(arr.sort());
// console.log(arr.reverse());                               ///reverse po lista ili po abeceda ama prvo sort

// let arr = [22,35,15,89,54]
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.reverse());                                 ///reverse po lista po golemina ama prvo sort


//////////////////////////////////EX 3.2
// let arr1 = []
// console.log(arr1);
// arr1.push("Milk","Bread","Apples")
// console.log(arr1);
// arr1.splice(1,1,"Bananas","Eggs")
// console.log(arr1);
// arr1.pop()
// console.log(arr1);
// // arr1.splice(3,1)    
// // console.log(arr1);   ///vtor nacin na brisenje
// console.log(arr1.sort());
// console.log(arr1.indexOf("Milk"));
// arr1.splice(1,0, "Carrots","Lettuce")
// console.log(arr1);
// let arr2 = ["Juice", "Pop"]
// console.log(arr2);
// let arr3 = arr1.concat(arr2,arr2)
// console.log(arr3);
// let last = arr3.lastIndexOf("Pop")      ///posledniot index dokolku imas 2 isti indexi
// console.log(last);



/////////////////////////////////////MULTIDIMENSIONAL ARRAYS

// let ar1 = [1,2,3];
// let ar2 = [4,5,6];
// let ar3 = [7,8,9];
// let filip = [ar1,ar2,ar3]
// console.log(filip);                         /////prv nacin

// let fil = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(fil);                            //////vtor nacin

// // let v = fil[0][1];
// console.log(fil[0][1]);                             ///// pristap do elementi vo array
// console.log(fil[1][2]);
// console.log(fil[2][2]);


// let a = [1,2,3]
// let b = [4,5,6]
// let c = [7,8,9]
// let fm = [a,b,c]
// console.log(fm);
// let arr = [fm,fm,fm]
// console.log(arr);
// let fini = arr[0][1][0];
// console.log(fini);                                  ///arr vo arr vo arr i lokacija na element


//////////////////////////////////////////////////////EX 3.3
// let arr = [1,2,3]
// console.log( arr);
// let arrr = [arr,arr,arr]
// console.log(arrr);
// let find = arrr[1][1]
// console.log(find);


///////////////////////////////OBJECTS
// let arr = [1,2,3]
// console.log(typeof arr);           /// arr e object
// let dog = {
//   dogname:"Javascript",
//   weight:2.4,
//   color:"brown",
//   breed:"chihuahua",
//   age:3,
//   burglarbiter:true
// }
// console.log(dog);
// console.log(typeof dog);              /// imame kreirano varijabla kako object so propertinja i vrednosti
// console.log(typeof dog.dogname);
// console.log(typeof dog.weight);
// console.log(typeof dog.color);
// console.log(typeof dog.breed);
// console.log(typeof dog.age);
// console.log(typeof dog.burglarbiter);


// let dog1 = dog["dogname"]
// console.log(dog1);                    /// pristapuvanje na propertinjata i vrednostite vo arrayot
// let dog2 = dog.color
// console.log(dog2);                    /// vtor nacin na pristapuvanje         POLESEN

// dog["color"]="blue";                  /// menjanje na vrednosti na propertinja vo object
// dog.weight =2.1;                      /// vtor nacin na menjanje              POLESEN
// console.log(dog.color);              
// console.log(dog.weight);
// console.log(dog);                     /// update na izmenite      

// dog["age"] = "three";
// let a = "age";
// console.log(dog[a], typeof dog[a]);   ///menjanje na data tipot na propertito od number vo string

// let a1 = "breed";
// console.log(dog[a1]);
// dog[a1]="sharp";
// console.log(dog["breed"]);            ///menjanje na imeto data tipot



//////////////////////////////////////PRIMER 1
// com = {
//   cn: "VERO",
//   act:["Discounts", "Promotions", "Buy one get one free"],
//   address1:[
//     {
//       store:"Vero 9",
//       street:"1st street",
//       number:"074241564",
//       zipcode:42324,
//       city:"Miami",
//       state:"Florida"
//     } ,
//     {
//       store:"Vero 12",
//       street:"2nd street",
//       number:"075121998",
//       zipcode:12982,
//       city:"Las Vegas",
//       state:"Nevada"
//     }, 
//     {
//       store:"Vero 7",
//       street:"3rd street",
//       number:"077199112",
//       zipcode:42288,
//       city:"Los Angeles",
//       state:"California"
//     } 
//   ]

// }
// console.log(com);
// // console.log(com.cn, com.act[1], com.address1[0].street);
// console.log(com.act[1],"on friuts and vegetables",com.address1[0].store, com.address1[0].state);
// console.log(com.act[2],"on ice cream",com.address1[1].store, com.address1[1].state);
// console.log(com.act[0],"drinks and food snacks",com.address1[2].store, com.address1[2].state);




/////////////////////////////////////////////PRIMER 2
// let myCar = {
//   make:"Mercedes",
//   model:"S500",
//   year:2015,
//   fueltype:"gas",
//   gears:7,
//   color:"green"
// }
// console.log(myCar)

// // let prop = "color";
// // myCar[prop] = "red";
// // console.log("My cars new color:", myCar.color);

// // let prop2 = "model";
// // myCar[prop2] = "C220";
// // console.log("My new model is: ", myCar.model);

// prop = "forSale";                                              /////PUSH na novo property
// myCar[prop] = true;
// console.log(myCar);
// myCar["MARKET"]="EUROPE"                                       /////PUSH na novo property POLESEN NACIN
// console.log(myCar);
// console.log(`Car ${myCar.make} ${myCar.model} ${myCar.year}`);
// console.log("For sale: ", myCar.forSale);


/////////////////////////////////////PRIMER 3
// let people ={
//   friends: []
// };
// let filip = {
//   firstname:"Filip",
//   lastname:"Miloshevski",
//   id:1
// }
//  let goran = {
//   firstname: "Goran",
//   lastname: "Cvetkovski",
//   id:2
//  }
//  let damjan = {
//   firstname: "Damjan",
//   lastname: "Stefanovski",
//   id:2
//  }
//  let dragan = {
//   firstname: "Dragan",
//   lastname: "Nikolovski",
//   id:2
//  }
// people.friends.push(filip, goran, damjan, dragan);
// console.log(people);

////////////////////////////////////////OBJECTS IN OBJECTS

// let company = {
//   companyname: "Healthy",
//   activity: "Food",
//   address: {
//     street:"Partizanska",
//     number: "9",
//     zipcode: 1000,
//     city: "Skopje",
//     state: "Macedonia"
//   },
//   year:1994
// }
// console.log(company);
// company.address.zipcode ="2000"                ///menjanje vrednost na property
// company["address"]["number"]=10;
// console.log(company);


////// Dokolku edno properti vo object ima povekje vrednosti, ne mozeme samo da nabrojuvame
////// vo stringovi, tuku nabrojuvanite raboti od propertito mora da se vo array

////// Znaci properti so povekje stringovi se stava vo aray a property
////// so povekje propertinja se stava vo objekt
// let company = {
//   companyname: "Healthy",
//   activity: ["Food Manufacturing","Improving Kids","Kids","Manufacturing Toys"],
//   address: {
//     street:"Partizanska",
//     number: "9",
//     zipcode: 1000,
//     city: "Skopje",
//     state: "Macedonia"
//   },
//   year:1994
// }
// console.log(company);; 
// console.log(company.activity[0]);    ///// pat property/array/string
// console.log(company.address.street); ///// pat property/object/property


//////////////////OBJECTS IN ARRAYS
// let fil = [
//   {
//     street:"Partizanska",
//     number:7,
//     zipcode:1000,
//     activities:{
//       firstn:"FILIP",
//       lastn:"MILOSEVKSI",
//       middle:"FICO"
//     },
//     city:"Skopje",
//     state:"Macedonia"
// },
// {
//   street:"Ilindenska",
//   number:3,
//   zipcode:1000,
//   city:"Skopje",
//   state:"Macedonia"
// },
// {
//   street:"Ruzveltova",
//   number:5,
//   zipcode:1000,
//   city:"Skopje",
//   state:"Macedonia"
// }
// ]
// console.log(fil); 
// console.log(fil[0].street);
// let streetname = fil[0].street
// console.log(streetname);


/////////////////////////////////////////OBJECTS IN ARRAY IN OBJECTS
// let company = {
//   name: "Healthy",
//   activity:["Food Manufacturing","Improving Kids","Kids","Manufacturing Toys"],
//   address: [{
//     street:"Partizanska",
//     number:11,
//     zipcode:1000,
//     city:"Skopje",
//     state:"Macedonia"
//   },
//   {
//     street:"Ilindenska",
//     number:51,
//     zipcode:1000,
//     city:"Skopje",
//     state:"Macedonia"
//   },
//   {
//     street:"Ruzveltova",
//     number:25,
//     zipcode:1000,
//     city:"Skopje",
//     state:"Macedonia"
//   }
// ],
//   year:1999,
// }
// let access = company.address[1].street
// console.log(access);                              ///// Pristap do elementi
// console.log(company.activity[0]);
// console.log(company.address[0].street);


////////////////////////////ex3.5
// let people = {
//   friends:[]
// }

// let first = {
//   fn:"MARKO",
//   ln:"APOSTOLOVSKI",
//   id:"123"
// }

// let second = {
//   fn:"STEFAN",
//   ln:"NIKOLOVSKI",
//   id:"456"
// }

// let third = {
//   fn:"VLADO",
//   ln:"STEFKOVSKI",
//   id:"789"
// }
// people.friends.push(first,second,third)  
// console.log(people);


///////////////////////////manipulating in array
// let list =  ['FIRST','Svekis',"MIDDLE",'hello world',"LAST"]
// console.log(list);
// list.shift()
// console.log(list);
// list.pop()
// console.log(list);
// list.splice(0,0, "FIRST")
// console.log(list);
// list.push("LAST")
// console.log(list);


// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(2,1,99)
// console.log(arr);

