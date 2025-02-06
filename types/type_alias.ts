// Basic type
type StringOrNumber = string | number;
let value: StringOrNumber;

value = "Hello";  
value = 42;     
// value = true;  


// Type Alias for Objects
type Person1 = {
    name: string;
    age: number;
};

const user: Person1 = {
    name: "Mohit",
    age: 22
};

console.log(user.name);  // Output: Mohit
console.log(user.age);   // Output: 22
  


// Type Alias extend
type Person = {
    name: string;
    age: number;
};

type Address = Person & { // extend person in address
    city: string;
    country: string;
};

const userWithAddress : Address = {
    name: "Mohit",
    age: 22,
    city: "Delhi",
    country: "India"
}
console.log(userWithAddress);

  