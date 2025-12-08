let age: number = 25;
let name: string = "Rumesh";
let isStudent: boolean = true;

// function example
function greet(person: string): string {
  return `Hi ${person}!`;
}



console.log(greet(name));
console.log(`Age: ${age}, Name: ${name}, Is Student: ${isStudent}`);// array example
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
// tuple example
let person: [string, number] = ["Alice", 30];
console.log("Person:", person);
// enum example
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", Color[favoriteColor]);