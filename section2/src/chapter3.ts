// object : 구조기준 , 구조적 타입 시스템, 프로퍼티 베이스드 타입 시스템 <-> 명목적 타입 시스템
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};


// ? 의 의미는 있어도 되고 없어도 된다. 선택적 프로퍼티, 옵셔널 프로퍼티
user = {
    name : "홍길동",
}


// readolny 프로퍼티 : 읽기전용으로 만들기
let config:{
    readonly apiKey:string;
} = {
    apiKey :"My API key",
}

// config.apiKey = "hacked";



user.id;

let dog:{
    name:string;
    color:string;
} = {
    name : "돌돌이",
    color : "brown",
}



