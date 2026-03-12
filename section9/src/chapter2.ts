/**
 * infer - 조건부 타입 내에서 타입 추론하기
 * inference -> 추론하다.
 */

type FuncA = () => string;

type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;


type B = ReturnType<FuncB>;

type C = ReturnType<"FuncC">;



/**
 * 예제
 */

// type PromiseUnpack<T> = any;
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never ;
// 1. T는 프로미스 타입이여야 한다.
// 2. 프로미스의 타입의 결과값 타입을 반환해야 한다.


type PromiseA = PromiseUnpack<Promise<number>>;
// number;

type PromiseB = PromiseUnpack<Promise<string>>;