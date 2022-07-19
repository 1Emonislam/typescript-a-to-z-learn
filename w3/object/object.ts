// TypeScript has a specific syntax for typing objects.
const car: {
 type: string,
 model: string,
 year: number
} = {
 type: 'Honda',
 model: 'z7',
 year: 2010
}
// Type Inference
// TypeScript can infer the types of properties based on their values.

const car2 = {
 type: 'Toyota',
 number: 54
}
car.type = "food";
car2.number = 5;

// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.
const car3: { type: string, milege?: number } = {
 type: 'Toyota',
}
car3.milege = 5555;
console.log(car3)

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.badge = 5;
nameAgeMap.age = 43; 