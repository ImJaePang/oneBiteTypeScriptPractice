let num1:number = 10;
let num2:10 = 10;

num1 = num2; // upCasting은 가능
// num2 = num1;

/**객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name :string;
    color:string;
}

type Dog = {
    name :string;
    color:string;
    breed :string;
}

let animal :Animal = {
    name: "기린",
    color:"yellow",
}

let dog:Dog = {
    name : "포도리",
    color :"black",
    breed: "dwarf",
}