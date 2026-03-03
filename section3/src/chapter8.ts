/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입으로만 만든 유니온 타입을 말함
 * 예시 ) string | number
 */

type Admin = {
    name :string;
    kickCount : number;
};

type Member = {
    name :string;
    point : number;
};

type Guest = {
    name :string;
    visitCount : number;
};

type User = Admin | Member | Guest;

// Admin -> ${name}님 현재까지 ${kickCount}명 강퇴했습니다.
// Member -> ${name}님 현재까지 ${point} 모았습니다.
// Guest -> ${name}님 현재까지 ${visitCount} 오셨습니다.
function login (user:User){
    if ("kickCount" in user){
        // user;
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
    } else if ("point" in user){
        // user;
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
    } else {
        // user;
        console.log(`${user.name}님 현재까지 ${user.visitCount} 오셨습니다.`)
    }
}


