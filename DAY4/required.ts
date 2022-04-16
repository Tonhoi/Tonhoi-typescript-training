interface Student {
    id?: number
    age?:number
}


const studentB:Required<Student> = {
    id: 1,
    age: 21
}

console.log(studentB);
