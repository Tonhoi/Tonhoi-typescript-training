class d {
    constructor(
        private id: number,
        private name: string,
        private age: number,
        private Isman: boolean
    ) {}
    
    updateAge() {
        if ( this.age >= 21 ) {
            return this.Isman = true
        }
    }
    print(): string {
        return `${this.name} năm nay ${this.age} tuổi ${this.Isman ? 't' : "f"} `
    }
}
const e = new d(1, 'Hội', 20, false)
// c.updateAge()
console.log(e.print());