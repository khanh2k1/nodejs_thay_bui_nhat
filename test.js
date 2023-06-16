const object = {
    body : {
        content: {
            work : "Lau nha",
            isCompleted: false
        }
    }
}


const { content } = object.body
const content2 = object.body.content
console.log(content)
console.log(content2)