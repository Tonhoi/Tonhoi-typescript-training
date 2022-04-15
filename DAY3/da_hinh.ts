class a {
    print() : void {
        console.log('Kết quả 1')
    }
}

class b {
    print() : void {
        console.log('Kết quả 2')
    }
}

const c = new b()

console.log(c.print());

