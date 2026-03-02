/**
 * 타입 추론
 */

// 점진적인 타입 추론
let a: number = 10;
let aa = 10; // number 타입으로 추론
let b = "hello"; // string 타입으로 추론
// function func(param) {} // 파라미터에 타입을 적어줘야

// 변수의 초기값으로 추론
let c = {
    id: 1,
    name: "",
    profile: {
        nickName: "",
    },
    url: "",
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

/**
 * any 타입의 진화
 */
let d; // 암묵적인 any 타입 - 명시적 any타입과는 다르다.
d = 10; // number
d.toFixed();
// d.toUpperCase();

d = "hello"; // string
d.toUpperCase();
// d.toFixed();



const num = 10; // number literal 타입이 됨 : 상수
const str = "hello"; // 

let arr = [1, "string"];
