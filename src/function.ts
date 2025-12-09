// ============================================
// TYPESCRIPT FUNCTION EXAMPLES WITH EXPLANATIONS
// ============================================

// 1. BASIC FUNCTION DECLARATION
// Functions can be declared with explicit parameter and return types
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// 2. FUNCTION WITH MULTIPLE PARAMETERS
// You can specify types for multiple parameters
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// 3. OPTIONAL PARAMETERS
// Use '?' to make parameters optional
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}
console.log(buildName("John")); // Output: John
console.log(buildName("John", "Doe")); // Output: John Doe

// 4. DEFAULT PARAMETERS
// Parameters can have default values
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}
console.log(power(5)); // Output: 25 (5^2)
console.log(power(5, 3)); // Output: 125 (5^3)

// 5. REST PARAMETERS
// Use '...' to accept unlimited arguments as an array
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// 6. ARROW FUNCTIONS
// Concise syntax for function expressions
const multiply = (x: number, y: number): number => x * y;
console.log(multiply(4, 5)); // Output: 20

// Single parameter arrow function (parentheses optional)
const square = (n: number): number => n * n;
console.log(square(6)); // Output: 36

// 7. FUNCTION WITH OBJECT PARAMETER
// Destructuring parameters with types
function printUser({ name, age }: { name: string; age: number }): void {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: "Bob", age: 30 }); // Output: Name: Bob, Age: 30

// 8. FUNCTION RETURNING OBJECT
// Explicitly typing the return object
function createPerson(name: string, age: number): { name: string; age: number } {
    return { name, age };
}
const person = createPerson("Charlie", 25);
console.log(person); // Output: { name: 'Charlie', age: 25 }

// 9. VOID RETURN TYPE
// For functions that don't return a value
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message");

// 10. FUNCTION TYPE ALIAS
// Define reusable function types
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;

console.log(subtract(10, 3)); // Output: 7
console.log(divide(20, 4)); // Output: 5

// 11. GENERIC FUNCTIONS
// Functions that work with multiple types
function identity<T>(value: T): T {
    return value;
}
console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42

// Generic function with array
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement(["a", "b", "c"])); // Output: a

// 12. FUNCTION OVERLOADS
// Multiple function signatures for different parameter combinations
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine("Hello, ", "World")); // Output: Hello, World
console.log(combine(10, 20)); // Output: 30

// 13. CALLBACK FUNCTIONS
// Functions passed as parameters
function processArray(arr: number[], callback: (item: number) => number): number[] {
    return arr.map(callback);
}
const doubled = processArray([1, 2, 3, 4], (n) => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// 14. ASYNC FUNCTIONS
// Functions that return promises
async function fetchData(url: string): Promise<string> {
    // Simulating an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}

// Using async/await
async function getData() {
    const result = await fetchData("https://api.example.com");
    console.log(result);
}

// 15. NEVER RETURN TYPE
// For functions that never return (throw errors or infinite loops)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // This loop never ends
    }
}

// 16. TYPE GUARDS WITH FUNCTIONS
// Functions that narrow down types
function isString(value: any): value is string {
    return typeof value === "string";
}

function processValue(value: string | number): void {
    if (isString(value)) {
        console.log(`String length: ${value.length}`);
    } else {
        console.log(`Number doubled: ${value * 2}`);
    }
}
processValue("Hello"); // Output: String length: 5
processValue(10); // Output: Number doubled: 20

// 17. HIGHER-ORDER FUNCTIONS
// Functions that return other functions
function createMultiplier(factor: number): (n: number) => number {
    return (n: number) => n * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// 18. METHOD IN CLASS
// Functions within classes
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    
    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calc = new Calculator();
console.log(calc.add(15, 5)); // Output: 20
console.log(calc.subtract(15, 5)); // Output: 10

// 19. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// Function that executes immediately
(function() {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
((name: string) => {
    console.log(`Hello, ${name} from IIFE!`);
})("TypeScript");

// 20. FUNCTION WITH UNION TYPES
// Functions accepting multiple types
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

console.log(formatValue("hello")); // Output: HELLO
console.log(formatValue(3.14159)); // Output: 3.14
