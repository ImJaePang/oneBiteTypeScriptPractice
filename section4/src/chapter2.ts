/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가? 판단
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 */

// 기준1. 반환값이 호환되는가?

type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b;      // 반환값의 업캐스팅
// b = a;   // 반환값의 다운캐스팅


// 기준2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
// 2-2. 매개변수의 개수가 다를 때

type C = (value:number) => void;
type D = (value:10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;   // 업캐스팅인데 안돼. 반대임. 왜냐하면 조건이기 때문. number > 10
d = c;      // 다운캐스팅인데 된다.

type Animal = {
    name : string;
}

type Dog = {
    name : string;
    color : string;
}

let animalFunc = (animal:Animal) => {}
let dogFunc = (dog:Dog) => {}



