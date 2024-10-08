let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleAndReturnArgument = (arr) => {
    let double =arr.map((el) => {
        return el*2;
    })
    return double;
} ;

console.log(doubleAndReturnArgument(arr));

let arr2 = [...arr , ...doubleAndReturnArgument(arr)];

console.log(arr2);