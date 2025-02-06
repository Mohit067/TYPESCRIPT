class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Name is ${this.name}, age is ${this.age}`;
    }
}

let obj = new Person("Mohit", 22);
console.log(obj.greet());
console.log(obj.age);

