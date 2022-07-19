var x = 50;
console.log(x)
function createName(fName: string, lName: string): string {
 let name: string = fName + " " + lName;
 return name;
}
let names = createName("Emon", "Islam")
console.log(names)