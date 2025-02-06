class Phone {
    public name: string;// accessable anywhere
    private version: number; // accessable only in class
    protected price: number;// accessable within another classes

    constructor(name: string, version: number, price: number){
        this.name = name;
        this.version = version;
        this.price = price;
    }

    public greet(): number {
        return this.version;
    }
}

let Realmi = new Phone("Realmi", 14, 13000);
console.log(Realmi.greet());
console.log(Realmi.name);
// console.log(Realmi.version);// not accessable outside of class





