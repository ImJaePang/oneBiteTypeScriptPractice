/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
    a :number;
}

type ObjB = {
    a: number;
    b:number;
}

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

const varA : StringNumberSwitch<number> = "1";
const varB : StringNumberSwitch<string> = 1;


// 오버로드 시그니쳐 : 기억이 잘...
function removeSpaces<T>(text :T) : T extends string ? string : undefined

function removeSpaces(text :any) {
    if (typeof text === "string"){
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

let result = removeSpaces("안녕 하 시 요 난 임재영이 오");
result.toUpperCase();

let result2 = removeSpaces(undefined);

