// Khai báo và sử dụng đơn giản
function sayHello1(id: number, name: string, age?: number) {
    console.log(id, name, age);
}
sayHello1(1, 'Hội')


// ---------------------------------------
// Kết quả tương tự như trên mà nó sẽ rõ ràng hơn
function sayHello2(Student: {id: number, name: string, age?: number}) {
    const {id, name, age} = Student
    console.log(id, name, age);
}
sayHello2({
    id: 1,
    name: "Hội"
})


// Cách này sẽ rút gọn hơn 2 cách kia bằng cách destructuring thẳng lên trên
function sayHello3({id, name, age}: {id: number, name: string, age?: number}) {
    console.log(id, name, age);
}
sayHello3({
    id: 1,
    name: "Hội"
})


// -----------------------------------
// khởi tạo 1 interface rồi sử dụng làm đối số sẽ là cách đơn giản nhất và tối ưu nhất trong 4 cách
interface Student {
    id: number;
    name: string;
    age ?: number
}
function sayHello4({id, name, age}: Student) {
    console.log(id, name, age);
}
sayHello4({
    id: 1,
    name: "Hội"
})