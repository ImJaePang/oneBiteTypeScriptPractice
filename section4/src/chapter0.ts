/**
 * 함수의 타입을 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는 지
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a:number,b:number){
    return a + b;
}

/**
 * 화살표 함수에서 타입을 정의하는 방법
 */

const add = (a:number,b:number) =>  a+ b;


/**
 * 함수의 매개변수
 */

function introduce(name  = "임재영", tall? : number) { // 선택적매개변수는 필수매개변수 뒤로
    console.log(`name : ${name}`);
    tall && console.log(`tall : ${tall + 10}`);
}
// introduce(1);
introduce("임재영", 177);
introduce("임재영");


function getSum(...rest:number[]){ // rest매개변수는 배열로 받음, 튜플도 가능 [number, number]
    let sum = 0;
    rest.forEach((num)=> (sum+=num));
    return sum;
}

getSum(1, 2, 3); // 6
getSum(1,2,3,4,5); // 15