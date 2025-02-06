class Animal {
    constructor(
        public name: string
    ) {};

    makeSound(): void{
        console.log("Generate sound ...");
    }
}

class Cat extends Animal {
    constructor(name: string){
        super(name);
    }
    makeSound(): void {
        console.log("miau miau ... ");
    }
}

let sound = new Cat("pussy");
sound.makeSound();