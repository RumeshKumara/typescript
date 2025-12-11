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
