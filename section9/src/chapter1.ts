/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;
let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>; // 유니언 타입을 할당하면 분산적인 조건부 타입
// StringNumberSwitch<number> |
// StringNumberSwitch<string>
// string | number

let d : StringNumberSwitch<boolean | number | string>;
// 1 단게
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string> 

// 2단계
// number |
// string |
// number

// 3단계
// number | string


/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean , string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string> |

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// never는 공집합이므로 합집합하면 사라짐
// number | booean


type Extract<T,U> = T extends U ? T : never;
type B = Extract<number | string | boolean , string>;
