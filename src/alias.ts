// ============================================
// TypeScript Type Alias Examples with Explanations
// ============================================

/*
  Type Alias: Creates a new name for any type
  Syntax: type AliasName = Type
  Use Cases: Simplify complex types, improve readability, DRY principle
*/

// ============================================
// 1. PRIMITIVE TYPE ALIASES
// ============================================

// Explanation: Create readable names for primitive types
type UserID = string;
type Age = number;
type IsActive = boolean;

const userId: UserID = "user_12345";
const userAge: Age = 25;
const active: IsActive = true;

console.log("1. Primitive Aliases:", { userId, userAge, active });

// ============================================
// 2. UNION TYPE ALIASES
// ============================================

// Explanation: A value can be one of several types
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

const orderStatus: Status = "pending"; // Only accepts these 3 values
const productId: ID = 12345; // Can be string or number
const customerId: ID = "cust_789";

console.log("\n2. Union Types:", { orderStatus, productId, customerId });

// ============================================
// 3. OBJECT TYPE ALIASES
// ============================================

// Explanation: Define the shape of an object
type User = {
    id: number;
    name: string;
    email: string;
    age?: number; // Optional property
};

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 30
};

const user2: User = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com"
    // age is optional
};

console.log("\n3. Object Types:", { user1, user2 });

// ============================================
// 4. FUNCTION TYPE ALIASES
// ============================================

// Explanation: Define function signatures for reusability
type MathOperation = (a: number, b: number) => number;
type StringFormatter = (str: string) => string;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

const uppercase: StringFormatter = (str) => str.toUpperCase();
const lowercase: StringFormatter = (str) => str.toLowerCase();

console.log("\n4. Function Types:");
console.log("  add(5, 3):", add(5, 3));
console.log("  multiply(4, 7):", multiply(4, 7));
console.log("  uppercase('hello'):", uppercase('hello'));

// ============================================
// 5. ARRAY TYPE ALIASES
// ============================================

// Explanation: Define types for arrays
type StringArray = string[];
type NumberArray = Array<number>;
type UserArray = User[];

const fruits: StringArray = ["apple", "banana", "orange"];
const scores: NumberArray = [85, 92, 78, 95];
const users: UserArray = [user1, user2];

console.log("\n5. Array Types:", { fruits, scores, usersCount: users.length });

// ============================================
// 6. TUPLE TYPE ALIASES
// ============================================

// Explanation: Fixed-length array with specific types at each position
type Coordinate = [number, number]; // [x, y]
type RGBColor = [number, number, number]; // [red, green, blue]
type UserInfo = [string, number, boolean]; // [name, age, active]

const point: Coordinate = [10, 20];
const red: RGBColor = [255, 0, 0];
const userInfo: UserInfo = ["Alice", 28, true];

console.log("\n6. Tuple Types:", { point, red, userInfo });

// ============================================
// 7. INTERSECTION TYPE ALIASES
// ============================================

// Explanation: Combine multiple types into one (must have all properties)
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
    name: "Bob Wilson",
    age: 35,
    employeeId: "EMP001",
    department: "Engineering"
};

console.log("\n7. Intersection Type:", employee);

// ============================================
// 8. NESTED TYPE ALIASES
// ============================================

// Explanation: Type aliases can reference other type aliases
type Address = {
    street: string;
    city: string;
    zipCode: string;
};

type ContactInfo = {
    email: string;
    phone: string;
    address: Address;
};

type Customer = {
    id: number;
    name: string;
    contact: ContactInfo;
};

const customer: Customer = {
    id: 101,
    name: "Acme Corp",
    contact: {
        email: "info@acme.com",
        phone: "555-0123",
        address: {
            street: "123 Main St",
            city: "Springfield",
            zipCode: "12345"
        }
    }
};

console.log("\n8. Nested Types:", customer);

// ============================================
// 9. GENERIC TYPE ALIASES
// ============================================

// Explanation: Create reusable type aliases that work with any type
type Result<T> = {
    success: boolean;
    data: T;
    error?: string;
};

type Nullable<T> = T | null;
type Optional<T> = T | undefined;

const successResult: Result<User> = {
    success: true,
    data: user1
};

const errorResult: Result<string> = {
    success: false,
    data: "",
    error: "Something went wrong"
};

const nullableValue: Nullable<number> = null;
const optionalValue: Optional<string> = undefined;

console.log("\n9. Generic Types:", { 
    successResult, 
    errorResult,
    nullableValue,
    optionalValue
});

// ============================================
// 10. MAPPED TYPE ALIASES
// ============================================

// Explanation: Create new types by transforming existing types
type Product = {
    id: number;
    name: string;
    price: number;
};

// Make all properties optional
type PartialProduct = {
    [K in keyof Product]?: Product[K];
};

