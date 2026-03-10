/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> { // 타입변수 = 타입파라미터
    key : K;
    value : V;
};

let keyPair : KeyPair<string, number> = {
    key : "key",
    value : 0,
};

let keyPair2 : KeyPair<boolean, string[]> = {
    key : true,
    value : ["1"],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
    [key: string] : number;
}

let numbermap1 : NumberMap = {
    key : 1111,
    oh : 3333,
};

interface Map <V> {
    [key : string] : V;
};

let stringMap :Map<string> = {
    key : "string",
};

let booleanMap : Map<boolean> = {
    key : true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key:string] : V;
};

let stringMap2 : Map2<string> = {
    key : "string2",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생유저 / 개발자 유저
 */

interface Student {
    type : "student";
    school : string;
}

interface Developer {
    type : "developer";
    skill : string;
}


interface User<T> {
    name : string;
    profile : T;
}


function goToSchool(user : User<Student>) {
    // console.log(`유저의 타입은 ${user.profile.type} 입니다.`)
    if (user.profile.type !== "student"){
        console.log("잘못 오셨습니다.");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료!`);
}

const developerUser : User<Developer> = {
    name : "임재영",
    profile : {
        type : "developer",
        skill : "TypeScript",
    },
}


const studentUser : User<Student> = {
    name : "임재일",
    profile : {
        type : "student",
        school : "한동대학교",
    },
}

// goToSchool(developerUser);
goToSchool(studentUser);