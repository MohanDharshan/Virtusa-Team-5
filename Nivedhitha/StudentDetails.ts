class Student {
    name: string;
    age: number;
    department: string;

    constructor(name: string, age: number, department: string) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Department:", this.department);
    }

    study(): void {
        console.log(this.name + " is studying");
    }
}

let student = new Student("Nivedhitha", 21, "CSE");

student.displayDetails();
student.study();