type Student = {
  name: string;
  age: number;
  grade: string;
};

let students: Student[] = [];

function addStudent(name: string, age: number, grade: string): void {
  const newStudent: Student = { name, age, grade };
  students.push(newStudent);
  console.log(`Added student: ${name}`);
}

function deleteStudent(name: string): void {
  const index = students.findIndex(student => student.name === name);

  if (index !== -1) {
    students.splice(index, 1);
    console.log(`Deleted student: ${name}`);
  } else {
    console.log(`Student not found: ${name}`);
  }
}
function listStudents(): void {
  console.log("All Students:");
  students.forEach((s, i) => {
    console.log(`${i + 1}. ${s.name} | Age: ${s.age} | Grade: ${s.grade}`);
  });
}
addStudent("John", 18, "A");
addStudent("Emma", 17, "B");
addStudent("Liam", 19, "A");

listStudents();

deleteStudent("Emma");

listStudents();
