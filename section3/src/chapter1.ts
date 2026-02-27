/*unknown 타입 */
// 전체집합 : 모든 타입의 슈퍼타입, 전부 upcasting이 된다.

function unknownExam(){
    let a :unknown = 1;
    let b :unknown = "string";
    let c :unknown = true;

    let unknownVar:unknown;
    // let num :number = unknownVar; // 안됨. downCasting이라서
    
}

/*Never 타입 */
// 모든 타입의 서브타입 -> 공집합

function neverExam(){

    function neverFunc() :never {
        while(true){};

        let num:number = neverFunc();
        let str:string = neverFunc();
        let bool:boolean = neverFunc();

        // let never1:never = 10;
        // let never2:never = "string";
        // let never3:never = true;
    }
}



/*void 타입 */

function voidExam(){
    function voidFunc():void {
        console.log("hi");
        return undefined;
    }

    let voidVar :void = undefined;
}


/**any 타입 : 치트키 타입*/
// 모든 타입의 슈퍼타입이면서 서브타입 (네버 제외)
// 위험하니 왠만하면 조심히

function anyExam (){
    let unknownVar : unknown;
    let anyVar :any;
    let undefinedVar :undefined;
    let neverVar :never;

    anyVar = unknownVar;
    unknownVar = anyVar;

    undefinedVar = anyVar;
    anyVar = undefinedVar;

    // neverVar = anyVar;
    // anyVar = neverVar;

}
