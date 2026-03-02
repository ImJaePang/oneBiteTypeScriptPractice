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

animal = dog;
// dog = animal;
// animal이 dog의 슈퍼타입, dog가 animal의 서브타입이 된 것



type Book = {
    name:string;
    price:number
}

type ProgrammingBook = {
    name:string;
    price:number;
    skill:string;
}

let book : Book;
let programmingBook : ProgrammingBook = {
    name : "한입 크기로 잘라먹는 리액트",
    price: 33000,
    skill:"reactjs",
}


book = programmingBook;
// programmingBook = book; // 불가, 다운 캐스팅

/* 초과 프로퍼티 검사 */

let book2: Book = {
    name : "한입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill:"reactjs",
}

let book3:Book = programmingBook;

function func(book:Book){}
func({
    name : "한입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill:"reactjs",
});