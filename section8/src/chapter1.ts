/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title:string;
    content : string;
    author : {
        id:number;
        name : string;
        location? : string;
    };
}[];

const key = "author";

// 타입을 넣어야 하기에 값인 key는 안된다.
// function printAuthorInfo (author : Post[key]){
function printAuthorInfo (author : PostList[number]['author']){ // 중첩 가능 Post['author']['id']
    console.log(`${author.name} - ${author.id}`);
}

type num = 0;

const post : PostList[num] = {
    title : "게시글제목",
    content : "게시글 본문 ",
    author : {
        id:   1,
        name : "임재영",
    },
}



type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
type Tup3 = Tup[number];