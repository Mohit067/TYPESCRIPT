let user: object = { 
    name: "Mohit", 
    age: 25
};


let user1 = { ...user }; // spread the object
console.log(user); // { name: 'Mohit', age: 25 }
console.log(user1);// { name: 'Mohit', age: 25 }


// Log specific properties of the object
console.log('Name:', (user as { name: string }).name);
console.log('Age:', (user as { age: number }).age);
