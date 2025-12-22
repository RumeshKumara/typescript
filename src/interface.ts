// ============================================
// TypeScript Interface Examples with Explanations
// ============================================

/*
  Interface: Defines the structure/contract for objects
  Syntax: interface InterfaceName { properties }
  Use Cases: Object shapes, class contracts, API contracts, extensibility
*/

// ============================================
// 1. BASIC INTERFACE
// ============================================

// Explanation: Define the shape of an object with required properties
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log("1. Basic Interface:", person1);

// ============================================
// 2. OPTIONAL PROPERTIES
// ============================================

// Explanation: Use ? to make properties optional
interface User {
    id: number;
    username: string;
    email: string;
    phone?: string;        // Optional
    address?: string;      // Optional
}

const user1: User = {
    id: 1,
    username: "johndoe",
    email: "john@example.com"
    // phone and address are optional
};

const user2: User = {
    id: 2,
    username: "janedoe",
    email: "jane@example.com",
    phone: "555-0123"
};

console.log("\n2. Optional Properties:", { user1, user2 });

// ============================================
// 3. READONLY PROPERTIES
// ============================================

// Explanation: readonly prevents modification after object creation
interface Product {
    readonly id: number;
    readonly sku: string;
    name: string;
    price: number;
}

const product: Product = {
    id: 101,
    sku: "PROD-101",
    name: "Laptop",
    price: 999.99
};

product.name = "Gaming Laptop";  // OK
product.price = 1299.99;         // OK
// product.id = 102;             // Error: Cannot assign to 'id' because it is a read-only property

console.log("\n3. Readonly Properties:", product);

// ============================================
// 4. FUNCTION PROPERTIES
// ============================================

// Explanation: Interfaces can define method signatures
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 0
};

console.log("\n4. Function Properties:");
console.log("  calculator.add(10, 5):", calculator.add(10, 5));
console.log("  calculator.multiply(4, 7):", calculator.multiply(4, 7));

// ============================================
// 5. INTERFACE EXTENDING INTERFACE
// ============================================

// Explanation: Interfaces can extend other interfaces (inheritance)
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

interface Bird extends Animal {
    wingSpan: number;
    fly(): void;
}

const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    bark: () => console.log("    Woof! Woof!")
};

const myBird: Bird = {
    name: "Tweety",
    age: 1,
    wingSpan: 15,
    fly: () => console.log("    Flying high!")
};

console.log("\n5. Interface Extension:");
console.log("  Dog:", myDog.name, "-", myDog.breed);
myDog.bark();
console.log("  Bird:", myBird.name, "- wingSpan:", myBird.wingSpan + "cm");
myBird.fly();

// ============================================
// 6. MULTIPLE INTERFACE EXTENSION
// ============================================

// Explanation: Extend multiple interfaces at once
interface Identifiable {
    id: number;
}

interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}

interface Entity extends Identifiable, Timestamped {
    name: string;
}

const entity: Entity = {
    id: 1,
    name: "Sample Entity",
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-15")
};

console.log("\n6. Multiple Extension:", entity);

// ============================================
// 7. INTERFACE WITH INDEX SIGNATURES
// ============================================

// Explanation: Allow dynamic property names with specific types
interface StringDictionary {
    [key: string]: string;
}

interface NumberDictionary {
    [index: number]: string;
}

interface MixedDictionary {
    [key: string]: string | number;
    count: number;  // Specific required property
}

const translations: StringDictionary = {
    hello: "Bonjour",
    goodbye: "Au revoir",
    thanks: "Merci"
};

const dayNames: NumberDictionary = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday"
};

const settings: MixedDictionary = {
    count: 10,
    theme: "dark",
    fontSize: 14,
    language: "en"
};

console.log("\n7. Index Signatures:", { translations, dayNames, settings });

// ============================================
// 8. FUNCTION INTERFACE
// ============================================

// Explanation: Define callable interfaces (function types)
interface SearchFunc {
    (source: string, searchString: string): boolean;
}

interface StringTransformer {
    (input: string): string;
    description: string;  // Additional properties
}

const search: SearchFunc = (source, searchString) => {
    return source.includes(searchString);
};

const toUpperCase: StringTransformer = (input: string) => input.toUpperCase();
toUpperCase.description = "Converts string to uppercase";

