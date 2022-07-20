// TypeScript adds types and visibility modifiers to JavaScript classes.

// class Person {
//  name: string;
// }
// const person = new Person();
// person.name = "Emon";
// console.log(person)
// Members: Visibility
// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.

//  public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
//  protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
class Person {
 private name: string;

 public constructor(name: string) {
  this.name = name;
 }

 public getName(): string {
  return this.name;
 }
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

// Inheritance: Implements
// Interfaces(covered here) can be used to define the type a class must follow through the implements keyword.
interface Shape {
 getArea: () => number;
}

class Rectangle implements Shape {
 public constructor(protected readonly width: number, protected readonly height: number) { }

 public getArea(): number {
  return this.width * this.height;
 }
}
//over

interface Shape {
 getArea: () => number;
}

class Rectangle implements Shape {
 // using protected for these members allows access from classes that extend from this class, such as Square
 public constructor(protected readonly width: number, protected readonly height: number) { }

 public getArea(): number {
  return this.width * this.height;
 }

 public toString(): string {
  return `Rectangle[width=${this.width}, height=${this.height}]`;
 }
}

// Override
// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.
class Square extends Rectangle {
 public constructor(width: number) {
  super(width, width);
 }

 // this toString replaces the toString from Rectangle
 public override toString(): string {
  return `Square[width=${this.width}]`;
 }
}

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.This is done by using the abstract keyword.Members that are left unimplemented also use the abstract keyword.

abstract class Polygon {
 public abstract getArea(): number;

 public toString(): string {
  return `Polygon[area=${this.getArea()}]`;
 }
}

class Rectangle extends Polygon {
 public constructor(protected readonly width: number, protected readonly height: number) {
  super();
 }

 public getArea(): number {
  return this.width * this.height;
 }
}