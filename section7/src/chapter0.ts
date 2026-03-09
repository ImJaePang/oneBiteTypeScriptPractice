/**
 * 제네릭 : 일반적인, 포괄적인 | 제네럴 : 모든 타입에 두루두루
 */

// 제네릭 함수

function func<T>(value:T):T{
    return value;
}

let num = func (10);
// num.toUpperCase();
num.toFixed();
    

let boolean = func(true);
let string = func("string");

let arr = func<[number, number, number]>([1,2,3]);
