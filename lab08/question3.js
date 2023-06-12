
Array.prototype.sort = function(){
    for (let i = 0; i < array.length -1; i++){
        for (let j = 0 ; j < array.length - 1 - i; j++){
            if (array[j] > array [j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let array = new Array(5,4,2,1,7);
// let array = [ 5,4,2,1,7];
console.log(array.sort());