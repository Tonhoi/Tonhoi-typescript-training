interface student {
    id: number
    name: string
    age:number
}

const studentA:Partial<student> = {
    id : 1
}

console.log(studentA);
