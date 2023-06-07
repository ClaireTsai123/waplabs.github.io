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

//exercise
//For the given students array below, compute the average grade of all students who took cs303 course
// which returns an object which key is students' names, values is the average.
const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
];
//step1: filter
students.filter((stu) => stu.courses.includes('cs303'))
    .reduce((accu,stu) =>{
        let average = stu.grades.reduce((avg,g, index, array) => avg + g/array.length, 0);
        accu[stu.name]= average;
        return accu;
    },{})
