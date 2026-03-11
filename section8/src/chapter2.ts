/**
 * keyof 연산자
 */

// interface Person {
//     name : string;
//     age : number;
// }

type Person = typeof person;

// function getPropertyKey (person:Person, key : keyof Person){
function getPropertyKey (person:Person, key : keyof typeof person){
    return person[key];
}

// const person : Person = {
//     name : "임재영",
//     age : 41,
// };


const person = {
    name : "임재영",
    age : 41,
};

getPropertyKey(person, "name");


typeof person === "object";
// typeof는 타입을 뽑아주는 것. 활용해서 객체에서 추출하는 것도 가능.