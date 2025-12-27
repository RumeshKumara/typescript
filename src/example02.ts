// Basic Types
const count: number = 42;
const username: string = "Ada";
const isActive: boolean = true;

// Arrays
const nums: number[] = [1, 2, 3];
const users: Array<string> = ["Ada", "Linus"];

// Tuples
const point: [number, number] = [10, 20];
const rgb: [number, number, number] = [255, 0, 0];

// Enums
enum Status {
	Pending = "PENDING",
	Done = "DONE",
}
const statusExample: Status = Status.Done;

// Any
let anything: any = 5;
anything = "now a string";

// Unknown
let maybe: unknown = "text";
maybe = 10;
if (typeof maybe === "string") {
    const strLength: number = maybe.length;
}

// Void
function log(msg: string): void {
	console.log(msg);
}

// Never
function fail(msg: string): never {
	throw new Error(msg);
}

// Type Inference
const inferred = 123;

// Union & Intersection Types
type Id = string | number;

type Timestamped = { createdAt: Date };

type User = { name: string } & Timestamped;

// Type Aliases
type Coordinates = { x: number; y: number };
let coords: Coordinates = { x: 10, y: 20 };

type UserID = string | number;
let userId: UserID = "user-1";

// Interfaces
interface Person {
	name: string;
	age?: number;
}
const person: Person = { name: "Alice" };
let anotherPerson: Person = { name: "Bob", age: 30 };

// Interface vs Type
interface Animal {
	species: string;
}
type AnimalAlias = { species: string };
const dog: Animal = { species: "Canine" };
const cat: AnimalAlias = { species: "Feline" };

// Optional & Readonly Properties
interface Book {
	readonly id: string;
	title: string;
	subtitle?: string;
}

// Literal Types
type Direction = "N" | "S" | "E" | "W";
const dir: Direction = "N";

// Type Assertions
const rawValue: unknown = "hello";
const upper = (rawValue as string).toUpperCase();

// Type Guards
function isString(val: unknown): val is string {
	return typeof val === "string";
}
function format(val: unknown) {
	if (isString(val)) return val.toUpperCase();
	return String(val);
}

// Utility Types (Partial, Pick, Omit, Readonly)
interface Profile {
	id: string;
	name: string;
	email: string;
	active: boolean;
}
type ProfileDraft = Partial<Profile>;
type ProfileName = Pick<Profile, "name">;
type ProfilePublic = Omit<Profile, "email">;
type FrozenProfile = Readonly<Profile>;

// Function Types
type Adder = (a: number, b: number) => number;
const add: Adder = (a, b) => a + b;

// Optional & Default Parameters
function greet(name: string, title?: string, suffix = "!") {
	return `Hello ${title ?? ""}${name}${suffix}`;
}

// Rest Parameters
function sum(...numsToAdd: number[]): number {
	return numsToAdd.reduce((a, b) => a + b, 0);
}

// Arrow Functions
const doubled = [1, 2, 3].map((n) => n * 2);

// Function Overloading
function toArray(x: number): number[];
function toArray(x: string): string[];
function toArray(x: number | string) {
	return [x];
}
