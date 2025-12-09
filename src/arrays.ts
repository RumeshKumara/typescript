// ==================== ARRAYS ====================
// Arrays are collections of elements of the same type
// Two ways to declare arrays in TypeScript

// Method 1: Using square brackets
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Method 2: Using Array generic type
let scores: Array<number> = [85, 90, 78, 92];
let cities: Array<string> = ["New York", "London", "Tokyo"];

// Array operations
numbers.push(6);                    // Add element at end
numbers.pop();                      // Remove last element
numbers.unshift(0);                 // Add element at beginning
let firstNum = numbers.shift();     // Remove first element

// Array methods
let doubled = numbers.map(n => n * 2);              // [2, 4, 6, 8, 10]
let evens = numbers.filter(n => n % 2 === 0);      // [2, 4]
let sum = numbers.reduce((acc, n) => acc + n, 0);  // Sum of all numbers

console.log("Arrays:", { numbers, names, doubled, evens, sum });


// ==================== TUPLES ====================
// Tuples are fixed-length arrays where each element has a specific type
// Useful when you want to store a fixed set of values with different types

// Basic tuple - [string, number]
let person: [string, number] = ["John", 30];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

// Tuple with multiple types
let employee: [number, string, boolean, number] = [101, "Alice", true, 50000];
// [id, name, isActive, salary]

// Accessing tuple elements
let employeeId = employee[0];       // 101 (number)
let employeeName = employee[1];     // "Alice" (string)
let isActive = employee[2];         // true (boolean)
let salary = employee[3];           // 50000 (number)

// Tuple with optional elements
let coordinate: [number, number, number?] = [10, 20];  // z is optional
coordinate.push(30);  // Now it has 3 elements

// Tuple with rest elements
let mixedData: [string, ...number[]] = ["Scores", 85, 90, 78, 92];

// Readonly tuple - cannot be modified
let point: readonly [number, number] = [10, 20];
// point[0] = 15;  // Error: Cannot assign to '0' because it is a read-only property

// Array of tuples
let users: [string, number][] = [
    ["Alice", 25],
    ["Bob", 30],
    ["Charlie", 35]
];

console.log("Tuples:", { person, employee, coordinate, users });


// ==================== ENUMS ====================
// Enums allow you to define a set of named constants
// Makes code more readable and maintainable

// Numeric Enum (default values: 0, 1, 2, 3...)
enum Direction {
    North,      // 0
    South,      // 1
    East,       // 2
    West        // 3
}

let currentDirection: Direction = Direction.North;
console.log(`Direction: ${currentDirection}`);  // Output: 0
console.log(`Direction name: ${Direction[0]}`); // Output: "North"


// Numeric Enum with custom starting value
enum StatusCode {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}

function handleResponse(code: StatusCode) {
    switch(code) {
        case StatusCode.Success:
            return "Request successful!";
        case StatusCode.NotFound:
            return "Resource not found!";
        case StatusCode.ServerError:
            return "Server error occurred!";
        default:
            return "Unknown status";
    }
}

console.log(handleResponse(StatusCode.Success));    // "Request successful!"
console.log(handleResponse(StatusCode.NotFound));   // "Resource not found!"


// String Enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
    Yellow = "YELLOW"
}

let favoriteColor: Color = Color.Blue;
console.log(`Favorite color: ${favoriteColor}`);  // Output: "BLUE"


// Heterogeneous Enum (mixed string and number - not recommended)
enum Mixed {
    No = 0,
    Yes = "YES"
}


// Const Enum - more performance, compiled away
const enum Size {
    Small = "S",
    Medium = "M",
    Large = "L",
    ExtraLarge = "XL"
}

let shirtSize: Size = Size.Medium;
console.log(`Shirt size: ${shirtSize}`);  // Output: "M"


// Real-world example: Days of the week
enum DayOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(day: DayOfWeek): boolean {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

console.log(`Is Saturday weekend? ${isWeekend(DayOfWeek.Saturday)}`);  // true
console.log(`Is Monday weekend? ${isWeekend(DayOfWeek.Monday)}`);      // false


// Real-world example: User roles
enum UserRole {
    Admin = "ADMIN",
    Moderator = "MODERATOR",
    User = "USER",
    Guest = "GUEST"
}

interface User {
    name: string;
    role: UserRole;
}

function checkPermission(user: User): string {
    switch(user.role) {
        case UserRole.Admin:
            return "Full access granted";
        case UserRole.Moderator:
            return "Moderate access granted";
        case UserRole.User:
            return "Basic access granted";
        case UserRole.Guest:
            return "Limited access granted";
        default:
            return "No access";
    }
}

let admin: User = { name: "John", role: UserRole.Admin };
let guest: User = { name: "Jane", role: UserRole.Guest };

console.log(`${admin.name}: ${checkPermission(admin)}`);   // "John: Full access granted"
console.log(`${guest.name}: ${checkPermission(guest)}`);   // "Jane: Limited access granted"


// ==================== COMBINING ARRAYS, TUPLES & ENUMS ====================

// Array of enums
let availableColors: Color[] = [Color.Red, Color.Blue, Color.Green];

// Tuple with enum
let product: [string, number, Color] = ["T-Shirt", 29.99, Color.Blue];
console.log(`Product: ${product[0]}, Price: $${product[1]}, Color: ${product[2]}`);

// Array of tuples with enums
let inventory: [string, number, Size][] = [
    ["T-Shirt", 10, Size.Medium],
    ["Jeans", 5, Size.Large],
    ["Jacket", 3, Size.Small]
];

console.log("Inventory:", inventory);


// ==================== SUMMARY ====================
/*
ARRAYS:
- Collections of elements of the same type
- Dynamic size (can grow or shrink)
- Syntax: type[] or Array<type>
- Use when: You need a list of similar items

TUPLES:
- Fixed-length arrays with specific types for each position
- Each element can be a different type
- Syntax: [type1, type2, type3]
- Use when: You need to store a fixed set of related values

ENUMS:
- Named constants for better code readability
- Can be numeric (default) or string-based
- Provides reverse mapping for numeric enums
- Use when: You have a fixed set of related constants
*/
