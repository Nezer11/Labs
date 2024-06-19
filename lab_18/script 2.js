
class Student {
 
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

 
  study() {
    console.log(`${this.name} вивчає матеріал. Вік: ${this.age}, Клас: ${this.grade}`);
  }
}


let student1 = new Student("Анна", 16, 10);
let student2 = new Student("Михайло", 17, 11);
let student3 = new Student("Олексій", 15, 9);


student1.study();
student2.study();
student3.study();
