function recttange(width: number, heitht: number) {
 this.width = width;
 this.heitht = heitht;
}
let rect = new recttange(20, 20);
console.log(rect);

class person3 {
 name: string;
 age: number;
 profession: any;
 constructor(name: string, age: number, profession: any) {
  this.name = name;
  this.age = age;
  this.profession = profession;
 }
}
let john = new person3('john', 30, 'programmer');
console.log(john)

class student extends person3 {
 school: string;
 grade: number;
 constructor(school: string, grade: number) {
  super('john', 30);
  this.school = school;
  this.grade = grade;
 }
}

let awais = new student('IT', 12);
console.log(awais)