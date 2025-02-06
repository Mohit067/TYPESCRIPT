// allow you to define a set of named constants.

// 1. Numeric Enums (Default)
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}
  
let move: Direction = Direction.Up;
console.log(move); // Output: 0
  

// we can manually assign values to enum members.
enum Status {
    Success = 1,
    Failure = 0,
    Pending = 2
}

let statu : Status = Status.Pending;
console.log("status is : ", statu);

console.log(Status.Success); // Output: 1
console.log(Status["Failure"]); // Output: 0
  

// String Enums
enum Roles {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(Roles.Admin); // Output: "ADMIN"
  

// Heterogeneous Enums (Mixing String and Numbers)
enum MixedEnum {
    Yes = "YES",
    No = 0
}

console.log(MixedEnum.Yes); // Output: "YES"
console.log(MixedEnum.No);  // Output: 0
  

// Computed Enums
enum Computed {
    X = 10,
    Y = X * 2  // 20
}

console.log(Computed.Y); // Output: 20
