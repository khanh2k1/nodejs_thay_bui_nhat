// function resolveAfter2Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();


const p = new Promise((res, rej) => {
  res(1);
});


console.log(p === asyncReturn()); // false

console.log(p.then(data=>data).finally(data=>data))
console.log(asyncReturn().then(data=>data).finally(data=>data));


function basicReturn(   ) {
  return Promise.resolve(p);
}
async function asyncReturn() {
  return p;
}

// console.log(`p= ${p}`)
// console.log(`basicReturn= ${basicReturn()}`)


// console.log(p === basicReturn()); // true

