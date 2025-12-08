var age = 25;
var name = "Rumesh";
var isStudent = true;
// function example
function greet(person) {
    return "Hi ".concat(person, "!");
}
console.log(greet(name));
console.log("Age: ".concat(age, ", Name: ").concat(name, ", Is Student: ").concat(isStudent)); // array example
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
// tuple example
var person = ["Alice", 30];
console.log("Person:", person);
// enum example
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("Favorite Color:", Color[favoriteColor]);
