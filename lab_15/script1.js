let student = { name: 'John', age: 20, gender: 'male' };
let { name: studentName, age: studentAge, gender: studentGender } = student;

console.log(studentName); // 'John'
console.log(studentAge); // 20
console.log(studentGender); // 'male'