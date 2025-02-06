interface User {
    name: string;
    age: number;
    email: string;
}

function format(user: User): string {
    return `User ${user.name} \n${user.age} year lod \ncontact via email ${user.email}`;
}

const user11: User = {
    name: "Mohit",
    age: 22,
    email: "mohit3@gamil.com"
}

console.log(format(user11));
