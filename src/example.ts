// Quick TypeScript theory cheat-sheet with runnable snippets

// Basic types
const username: string = "Ada";
const age: number = 36;
const isAdmin: boolean = true;
const nullableValue: string | null = null;
const tuple: [string, number] = ["score", 10];

// Enum
enum Status {
	Pending = "PENDING",
	Complete = "COMPLETE",
}

// Interfaces and type aliases
interface User {
	id: string;
	name: string;
	role?: string; // optional property
}

type UserRole = "reader" | "author" | "admin"; // union literal type

// Function types
function formatUser(user: User, role: UserRole = "reader"): string {
	return `${user.name} (${role})`;
}

const greet: (name: string) => string = (name) => `Hello, ${name}`;

// Generics
function wrapInArray<T>(value: T): T[] {
	return [value];
}

// Generic constraints
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

// Classes
class Person implements User {
	constructor(public id: string, public name: string, public role: string = "reader") {}

	describe(): string {
		return formatUser({ id: this.id, name: this.name, role: this.role }, this.role as UserRole);
	}
}

// Inheritance
class Author extends Person {
	constructor(id: string, name: string, public topics: string[]) {
		super(id, name, "author");
	}
}

// Structural typing (duck typing)
const loggable = (value: { toString(): string }) => value.toString();

// Intersection type
type Audited<T> = T & { createdAt: Date; updatedAt: Date };

// Mapped type
type Optional<T> = { [K in keyof T]?: T[K] };

// Conditional type
type Unbox<T> = T extends Array<infer U> ? U : T;
type ExampleUnboxed = Unbox<string[]>; // string

// Utility types
type UserPreview = Pick<User, "id" | "name">;
type ReadonlyUser = Readonly<User>;

// Assertion functions
function assertString(value: unknown): asserts value is string {
	if (typeof value !== "string") throw new Error("Expected string");
}

// Unknown vs any
function parseJson(json: string): unknown {
	return JSON.parse(json);
}

const maybeUser = parseJson('{"id":"1","name":"Lin"}');
if (typeof maybeUser === "object" && maybeUser !== null && "name" in maybeUser) {
	// TypeScript narrows inside this block
}

// Discriminated unions for exhaustiveness
type Shape =
	| { kind: "circle"; radius: number }
	| { kind: "square"; size: number };

function area(shape: Shape): number {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.size * shape.size;
		default:
			const _exhaustive: never = shape; // helps ensure all cases handled
			return _exhaustive;
	}
}

// Namespace for declaration merging example
namespace Geometry {
	export const phi = (1 + Math.sqrt(5)) / 2;
	export type Vector2D = { x: number; y: number };
}

// Example usage to avoid unused variable errors
const sampleUser = new Author("1", username, ["TS", "Patterns"]);
const items = wrapInArray(sampleUser.describe());
const first = items[0];
const prop = getProp(sampleUser, "name");
const computedArea = area({ kind: "circle", radius: 2 });
const optionalUser: Optional<User> = { name: "Optional" };

console.log({
	username,
	age,
	isAdmin,
	nullableValue,
	tuple,
	Status,
	formatted: formatUser(sampleUser, "author"),
	greet: greet("TS"),
	wrapped: items,
	prop,
	first,
	computedArea,
	optionalUser,
	phi: Geometry.phi,
});
