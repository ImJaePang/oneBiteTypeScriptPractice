/**
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> 매개변수 1개 -> 이 매개변수에 20을 곱한값 출력
 * -> 매개변수 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 어떤 버전들이 있는지 알려주야함 : 오버로드 시그니쳐 - 무슨 함수가 있는가
function func(a:number):void;
function func(a:number, b:number, c:number):void;

// 실제 구현부 -> 구현 시그니쳐
function func(a:number, b?:number, c?:number){
    if(typeof b === 'number' && typeof c === 'number'){
        console.log(a+b+c);
    } else {
        console.log(a*20);
    }
}
// func(); // 1-3개의 인수가 필요한데 0개를 가져왔습니다.
func(1);
// func(2,3); // 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.ts(2575)
func(2,3,4);
