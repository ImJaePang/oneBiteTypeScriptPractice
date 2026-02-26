// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1() :string {
    return "hello";
}

function func2() : void {
    console.log("hello");
}

function func3() : undefined {
    console.log("hello");
    return;
}

function func4() : null {
    console.log("hello");
    return null;
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func5() :never {
    while(true){};
}

function func6() :never {
    throw new Error();
}