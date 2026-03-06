/**
 * 클래스
 */

let studentA = {
    name: "임재영",
    greade : "A++",
    age : 41,
    study() {
        console.log("열심히 공부해");
    },
    introduce () {
        console.log("안녕하세요!");
    },
}

// 공장에서 찍어내듯이 객체를 만들어내는 틀
class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부해");
    }

    introduce () {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}


class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor (name, grade, age, favoriteSkill){
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming(){
        console.log(`${this.favoriteSkill}로 프로그래밍 합니다.`)
    }
}

const studentDeveloper = new StudentDeveloper("임씨", "C++", 17, "자바스크립트");
console.log("studentDeveloper : ", studentDeveloper);


// 클래스를 이용해서 만든 객체 = 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("포도리", "B++", 11);
// console.log("studentB : ", studentB);
// studentB.study();
// studentB.introduce();