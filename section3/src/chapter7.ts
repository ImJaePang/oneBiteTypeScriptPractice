/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

    type Person = {
        name :string;
        age :number;
    }

// value => number : tofixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다.
function  func(value : number | string | Date | null | Person) { // typeof null 도 object
    // value.toFixed();
    // value.toUpperCase();



    // 타입 가드
    if (typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value ==="string"){
        console.log(value.toUpperCase());
    // } else if (typeof value === "object"){
    //     console.log(value.getTime()); // (parameter) value: Date | null
    // }
    } else if (value instanceof Date){ // Date 객체냐?
        console.log(value.getTime()); 
    } else if (value && "age" in value && "name" in value){ // 'Person'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
    
}