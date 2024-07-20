/* exported getStudentNames */
function getStudentNames(students: { name: string }[]): string[] {
  const names: string[] = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

// function getStudentNames of typeof string array
// with the parameter students an object array
// with property name of typeof string

// students = array of objects with the parameter name of typeof string
// students object array
