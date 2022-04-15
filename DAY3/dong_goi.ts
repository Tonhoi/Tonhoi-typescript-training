class f {
    constructor(
        private id: number,
        private name: string,
        private age: number
    ) {}
}
class g extends f {
    constructor(private i: number, private n: string, private a: number) {
        super(i, n, a)
    }
    print(): string {
        return `${this.n} năm nay ${this.a} tuổi`
    }
}
const h = new g(1, 'Hội', 20)
console.log(h.print());