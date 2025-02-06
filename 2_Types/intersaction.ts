// Combining Multiple Types
type Vehicle = {
    name: string;
}

type Engine = {
    horsePower: number;
}

type Car = Vehicle & Engine & {
    brand: string;
}

const myCar: Car = {
    name: "toyota1",
    horsePower: 200,
    brand: "toyota"
}
console.log(myCar);

//  Using Intersection with Interfaces
interface Animal {
    name: string;
}

interface Mammal {
    hasFur: boolean;
}

type Dog = Animal & Mammal;

const dog: Dog = {
    name: "Buddy",
    hasFur: true
};

console.log(dog); 
  