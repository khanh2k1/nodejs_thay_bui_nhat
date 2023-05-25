// template literal ``

a = "hihi";
b = "Khanh";
// console.log(`hello ${a} ${b}` )
// console.log(a.toUpperCase())
// console.log(a.length)
// console.log(a.toLowerCase().includes('HI'.toLowerCase()))

// // cat tu vi tri thu 2
// console.log(b.slice(2))

// // cat tu vi tri 1 den truoc 2
// console.log(b.slice(1,2))

// slice : cat chuoi
console.log(b.slice(-2));

// splice : dung cho Array
let array = ["a", "b", "c"];
// console.log(array.splice(2))
// console.log(array.slice(2)) // ko dung dc
// // numb1: vi tri index, numb2 : so luong lay
// console.log(array.splice(1, 2, 'hello', 'khanh'))
// console.log(array)

// console.log(array.length)
// // them vao cuoi
// console.log(array.push('hello'))

// // them vao dau
// console.log(array.unshift('hello'))
// xoa cuoi mang
// console.log(array.pop())

// xoa dau mang
// array.shift()

// reference type : array, object, function

// primitive type : let, const , boolean , String, null, underfined

let x = "hello world";

x = x.replace(/l/g, "-");
console.log(x);

// tính tần số xuất hiên trong mảng

const numbers = [5,6,3,10,1,1,2,2,7]

// loop1: acc = {} , val = 5, index = 0
// loop2: acc = {5} , val = 6, index = 1
// loop2: acc = {5,6} , val = 3, index = 1
const result = numbers.reduce((acc, val, index)=>{
    if(val in acc) acc[val]++
    else acc[val]=1
    return acc
},{}) 

console.log(result)

