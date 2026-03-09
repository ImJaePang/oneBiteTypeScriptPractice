/**
 * map 메서드
 */

import * as it from "node:test";

const arr = [1,2,3];

const newArr = arr.map((it) => it *2);
// [2, 4, 6];

function map<T,U> (arr :T[], callback : (item:T) => U){
    let result = [];
    for (let i =0; i < arr.length ; i++){
        result.push(callback(arr[i]));
    }
}

map(arr, (it) => it *2);

// map(["hi", "hell"], (it) => it.toUpperCase());
map(["hi", "hell"], (it) => parseInt(it));


/**
 * forEach
 */

const arr2 = [1,2,3];
arr2.forEach((it) => console.log(it));

function foreach<T>(arr :T[], callback : (item:T) => void){
    for (let i =0; i < arr.length ; i++ ){
        callback(arr[i]);
    }
}

foreach(arr2, (it)=>console.log(it));


foreach(["123", "345"], (it) => {
    it;
})