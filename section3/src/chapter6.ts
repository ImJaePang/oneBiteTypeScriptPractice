/** 
 * 타입 단언 type assertion
 */

type Person = {
    name :string;
    age:number;
}
// let person : Person= {};
let person = {} as Person; // 이 타입으로 간주, 단언하는 방법

person.name = "임재영";
person.age = 41;

type Dog = {
    name :string;
    color :string;
}

let dog  = {
    name :"포도리",
    color : "brown",
    breed: "dwarf",
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이여야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;
// num3.substring(0,3);


/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name : "야옹이",
    color : "yellow",
} as const; // 모두 프로퍼티가 readonly

// cat.name = "";

/**
 * Non Null 단언
 */

type Post = {
    title : string;
    author? : string;
}

let post : Post = {
    title : "게시글1",
    author : "임재영",
}

// const len : number = post.author?.length; // 옵셔널 체이닝
const len : number = post.author!.length; // null이거나 undefined가 아닐거야!