class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student("Alice", 20);
student1.study(); // Output: Alice is studying.