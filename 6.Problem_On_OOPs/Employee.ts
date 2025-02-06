class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    getDetail(): void {
        console.log(`Employee name is ${this.name} and his salary is ${this.salary}`);
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string){
        super(name, salary);
        this.department = department;
    }
    getDetail(): void {
        console.log(`Manager name is ${this.name}, his salary is ${this.salary} and his department is ${this.department}`);
    }
}
let emp = new Employee("Mohit", 34332);
emp.getDetail();
let man = new Manager("Mohit", 34332, "IT");
man.getDetail();