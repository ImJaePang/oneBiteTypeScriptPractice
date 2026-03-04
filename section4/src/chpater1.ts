/**
 * 함수 타입 표현식 function type expression
 */

type Operation1 = (a:number, b:number) => number;

const add1 = (a:number,b:number) => a + b;
const add2 : Operation1 = (a,b) => a + b;

const sub:Operation1 = (a,b) => a-b;
const multiply:Operation1 = (a,b) => a*b;
const divide:(a:number, b:number) => number = (a,b) => a/b;


/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
    (a:number, b:number) : number;
    name :string
};

const add3 : Operation2 = (a,b) => a + b;
const sub3:Operation2 = (a,b) => a-b;
const multiply3:Operation2 = (a,b) => a*b;
const divide3:Operation2 = (a,b) => a/b;

divide3.name;