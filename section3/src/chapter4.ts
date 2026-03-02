/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a : string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr : (number|string|boolean)[] = [1,"hello", true];

type Dog = {
    name : string;
    color: string;
}

type Person = {
    name :string;
    language : string;
}

type Union1 = Dog | Person;

// Dog
let union1 : Union1 = {
    name : "",
    color : "",
}

// Person
let union2 : Union1 = {
    name : "",
    language : "",
}

// Dog + Person 전체
let union3 :Union1 = {
    name : "",
    color: "",
    language : "",
}

// Dog와 Person의 교집합
// let union4 :Union1 = {
//     name : "",
// }


/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable : number & string; // 교집합이 없는 경우

type DogA = {
    name : string;
    color: string;
}

type PersonA = {
    name :string;
    language : string;
}

type Intersectoin = DogA & PersonA;

// dog 타입이면서 person타입이여야 하기 때문
let Intersection1 : Intersectoin = { // 모두 포함하고 있는 경우만 가능
    name : "",
    color : "",
    language : "",
}

