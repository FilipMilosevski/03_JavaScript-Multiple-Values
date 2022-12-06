let myCar = {
  make:"Mercedes",
  model:"S500",
  year:2015,
  fueltype:"gas",
  gears:7,
  color:"green"
}

console.log(myCar)

let prop = "color";
myCar[prop] = "red";
console.log("My cars new color:", myCar.color);

let prop2 = "model";
myCar[prop2] = "C220";
console.log("My new model is: ", myCar.model);

prop = "forSale"; 
myCar[prop] = true;
console.log(myCar);
console.log(`Car ${myCar.make} ${myCar.model} ${myCar.year}`);
console.log("For sale: ", myCar.forSale);

let fil = "//////////////////////";
console.log(fil)

let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  adress: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city:"Miami",
    state:"Florida"
  },
  yearOfEstablishment: 2021
}
console.log(company);
company.adress.zipcode = "33117";
company["adress"]["number"] = "100";


let people ={
  friends: []
};
let filip = {
  firstname:"Filip",
  lastname:"Miloshevski",
  id:1
}
 let goran = {
  firstname: "Goran",
  lastname: "Cvetkovski",
  id:2
 }
 let damjan = {
  firstname: "Damjan",
  lastname: "Stefanovski",
  id:2
 }
 let dragan = {
  firstname: "Dragan",
  lastname: "Nikolovski",
  id:2
 }
people.friends.push(filip, goran, damjan, dragan);
console.log(people);


let nnn = "/////////////////";
console.log(nnn);


const theList = [
  'Laurence',
   'Svekis',
    true,
     35,
      null,
       undefined,
        {test: 'one', score: 55},
         ['one', 'two']]

         console.log(theList);

         let result = [
          'FIRST',
          'Svekis',
          'MIDDLE',
          'Hello World',
          'LAST',
         ];
         console.log(result);

        theList.splice(0,1,"FIRST");
        console.log(theList);
        theList.splice(2,7,"MIDDLE")
        console.log(theList);
        theList.push("hello world", "LAST")
        console.log(theList);

  let exe = "/////////////////"
  console.log(exe);      

  let inventory= {
    items:[]
  }

  let stores = {
    name: "martin",
    model: "covek",
    cost: 112,
    quality: "standard",

  }
console.log(stores);

inventory.items.push(stores);
console.log(inventory);

let carcatalog = {
  brands:[]
}
console.log(carcatalog);
let mer = {
  name:"Mercedes",
  model:"CLS500",
  year:2015,
  gas:"Gasoline",
  gears:6,
}

let bmw = {
  name:"BMW",
  model:"M5",
  year:2017,
  gas:"Diesel",
  gears:7,
}
let aud = {
  name:"Audi",
  model:"Q8",
  year:2020,
  gas:"Gasoline",
  gears:6,
}

carcatalog.brands.push(mer,bmw,aud)

console.log(aud.name, bmw.name, aud.name, "are German car manufacturers");


let arpro = [3,10,50,1,90,222,70,43]
console.log(arpro);
arpro.sort();
console.log(arpro.reverse());



let arrpro = ["bmw", "seat", "acura", "volkwagen", "honda"]
console.log(arrpro);
console.log(arrpro.sort());
console.log(arrpro.reverse());


com = {
  // cn: "VERO",
  act:["Discounts", "Promotions", "Buy one get one free"],
  address1:[
    {
      store:"Vero 9",
      street:"1st street",
      number:"074241564",
      zipcode:42324,
      city:"Miami",
      state:"Florida"
    } ,
    {
      store:"Vero 12",
      street:"2nd street",
      number:"075121998",
      zipcode:12982,
      city:"Las Vegas",
      state:"Nevada"
    }, 
    {
      store:"Vero 7",
      street:"3rd street",
      number:"077199112",
      zipcode:42288,
      city:"Los Angeles",
      state:"California"
    } 
  ]

}
console.log(com);
// console.log(com.cn, com.act[1], com.address1[0].street);

