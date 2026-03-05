/**
 * 인터페이스의 확장 : 상속 extends
 */

interface Animal {
    name : string;
    age : number;
}

interface Dog extends Animal { // 원본 타입의 서브타입으로 재정의
    name : "hello";
    // age : string;
    isBark : boolean;
}

const dog : Dog = {
    name : "hello",
    age : 1,
    isBark : true,
}

interface Cat extends Animal{

    isScratch : boolean;
}

interface Chicken extends Animal {

    isFly : boolean;
}

interface CatChicken extends Cat, Chicken {};

const CatChicken : CatChicken = {
    name : "",
    age : 2,
    isFly : true,
    isScratch : false,
}