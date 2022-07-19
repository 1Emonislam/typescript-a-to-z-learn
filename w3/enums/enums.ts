// An enum is a special "class" that represents a group of constants(unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirection {
 North,
 East,
 South,
 West
}
let currentDirection = CardinalDirection.North;
let currentDirection2 = CardinalDirection.East;
console.log(currentDirection, 'defualt values', currentDirection2, 'defualt values2')

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
enum StatusCodes {
 NotFound = 404,
 Success = 200,
 Accepted = 202,
 BadRequest = 400
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Accepted)

// String Enums
// Enums can also contain strings.This is more common than numeric enums, because of their readability and intent.

enum CardinalDirections {
 North = 'North',
 East = 'East',
 South = 'South',
 West = 'West'
};
console.log(CardinalDirections.North);
console.log(CardinalDirection.South)