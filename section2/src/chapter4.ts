// 타입 별칭
type User = {
    id:number;
    name:string;
    nickName:string;
    birth:string;
    bio:string;
    location:string;
    extra?:string;
};


let user1 : User = {
    id :1,
    name:"이정환",
    nickName:"임재팡",
    birth:"1986.09.17",
    bio:"와썹",
    location:"인천시",
};

let user2 : {
    id:number;
    name:string;
    nickName:string;
    birth:string;
    bio:string;
    location:string;
} = {
    id :1,
    name:"이정환",
    nickName:"임재팡",
    birth:"1986.09.17",
    bio:"와썹",
    location:"인천시",
};




// 인덱스 시그니쳐
type CountryCodes = {
    [key : string] : string;
}


let countryCodes:CountryCodes = {
    Korea : 'ko',
    UnitedKingdom : 'uk',
    UnitedStates : 'us',
}

type CountryNumberCodes = {
    [key:string] : number
    Korea : number;
}

let countryNumberCodes:CountryNumberCodes = {
    Korea : 410,
    UnitedKingdom : 826,
    UnitedStates : 840,
}