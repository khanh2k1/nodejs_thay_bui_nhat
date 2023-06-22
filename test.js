const body = {
    email: {
        type:"email",
        value:"Khanh@gmail.com"
    },
    password: "khanh"
}

const { email, password } = body
const email2 = body['email']
console.log(typeof email, typeof email2)