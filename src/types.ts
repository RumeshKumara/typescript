// ============================================
// TYPESCRIPT BASIC TYPES WITH EXAMPLES
// ============================================

// 1. NUMBER
// Used for numeric values (integers and floating-point)
let age: number = 25;
let price: number = 99.99;
let hexValue: number = 0xf00d;
console.log("Number:", age, price, hexValue);

// 2. STRING
// Used for textual data
let firstName: string = "John";
let message: string = `Hello, ${firstName}!`; // Template literals
console.log("String:", message);

// 3. BOOLEAN
// Used for true/false values
let isActive: boolean = true;
let hasAccess: boolean = false;
console.log("Boolean:", isActive, hasAccess);

// 4. ARRAY
// Two ways to declare arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log("Array:", numbers, names);

// 5. TUPLE
// Fixed-length array with specific types at each position
let person: [string, number, boolean] = ["John", 30, true];
console.log("Tuple:", person[0], person[1], person[2]);

// 6. ENUM
// Named constants for better readability
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
console.log("Enum:", favoriteColor); // Output: 1 (index)

// String enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let move: Direction = Direction.Up;
console.log("String Enum:", move); // Output: "UP"

// 7. ANY
// Disables type checking - use sparingly!
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log("Any:", randomValue);

// 8. UNKNOWN
// Type-safe alternative to 'any' - requires type checking
let userInput: unknown = "some input";
if (typeof userInput === "string") {
    console.log("Unknown:", userInput.toUpperCase());
}

// 9. VOID
// Used for functions that don't return a value
function logMessage(msg: string): void {
    console.log("Void function:", msg);
}
logMessage("Hello, TypeScript!");

// 10. NULL and UNDEFINED
// Represent absence of value
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log("Null:", nullValue, "Undefined:", undefinedValue);

// 11. NEVER
// Represents values that never occur (functions that never return)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Never exits
    }
}

// 12. OBJECT
// Non-primitive type
let user: object = {
    name: "Alice",
    age: 28
};

// Better to use specific object types
let employee: { name: string; id: number } = {
    name: "Bob",
    id: 101
};
console.log("Object:", employee);

// 13. UNION TYPES
// Variable can be one of several types
let id: number | string;
id = 123;
id = "ABC123";
console.log("Union:", id);

// 14. LITERAL TYPES
// Exact value types
let status: "success" | "error" | "pending";
status = "success";
console.log("Literal:", status);

// 15. TYPE ALIASES
// Create custom type names
type StringOrNumber = string | number;
type Point = { x: number; y: number };

let coordinate: Point = { x: 10, y: 20 };
let value: StringOrNumber = "text";
console.log("Type Alias:", coordinate, value);

export {}
