// ==========================================
// JSON (JavaScript Object Notation) - Complete Guide
// ==========================================

console.log("=== 1. BASIC JSON DATA TYPES ===");
// JSON supports 6 data types: String, Number, Boolean, Null, Object, Array

let jsonExample = {
    stringType: "Hello World",
    numberType: 42,
    floatType: 3.14,
    booleanType: true,
    nullType: null,
    objectType: { nested: "value" },
    arrayType: [1, 2, 3]
};
console.log("JSON Data Types:", jsonExample);

// ==========================================
console.log("\n=== 2. JSON.stringify() - Object to String ===");
// Converts JavaScript objects to JSON strings

let user = {
    name: "Bob",
    age: 25,
    email: "bob@example.com"
};

// Basic stringify
let userJson: string = JSON.stringify(user);
console.log("Stringified:", userJson);

// Pretty print with indentation
let prettyJson = JSON.stringify(user, null, 2);
console.log("Pretty JSON:\n", prettyJson);

// Stringify with replacer function
let filteredJson = JSON.stringify(user, (key, value) => {
    if (key === "email") return undefined; // Exclude email
    return value;
});
console.log("Filtered JSON:", filteredJson);

// Stringify with specific properties
let selectedJson = JSON.stringify(user, ["name", "age"]);
console.log("Selected properties:", selectedJson);

// ==========================================
console.log("\n=== 3. JSON.parse() - String to Object ===");
// Converts JSON strings back to JavaScript objects

let jsonString = '{"name":"Alice","age":30,"active":true}';
let parsedUser = JSON.parse(jsonString);
console.log("Parsed Object:", parsedUser);
console.log(`${parsedUser.name} is ${parsedUser.age} years old`);

// Parse with reviver function
let dateJson = '{"name":"John","birthDate":"2000-01-15"}';
let userWithDate = JSON.parse(dateJson, (key, value) => {
    if (key === "birthDate") return new Date(value);
    return value;
});
console.log("Parsed with Date:", userWithDate);

// ==========================================
console.log("\n=== 4. NESTED OBJECTS AND ARRAYS ===");

let complexData = {
    company: "Tech Corp",
    employees: [
        { id: 1, name: "Alice", skills: ["JavaScript", "TypeScript"] },
        { id: 2, name: "Bob", skills: ["Python", "Java"] }
    ],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

let complexJson = JSON.stringify(complexData, null, 2);
console.log("Complex JSON:", complexJson);

let parsedComplex = JSON.parse(complexJson);
console.log("First employee:", parsedComplex.employees[0].name);

// ==========================================
console.log("\n=== 5. DEEP CLONING WITH JSON ===");

let original = {
    name: "Original",
    data: { value: 100 },
    items: [1, 2, 3]
};

// Deep clone using JSON
let clone = JSON.parse(JSON.stringify(original));
clone.name = "Clone";
clone.data.value = 200;
clone.items.push(4);

console.log("Original:", original); // Unchanged
console.log("Clone:", clone); // Modified

// ==========================================
console.log("\n=== 6. ERROR HANDLING ===");

try {
    // Invalid JSON - single quotes
    let invalid1 = "{'name': 'test'}";
    JSON.parse(invalid1);
} catch (error) {
    console.log("Error 1:", (error as Error).message);
}

try {
    // Invalid JSON - trailing comma
    let invalid2 = '{"name": "test",}';
    JSON.parse(invalid2);
} catch (error) {
    console.log("Error 2:", (error as Error).message);
}

// Safe parsing function
function safeJsonParse(jsonString: string, defaultValue: any = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("Parse failed, returning default");
        return defaultValue;
    }
}

let result = safeJsonParse("invalid json", { error: true });
console.log("Safe parse result:", result);

// ==========================================
console.log("\n=== 7. JSON WITH SPECIAL CASES ===");

// Circular references cause errors
let circularObj: any = { name: "test" };
// circularObj.self = circularObj; // This would throw error in stringify

// Undefined values are omitted
let withUndefined = { name: "John", age: undefined, city: "NYC" };
console.log("With undefined:", JSON.stringify(withUndefined));

// Functions are omitted
let withFunction = { name: "John", greet: function() { return "Hi"; } };
console.log("With function:", JSON.stringify(withFunction));

// Dates are converted to strings
let withDate = { name: "John", created: new Date() };
console.log("With Date:", JSON.stringify(withDate));

// ==========================================
console.log("\n=== 8. PRACTICAL USE CASES ===");

// Use Case 1: Local Storage
interface AppSettings {
    theme: string;
    notifications: boolean;
    language: string;
}

let settings: AppSettings = {
    theme: "dark",
    notifications: true,
    language: "en"
};

// Save to storage (simulation)
let settingsJson = JSON.stringify(settings);
console.log("Saving settings:", settingsJson);

// Load from storage
let loadedSettings: AppSettings = JSON.parse(settingsJson);
console.log("Loaded settings:", loadedSettings);

// Use Case 2: API Communication
let apiRequest = {
    method: "POST",
    endpoint: "/api/users",
    body: JSON.stringify({
        username: "newuser",
        email: "user@example.com",
        password: "securepass123"
    })
};
console.log("API Request:", apiRequest);

// Use Case 3: Configuration Files
let config = {
    database: {
        host: "localhost",
        port: 5432,
        name: "mydb"
    },
    server: {
        port: 3000,
        timeout: 30000
    }
};
console.log("Config JSON:\n", JSON.stringify(config, null, 2));

// ==========================================
console.log("\n=== 9. JSON VALIDATION ===");

function isValidJson(str: string): boolean {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
}

console.log("Valid JSON?", isValidJson('{"name":"test"}')); // true
console.log("Valid JSON?", isValidJson('{name:"test"}')); // false

// ==========================================
console.log("\n=== 10. ADVANCED TECHNIQUES ===");

// Custom toJSON method
class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        private ssn: string
    ) {}

    toJSON() {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            // SSN is excluded for security
        };
    }
}

let person = new Person("John", "Doe", "123-45-6789");
console.log("Person JSON:", JSON.stringify(person));

// Comparing objects
let obj1 = { name: "Alice", age: 25 };
let obj2 = { name: "Alice", age: 25 };
console.log("Objects equal?", JSON.stringify(obj1) === JSON.stringify(obj2));

// Removing duplicates from array of objects
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" }
];
let uniqueUsers = Array.from(
    new Map(users.map(u => [JSON.stringify(u), u])).values()
);
console.log("Unique users:", uniqueUsers);

// ==========================================
console.log("\n=== 11. PERFORMANCE CONSIDERATIONS ===");

// Large objects
let largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `User${i}`,
    data: Math.random()
}));

console.time("Stringify large array");
let largeJson = JSON.stringify(largeArray);
console.timeEnd("Stringify large array");

console.time("Parse large array");
let parsedLarge = JSON.parse(largeJson);
console.timeEnd("Parse large array");

console.log("Array length:", parsedLarge.length);

// ==========================================
console.log("\n=== JSON THEORY SUMMARY ===");
console.log(`
JSON Theory & Best Practices:
1. Lightweight data interchange format
2. Language-independent but JavaScript-based
3. Human-readable and machine-parsable
4. Supports 6 data types (String, Number, Boolean, Null, Object, Array)
5. Keys must be strings in double quotes
6. No trailing commas, comments, undefined, or functions
7. Used for: APIs, config files, data storage, data transfer
8. Methods: JSON.stringify() and JSON.parse()
9. Common patterns: Deep cloning, API communication, local storage
10. Error handling is crucial for robust applications
`); 