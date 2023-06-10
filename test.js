const array = [10,20,40]
let arrayTarget={}
Object.assign(arrayTarget, array)

let a = {
    name: "KHANH",
    age: 22
}

a.age = 100
let b = [] 
Object.assign(b,a)
console.log(b)



// array.forEach(item=>console.log(typeof(item)))


// for(let i = 0; i< array.length; i++) {
//     console.log(typeof array[i])
// }

// array[2]=10
// console.log(array)
// console.log(JSON.stringify(arrayTarget, null, 2))

var xx = ["123","567","880", "234", "446"]

var yy = xx.reduce((pre, cur, i)=>{
    return parseInt(cur)+pre
}, 0)

console.log(yy)

function checkElementsIsOdd(item){
    let temp = item
    while(temp>10) {
        let y = temp % 10
        temp=parseInt(temp/10)
        if(y%2!=0){
            console.log('Co 1 phan tu la so le', item)
            return true
        }
    }
    return 0
}

checkElementsIsOdd("446")

const result = xx.reduce((pre, cur, i)=>{
    const x = parseInt(cur)

    if(checkElementsIsOdd(x)==true) {
        return x+pre
    }
    return pre
}, 0)

console.log(result)