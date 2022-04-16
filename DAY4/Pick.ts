interface Keys {
    id?: number
    age?:number
}
const studentD:Pick<Keys, 'age'> = {
    age: 21,
}
console.log(studentD);