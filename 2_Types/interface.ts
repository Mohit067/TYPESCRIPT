interface Person {
    readonly id: number; // readonly property
    name: string;
    age: number;
    address?: string;  // Optional property
}

const user: Person = {
    id: 123,
    name: "Mohit",
    age: 30,
};
console.log(user);
console.log(user.name);     
console.log(user.address);  //  Output: undefined (since it’s optional)
user.name = "Rohit";
console.log(user.name);
// user.id = 321;  /** not allowed because this is readonly */ 



// extend person in detail
interface Detail extends Person{
    work : string;
    time : number;
}

const userwithDetail : Detail = {
    id: 123,
    name: "Mohit",
    age: 30,
    work: "nothing",
    time: 12
}
console.log(userwithDetail);
