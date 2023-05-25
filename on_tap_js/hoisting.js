// console.log(a)
// let a = 10

var a = 10;

function test() {
  // chiu anh huong cua hoisting
  // => var a = undefined;
  console.log(a);
  var a = 100;
  console.log(a);
}

test();
console.log(a);

// var b = undefined

// b() // => b is not a function

// var b = function() {
//     console.log("HELLO WOLRD")
// }

const arr1 = [1, 2, 3, 4, 5, 6, 7, 1];

let result = arr1.filter((acc, val, index) => {
  if (val > 5) return val;
}, []);

console.log(result);

const users = [
  {
    _id: "645ce1c1fad4af1bb434f4bb",
    isActive: true,
    balance: "$3,212.24",
    age: 28,
    name: "Jessie Gallegos",
  },
  {
    _id: "645ce1c154e98f6d9acd59ea",
    isActive: true,
    balance: "$2,543.61",
    age: 27,
    name: "Melton Dudley",
  },
  {
    _id: "645ce1c18a901fca1134ec0f",
    isActive: false,
    balance: "$2,134.20",
    age: 39,
    name: "Barnett Carpenter",
  },
  {
    _id: "645ce1c13aadf2dfbe142c3c",
    isActive: true,
    balance: "$1,154.12",
    age: 30,
    name: "Maggie Jefferson",
  },
  {
    _id: "645ce1c1fe14b844d0244195",
    isActive: false,
    balance: "$1,264.45",
    age: 30,
    name: "Hood Cardenas",
  },
];

// tim user co balance nho nhat, in ra ten

// let result1 = users.reduce((acc, val, index)=> {

//     let balance_int = convert(val["balance"])

//     acc = balance_int
//     let acc1 = convert(acc["balance"])
//     if(balance_int < acc1) return balance_int
//     return acc1
// })

// function convert(a) {
//     let balance_int = a.slice(1);
//     balance_int = balance_int.replace(',','')
//     balance_int = balance_int.replace('.','')
//     return balance_int
// }
// console.log(result1);

//check props co trong object ?
const user = {
  name: "KHANH",
};
console.log("name" in user);

// indexOf
const users2 = [
  {
    _id: "645ced5fd490711ee0480512",
    isActive: true,
    balance: "$1,102.32",
    age: 40,
    name: "Hart Walton",
  },
  {
    _id: "645ced5f5d5be63ad6a1d0f3",
    isActive: true,
    balance: "$2,114.26",
    age: 38,
    name: "Sharlene Cook",
  },
  {
    _id: "645ced5f90da133e5ed913d8",
    isActive: true,
    balance: "$1,233.04",
    age: 26,
    name: "Concetta Horne",
  },
  {
    _id: "645ced5f07bb0654053cd64b",
    isActive: false,
    balance: "$3,121.49",
    age: 36,
    name: "Reynolds Porter",
  },
  {
    _id: "645ced5f5453dea73db28ce5",
    isActive: false,
    balance: "$1,475.24",
    age: 23,
    name: "Kristina Marks",
  },
];

// array object muon tim phai dung findIndex

console.log(users2.indexOf(2))