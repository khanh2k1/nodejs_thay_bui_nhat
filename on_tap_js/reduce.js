const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue, index) => {
  console.log(index);
  return accumulator.concat(currentValue);
}, []);

const new_numbers = [...flattened];
// flattened is [0, 1, 2, 3, 4, 5]

// acc=[] cur[0,1] i=0
// acc=[0,1] curr=[2,3] i=1
// acc= [0,1,2,3] cur=[4,5] i=2
// acc=[0,1,2,3,4,5]

// concat : use to merge two or more arrays

const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  // allNames[name] ?? 0;
  // <=>
  //if(allNames[name] != null || allNames[name] != undefined) return allNames[name]
  //else return 0
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

const names1 = [...names];
const names2 = names;

console.log(names1 === names);
console.log(names2 === names);
names2.push("Khanh");
console.log(names);

function isBigEnough(value) {
  return value > 10 ? true : false;
}

function bigEnough(value){
    if(value>10) return value
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
const reduced = [12, 5, 8, 130, 44].reduce((acc, cur, i)=>{
    if(cur>10) return acc.concat(cur)
    else return acc
},[]);

console.log(filtered)

// acc=[] cur=12 i=0 
// acc=[12] cur=5 i=1
// acc=
console.log(reduced)

const numbers3 = [1, 4, 9];
const doubles = numbers3.map((num) => {
    console.log(num)
});


console.log(doubles); // [2, 8, 18]
console.log(numbers3); // [1, 4, 9]
