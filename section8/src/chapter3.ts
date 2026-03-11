/**
 * 맵드 타입
 */

interface User {
    id : number;
    name : string;
    age : number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age' ]? : User[key];
}

type BooleanUser = {
    // [key in 'id' | 'name' | 'age'] : boolean;
    [key in keyof User] : boolean;
}

type ReadOnlyUser = {
    readonly [key in keyof User] : User[key];
}

// function fetchUser(): User {
function fetchUser(): ReadOnlyUser {
    return {
        id : 1,
        name : "임재영",
        age : 41,
    }
}

function updateUser(user : User):void {
    // 수정하는 기능
    console.log("수정되었음");
}

updateUser({
    id : 1,
    name : "임재영",
    age : 42,
});

