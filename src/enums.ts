// ============================================
// TypeScript Enum Examples
// ============================================

// 1. Basic Numeric Enum (auto-increment from 1)
enum Direction {
    Up = 1,
    Down,    // 2
    Left,    // 3
    Right    // 4
}

let dir: Direction = Direction.Left;
console.log("Direction.Left:", dir); // 3

// 2. Numeric Enum (auto-increment from 0)
enum Size {
    Small,   // 0
    Medium,  // 1
    Large    // 2
}

console.log("Size.Small:", Size.Small); // 0
console.log("Size.Large:", Size.Large); // 2

// 3. String Enum
enum Status {
    Pending = 'PENDING',
    InProgress = 'IN_PROGRESS',
    Done = 'DONE'
}

const currentStatus: Status = Status.Pending;
console.log("Current Status:", currentStatus); // "PENDING"

// 4. Computed/Bit Flag Enum
enum FileAccess {
    None = 0,
    Read = 1 << 0,      // 1
    Write = 1 << 1,     // 2
    Execute = 1 << 2,   // 4
    All = Read | Write | Execute  // 7
}

const hasRead = (FileAccess.Read & FileAccess.All) !== 0;
console.log("Has Read Permission:", hasRead); // true

const permissions = FileAccess.Read | FileAccess.Write;
console.log("Combined Permissions:", permissions); // 3

// 5. Reverse Mapping (Numeric Enums Only)
enum Direction2 {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

const dirName = Direction2[2];
console.log("Direction2[2]:", dirName); // "Left"
console.log("Direction2.Left:", Direction2.Left); // 2

// 6. Const Enum (erased at compile time, more efficient)
const enum Color {
    Red,
    Green,
    Blue
}

const myColor = Color.Red;
console.log("My Color:", myColor); // 0

// 7. Heterogeneous Enum (mixed string and numeric - not recommended)
enum Mixed {
    No = 0,
    Yes = "YES"
}

console.log("Mixed.No:", Mixed.No); // 0
console.log("Mixed.Yes:", Mixed.Yes); // "YES"

// 8. Enum with Methods (using namespace merge)
enum Workflow {
    Draft,
    Review,
    Published
}

namespace Workflow {
    export function isFinal(w: Workflow): boolean {
        return w === Workflow.Published;
    }
    
    export function canEdit(w: Workflow): boolean {
        return w !== Workflow.Published;
    }
}

console.log("Is Draft final?", Workflow.isFinal(Workflow.Draft)); // false
console.log("Is Published final?", Workflow.isFinal(Workflow.Published)); // true
console.log("Can edit Review?", Workflow.canEdit(Workflow.Review)); // true

// 9. Using Enum as Record Keys
enum Phase {
    Init,
    Run,
    Done
}

const messages: Record<Phase, string> = {
    [Phase.Init]: 'Starting...',
    [Phase.Run]: 'Working...',
    [Phase.Done]: 'Finished!'
};

console.log("Phase messages:", messages[Phase.Run]); // "Working..."

// 10. Iterating String Enum Values
console.log("\nAll Status values:");
for (const value of Object.values(Status)) {
    console.log("  -", value);
}

// 11. Iterating Numeric Enum (keys and values)
console.log("\nSize enum keys and values:");
Object.keys(Size)
    .filter(key => isNaN(Number(key))) // Filter out reverse mappings
    .forEach(key => {
        console.log(`  ${key}: ${Size[key as keyof typeof Size]}`);
    });

// 12. Type Guard with Enum
function isDone(status: Status): boolean {
    return status === Status.Done;
}

console.log("\nIs status done?", isDone(Status.Done)); // true
console.log("Is status done?", isDone(Status.Pending)); // false

// 13. Converting String to Enum (Safe Conversion)
function toStatus(str: string): Status | undefined {
    const statusValues = Object.values(Status);
    return statusValues.find(val => val === str) as Status | undefined;
}

console.log("\nString to Status:");
console.log("  'PENDING' ->", toStatus('PENDING')); // Status.Pending
console.log("  'INVALID' ->", toStatus('INVALID')); // undefined

// 14. Enum in Switch Statement
function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Pending:
            return "Your request is pending";
        case Status.InProgress:
            return "We're working on it";
        case Status.Done:
            return "All done!";
        default:
            const exhaustiveCheck: never = status;
            throw new Error(`Unhandled status: ${exhaustiveCheck}`);
    }
}

console.log("\nStatus messages:");
console.log("  Pending:", getStatusMessage(Status.Pending));
console.log("  InProgress:", getStatusMessage(Status.InProgress));
console.log("  Done:", getStatusMessage(Status.Done));

// 15. Enum vs Union Types (Alternative approach)
// For simple cases, union types might be better
type StatusLite = 'PENDING' | 'IN_PROGRESS' | 'DONE';

const litStatus: StatusLite = 'PENDING';
console.log("\nUnion type status:", litStatus);

// 16. Getting all enum values as array
function getEnumValues<T extends object>(enumObj: T): (T[keyof T])[] {
    return Object.values(enumObj).filter(
        value => typeof value === 'string' || typeof value === 'number'
    ) as (T[keyof T])[];
}

console.log("\nAll Direction values:", getEnumValues(Direction));
console.log("All Status values:", getEnumValues(Status));

// 17. HTTP Status Code Enum Example
enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500
}

function handleResponse(status: HttpStatus): string {
    if (status >= 200 && status < 300) {
        return "Success";
    } else if (status >= 400 && status < 500) {
        return "Client Error";
    } else if (status >= 500) {
        return "Server Error";
    }
    return "Unknown";
}

console.log("\nHTTP Status Handling:");
console.log("  200:", handleResponse(HttpStatus.OK));
console.log("  404:", handleResponse(HttpStatus.NotFound));
console.log("  500:", handleResponse(HttpStatus.InternalServerError));

// ============================================
// Summary
// ============================================
console.log("\n=== ENUM SUMMARY ===");
console.log("✓ Numeric enums: auto-increment, reverse mapping");
console.log("✓ String enums: explicit values, no reverse mapping");
console.log("✓ Const enums: compile-time optimization");
console.log("✓ Bit flags: combine permissions with bitwise ops");
console.log("✓ Methods: extend enums with namespace merge");
console.log("✓ Type safety: exhaustive checks in switch");
console.log("✓ Alternative: use union types for simple cases");
