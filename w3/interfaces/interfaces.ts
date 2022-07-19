// Type Aliases
// Type Aliases allow defining types with a custom name(an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number;
type CarType = string;
type CarModel = String;
type Car = {
 year: CarYear,
 type: CarType,
 model: CarModel
}
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const CarModel: CarModel = "Corolla";
const car5: Car = {
 year: carYear,
 type: carType,
 model: CarModel
}
console.log(car5);

// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
 height: number,
 width: number
}
const rectangle: Rectangle = {
 height: 20,
 width: 10
}
console.log(rectangle)
// Extending Interfaces
// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface ColoredRectangle extends Rectangle {
 color: string;
}
const coloredRectangle: ColoredRectangle = {
 height: 20,
 width: 10,
 color: 'red'
}