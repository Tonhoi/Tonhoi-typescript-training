class a {
    constructor(
        public id: number,
        public name: string,
        public age: number
    ) {}
}

class b extends a {
    constructor(public i: number, public n: string, public a: number) {
        super(i, n, a)
    }
    print(): string {
        return `${this.n} năm nay ${this.a} tuổi` 
    }
}

const c = new b(1, 'Hội', 20)

console.log(c.print());