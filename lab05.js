// Use Array Methods: filter, map, reduce, etc to implement functions below:
// 1. Create a function using function declaration named sum with one parameter of Array type, then returned result is the sum of all elements which are greater than 20.
 let array=[25,3,25,30,7];
function sum(arr){
   return arr.filter(ele => ele > 20).reduce((prevValue, element) => prevValue + element, 0);
}
console.log(sum(array));


// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

let strArr=['abcde','aaa','apple','aaaaaa','hello'];
let getNewArray = function (arr){
    return arr.filter(ele => ele.length >= 5  && ele.includes('a'));
}
console.log(getNewArray(strArr));