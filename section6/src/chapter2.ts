/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드


    // 생성자
    constructor(private name: string, protected age: number, public position: string) {
        
    }

    // 메서드
    work() {
        console.log(`일함 ${name}`);
    }
}

class ExecutiveOfficer extends Employee {
    // 추가 필드
    officeNumber : number;

    // 생성자
    constructor(name:string, age:number, position:string, officeNumber:number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    func() {
        // this.name;
        this.age;
    }
    
}

const employee = new Employee("임재영", 41, "developer");
// employee.name = "홍길동";
// employee.age;
employee.position;

console.log("employee : ", employee);