console.log("\n8. Function Interface:");
console.log("  search('TypeScript', 'Script'):", search('TypeScript', 'Script'));
console.log("  toUpperCase('hello'):", toUpperCase('hello'));
console.log("  Description:", toUpperCase.description);

// ============================================
// 9. HYBRID INTERFACES
// ============================================

// Explanation: Interfaces that are both callable and have properties
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function(start: number) {
        return `Counter started at ${start}`;
    }) as Counter;
    
    counter.interval = 1000;
    counter.reset = function() {
        console.log("    Counter reset!");
    };
    
    return counter;
}

const myCounter = getCounter();
console.log("\n9. Hybrid Interface:");
console.log("  myCounter(10):", myCounter(10));
console.log("  Interval:", myCounter.interval);
myCounter.reset();

// ============================================
// 10. IMPLEMENTING INTERFACES IN CLASSES
// ============================================

// Explanation: Classes can implement interfaces (contract enforcement)
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`    ${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`    ${this.brand} ${this.model} has stopped.`);
    }
}

const myCar = new Car("Toyota", "Camry", 2024);
console.log("\n10. Class Implementing Interface:");
console.log("  Car:", myCar.brand, myCar.model, myCar.year);
myCar.start();
myCar.stop();

// ============================================
// 11. INTERFACE WITH GENERIC TYPES
// ============================================

// Explanation: Create reusable interfaces that work with any type
interface Response<T> {
    success: boolean;
    data: T;
    message: string;
}

interface Repository<T> {
    getById(id: number): T | null;
    getAll(): T[];
    create(item: T): T;
    update(id: number, item: T): T | null;
    delete(id: number): boolean;
}

const userResponse: Response<User> = {
    success: true,
    data: user1,
    message: "User retrieved successfully"
};

const productResponse: Response<Product[]> = {
    success: true,
    data: [product],
    message: "Products retrieved successfully"
};

console.log("\n11. Generic Interface:", {
    userResponse,
    productCount: productResponse.data.length
});

// ============================================
// 12. DECLARATION MERGING
// ============================================

// Explanation: Multiple interface declarations with same name are merged
interface Box {
    height: number;
    width: number;
}

interface Box {
    depth: number;
}

// Box now has height, width, AND depth
const box: Box = {
    height: 10,
    width: 20,
    depth: 30
};

console.log("\n12. Declaration Merging:", box);

// ============================================
// 13. INTERFACE VS TYPE ALIAS
// ============================================

// Explanation: Both can define object shapes, but have key differences

// Interface - Can be extended and merged
interface IUser {
    id: number;
    name: string;
}

interface IAdmin extends IUser {
    role: string;
}

// Type Alias - Can use unions and intersections
type TUser = {
    id: number;
    name: string;
};

type TAdmin = TUser & {
    role: string;
};

type Status = "active" | "inactive";  // Type can do unions (interface cannot)

const admin1: IAdmin = { id: 1, name: "Alice", role: "super" };
const admin2: TAdmin = { id: 2, name: "Bob", role: "admin" };

console.log("\n13. Interface vs Type:", { admin1, admin2 });

// ============================================
// 14. NESTED INTERFACES
// ============================================

// Explanation: Interfaces can contain other interfaces
interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

interface ContactInfo {
    email: string;
    phone: string;
    address: Address;
}

interface Customer {
    id: number;
    name: string;
    contact: ContactInfo;
    isPremium: boolean;
}

const customer: Customer = {
    id: 1001,
    name: "Acme Corporation",
    contact: {
        email: "contact@acme.com",
        phone: "555-1234",
        address: {
            street: "123 Business Ave",
            city: "New York",
            state: "NY",
            zipCode: "10001"
        }
    },
    isPremium: true
};

console.log("\n14. Nested Interfaces:", customer);

// ============================================
// 15. INTERFACES WITH ARRAY TYPES
// ============================================

// Explanation: Define arrays and their item types
interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoList {
    name: string;
    items: TodoItem[];
}

const myTodos: TodoList = {
    name: "Work Tasks",
    items: [
        { id: 1, title: "Review code", completed: true },
        { id: 2, title: "Write tests", completed: false },
        { id: 3, title: "Deploy to production", completed: false }
    ]
};

console.log("\n15. Array Types:", {
    listName: myTodos.name,
    totalItems: myTodos.items.length,
    completed: myTodos.items.filter(item => item.completed).length
});

// ============================================
// 16. REAL-WORLD EXAMPLE: API SERVICE
// ============================================

// Explanation: Comprehensive example combining multiple concepts
interface ApiConfig {
    baseURL: string;
    timeout: number;
    headers?: Record<string, string>;
}

interface ApiError {
    code: number;
    message: string;
    details?: any;
}

interface ApiResponse<T> {
    status: number;
    data?: T;
    error?: ApiError;
    timestamp: Date;
}

interface ApiService<T> {
    get(endpoint: string): Promise<ApiResponse<T>>;
    post(endpoint: string, data: T): Promise<ApiResponse<T>>;
    put(endpoint: string, data: T): Promise<ApiResponse<T>>;
    delete(endpoint: string): Promise<ApiResponse<boolean>>;
}

class UserApiService implements ApiService<User> {
    constructor(private config: ApiConfig) {}

    async get(endpoint: string): Promise<ApiResponse<User>> {
        console.log(`    GET ${this.config.baseURL}${endpoint}`);
        return {
            status: 200,
            data: user1,
            timestamp: new Date()
        };
    }

    async post(endpoint: string, data: User): Promise<ApiResponse<User>> {
        console.log(`    POST ${this.config.baseURL}${endpoint}`);
        return {
            status: 201,
            data: data,
            timestamp: new Date()
        };
    }

    async put(endpoint: string, data: User): Promise<ApiResponse<User>> {
        console.log(`    PUT ${this.config.baseURL}${endpoint}`);
        return {
            status: 200,
            data: data,
            timestamp: new Date()
        };
    }

    async delete(endpoint: string): Promise<ApiResponse<boolean>> {
        console.log(`    DELETE ${this.config.baseURL}${endpoint}`);
        return {
            status: 204,
            data: true,
            timestamp: new Date()
        };
    }
}

const apiConfig: ApiConfig = {
    baseURL: "https://api.example.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token123"
    }
};

const userApi = new UserApiService(apiConfig);

console.log("\n16. Real-world API Service:");
userApi.get("/users/1");
userApi.post("/users", user2);

// ============================================
// 17. INTERFACE WITH CONSTRAINTS
// ============================================

// Explanation: Use interfaces to enforce specific patterns
interface Validatable {
    validate(): boolean;
}

interface Serializable {
    serialize(): string;
}

interface StorableEntity extends Validatable, Serializable {
    id: number;
    save(): void;
}

class Article implements StorableEntity {
    constructor(
        public id: number,
        public title: string,
        public content: string
    ) {}

    validate(): boolean {
        return this.title.length > 0 && this.content.length > 0;
    }

    serialize(): string {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            content: this.content
        });
    }

    save(): void {
        if (this.validate()) {
            console.log(`    Article ${this.id} saved:`, this.serialize());
        } else {
            console.log("    Validation failed!");
        }
    }
}

const article = new Article(1, "TypeScript Guide", "Learn TypeScript interfaces...");

console.log("\n17. Interface with Constraints:");
console.log("  Is valid:", article.validate());
article.save();

// ============================================
// WHEN TO USE INTERFACES
// ============================================
console.log("\n=== INTERFACE BEST PRACTICES ===");
console.log("✓ Use for object shapes and contracts");
console.log("✓ Use when you need class implementation");
console.log("✓ Use for public APIs (extensible)");
console.log("✓ Use when declaration merging is needed");
console.log("✓ Prefer over type for object-oriented patterns");
console.log("\n✗ Don't use for unions or primitives");
console.log("✗ Don't use for tuples (use type instead)");
console.log("✗ Don't use for mapped types (use type instead)");

// ============================================
// SUMMARY
// ============================================
console.log("\n=== INTERFACE SUMMARY ===");
console.log("✓ Define object structure/contracts");
console.log("✓ Support inheritance (extends)");
console.log("✓ Can be implemented by classes");
console.log("✓ Support optional and readonly properties");
console.log("✓ Allow declaration merging");
console.log("✓ Support generic types");
console.log("✓ Can have index signatures");
console.log("✓ Perfect for OOP and API contracts");