// Make all properties readonly
type ReadonlyProduct = {
    readonly [K in keyof Product]: Product[K];
};

const partialProduct: PartialProduct = {
    name: "Laptop"
    // id and price are optional
};

const readonlyProduct: ReadonlyProduct = {
    id: 1,
    name: "Monitor",
    price: 299.99
};

// readonlyProduct.price = 199.99; // Error: Cannot assign to 'price' because it is a read-only property

console.log("\n10. Mapped Types:", { partialProduct, readonlyProduct });

// ============================================
// 11. LITERAL TYPE ALIASES
// ============================================

// Explanation: Type is a specific value, not just a type category
type Direction = "north" | "south" | "east" | "west";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type YesNo = "yes" | "no";

const heading: Direction = "north";
const roll: DiceRoll = 6;
const answer: YesNo = "yes";

// const invalidRoll: DiceRoll = 7; // Error: Type '7' is not assignable

console.log("\n11. Literal Types:", { heading, roll, answer });

// ============================================
// 12. UTILITY TYPE ALIASES
// ============================================

// Explanation: Combine built-in utility types with aliases
type Article = {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedAt: Date;
};

// Pick specific properties
type ArticlePreview = Pick<Article, "id" | "title" | "author">;

// Omit specific properties
type ArticleWithoutContent = Omit<Article, "content">;

// Make all properties optional
type PartialArticle = Partial<Article>;

// Make all properties required
type RequiredArticle = Required<Article>;

const preview: ArticlePreview = {
    id: 1,
    title: "TypeScript Guide",
    author: "John Doe"
};

const articleMeta: ArticleWithoutContent = {
    id: 2,
    title: "Advanced TypeScript",
    author: "Jane Smith",
    publishedAt: new Date()
};

console.log("\n12. Utility Types:", { preview, articleMeta });

// ============================================
// 13. CONDITIONAL TYPE ALIASES
// ============================================

// Explanation: Type depends on a condition
type IsString<T> = T extends string ? "yes" : "no";
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsString<string>;  // "yes"
type Test2 = IsString<number>;  // "no"
type Test3 = IsArray<string[]>; // true
type Test4 = IsArray<number>;   // false

console.log("\n13. Conditional Types: Types checked at compile time");

// ============================================
// 14. RECURSIVE TYPE ALIASES
// ============================================

// Explanation: Type alias that references itself
type TreeNode<T> = {
    value: T;
    children?: TreeNode<T>[];
};

const fileTree: TreeNode<string> = {
    value: "root",
    children: [
        {
            value: "src",
            children: [
                { value: "index.ts" },
                { value: "utils.ts" }
            ]
        },
        {
            value: "package.json"
        }
    ]
};

console.log("\n14. Recursive Types:", JSON.stringify(fileTree, null, 2));

// ============================================
// 15. REAL-WORLD EXAMPLE: API RESPONSE
// ============================================

// Explanation: Comprehensive example combining multiple concepts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiResponse<T> = {
    status: number;
    message: string;
    data?: T;
    errors?: string[];
    timestamp: Date;
};

type UserResponse = ApiResponse<User>;
type UsersListResponse = ApiResponse<User[]>;

const getUserResponse: UserResponse = {
    status: 200,
    message: "User retrieved successfully",
    data: user1,
    timestamp: new Date()
};

const errorResponse: ApiResponse<null> = {
    status: 404,
    message: "User not found",
    errors: ["User with ID 999 does not exist"],
    timestamp: new Date()
};

console.log("\n15. Real-world API Response:", {
    success: getUserResponse,
    error: errorResponse
});

// ============================================
// TYPE ALIAS VS INTERFACE
// ============================================

/*
  Key Differences:
  
  TYPE ALIAS:
  - Can represent primitives, unions, tuples
  - Cannot be extended or implemented (in the traditional sense)
  - Can use computed properties
  - Better for unions and complex types
  
  INTERFACE:
  - Only for object shapes
  - Can be extended and implemented
  - Declaration merging (can add properties later)
  - Better for object-oriented programming
  
  Example:
*/

// Type Alias - can do unions
type StringOrNumber = string | number;

// Interface - can be extended
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
};

console.log("\n16. Type vs Interface:", myDog);

// ============================================
// SUMMARY
// ============================================
console.log("\n=== TYPE ALIAS SUMMARY ===");
console.log("✓ Primitive aliases: Readable names for basic types");
console.log("✓ Union types: Value can be one of several types");
console.log("✓ Object types: Define object shapes");
console.log("✓ Function types: Reusable function signatures");
console.log("✓ Generic types: Work with any type");
console.log("✓ Intersection types: Combine multiple types");
console.log("✓ Mapped types: Transform existing types");
console.log("✓ Conditional types: Type depends on condition");
console.log("✓ Recursive types: Type references itself");
console.log("✓ Use aliases for DRY, readability, and maintainability");
