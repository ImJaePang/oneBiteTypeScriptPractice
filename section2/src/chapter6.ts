// any

let anyVar:any = 10;
anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();

// unKnown
let unknownVar: unknown;

let num:number = 10;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 모든 타입에 넣는게 안되고, 어퍼케이스 등의 연산도 안된다.

if (typeof unknownVar === "number"){
    num = unknownVar;
}