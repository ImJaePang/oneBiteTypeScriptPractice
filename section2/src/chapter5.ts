// enum 타입 : 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 enum
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

const user1 = {
    name : "임재영",
    // role: 0 // 0번은 관리자
    role: Role.ADMIN // 0번은 관리자
}
const user2 = {
    name : "홍길동",
    // role: 1 // 1번은 일반유저
    role: Role.USER // 1번은 일반유저
}
const user3 = {
    name : "아무개",
    // role: 2 // 2번은 게스트
    role: Role.GUEST // 2번은 게스트
}

enum Language {
    Korean = "ko",
    English = "en",
}

Language.Korean;
Language.English;