console.log(com.act[1],"on friuts and vegetables",com.address1[0].store, com.address1[0].state);
console.log(com.act[2],"on ice cream",com.address1[1].store, com.address1[1].state);
console.log(com.act[0],"drinks and food snacks",com.address1[2].store, com.address1[2].state);


com.address1.push("FILIP", "MILOSEVSKI");
console.log(com);

let position = [
  {
    name:"FILIP",
    surname:"MILOSEVSKI",
    position:"ATTACK"
  },
  {
    name:"MARTIN",
    surname:"SPIROV",
    position:"DEFENCE"
  },
  {
    name:"TONI",
    surname:"NIKOLOVSKI",
    position:"MIDDLE"
  }
];

let newposition = {
  name:"STEFAN",
  surname:"RISTOVSKI",
  position:"WINGER"
}

console.log(position);
position.push(newposition);
console.log(position);

position[0]["status"] = "free";
position[1]["status"] = "sale";
position[2]["status"] = "recovered";
position[3]["status"] = "injured";

console.log(position);


let random = Math.floor(Math.random()*7);
console.log(random);


let numbers = [3,1,6,8,9,4,7];
console.log(Math.min.apply(Math, numbers));
console.log(Math.max.apply(Math, numbers));
let numbers1 = numbers[Math.floor(Math.random()*numbers.length)]
console.log(numbers1);




let brb = ("////////////////");
console.log(brb);


let form = {
 companies:[
  {
    company:"MOTOCENTAR",
    address:"PARTIZANSKA",
    zipcode:"1000",
    city:"SKOPJE",
    country:"MACEDONIA",
    storesnum:"8",
    employeenum:"90"
  },
  {
    company:"TINEKS",
    address:"PRASKA",
    zipcode:"1000",
    city:"SKOPJE",
    country:"MACEDONIA",
    storesnum:"5",
    employeenum:"120"
  },
  {
    company:"NEPTUN",
    address:"RUZVELTOVA",
    zipcode:"1000",
    city:"SKOPJE",
    country:"MACEDONIA",
    storesnum:"3",
    employeenum:"110"
  },
  {
    company:"SETEC",
    address:"VODNJANSKA",
    zipcode:"1000",
    city:"SKOPJE",
    country:"MACEDONIA",
    storesnum:"17",
    employeenum:"150"
  },
  {
    company:"ROYAL",
    address:"LONDONSKA",
    zipcode:"1000",
    city:"SKOPJE",
    country:"MACEDONIA",
    storesnum:"25",
    employeenum:"260"
  },


 ]
}



console.log(form);
console.log(form.companies[0].company, form.companies[0].country);
console.log(form.companies[1].company, form.companies[1].country);
console.log(form.companies[2].company, form.companies[2].country);
console.log(form.companies[3].company, form.companies[3].country);
console.log(form.companies[4].company, form.companies[4].country);

// console.log(form.companies.employeenum*form.companies.employeenum); //?????


						
let strtonum0 = Number(form.companies[0].employeenum);
console.log(typeof strtonum0);
let strtonum1 = Number(form.companies[1].employeenum);
console.log(typeof strtonum1);
let strtonum2 = Number(form.companies[2].employeenum);
console.log(typeof strtonum2);
let strtonum3 = Number(form.companies[3].employeenum);
console.log(typeof strtonum3);
let strtonum4 = Number(form.companies[4].employeenum);
console.log(typeof strtonum4);

// let sumOfEmployeeEnum = 
//   form.companies[0].employeenum 
// + form.companies[1].employeenum 
// + form.companies[2].employeenum 
// + form.companies[3].employeenum 
// + form.companies[4].employeenum;
let sumOfEmployeeEnum = strtonum0 + strtonum1 + strtonum2 + strtonum3 + strtonum4;						
            

console.log(sumOfEmployeeEnum);


// let filipo = "25"
// console.log(typeof filipo);


// let strtonum = Number(filipo)
// console.log(typeof strtonum);
// console.log(strtonum);

// let filipo1 = "25"
// console.log(typeof filipo1);

// let strtonum1 = Number(filipo1)
// console.log(typeof strtonum1);
// console.log(strtonum1);






