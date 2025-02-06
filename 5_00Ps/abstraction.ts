abstract class Shape {
    abstract getArea(): number; // Abstract method (no implementation)
  
    display(): void {
      console.log("This is a shape.");
    }
}
  
class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
}
  
  const myCircle = new Circle(5);
  console.log(myCircle.getArea()); // Output: 78.53981633974483
  myCircle.display(); // Output: This is a shape.
  
  //  Cannot create an instance of an abstract class
  // const myShape = new Shape(); // Error
  