interface Keys {
    id?: number
    age?:number
}
const studentC:Omit<Keys, 'age'> = {
    id: 1,
}
console.log(studentC);