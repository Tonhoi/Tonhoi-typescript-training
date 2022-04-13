// đoạn mã typescript trước khi compile
(() => {
    interface Student {
        id: number;
        name: string;
        age: number;
    }
    const student: Student = {
        id: 1,
        name: 'Alice',
        age: 18,
    }
    const { id, name, age } = student;
    console.log(id, name, age);
})();

// Đoạn mã typescript sau khi đã được compile

(function () {
    var student = {
        id: 1,
        name: 'Alice',
        age: 18
    };
    var id = student.id, name = student.name, age = student.age;
    console.log(id, name, age);
})();