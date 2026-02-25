// 배열
let numArr:number[] = [1,2,3];

let astArr:string[]= ["hello", "im", "jaeyoung"];

let boolArr:Array<boolean> = [true, false, true];


// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr:(string|number)[] = [1, "hello"];


// 다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][] = [
    [1,2,3],
    [4,5],
];



// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1,2];
// tup1 = [1,2,3];
// tup1 = ["hell","oo"];

let tup2:[number, string, boolean] = [1, "2", true];

const users:[string, number][] = [
    ["임재빵", 1],
    ["이정환", 2],
    ["장비리", 3],
    // [4, "하이삐"],
]
