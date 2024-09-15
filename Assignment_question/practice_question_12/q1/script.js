let arr =[];
let length = prompt("Enter the length of array");
let num = prompt("Enter the number u want to insert in array");
for(let i=1;i<length;i++){
    arr.push(num);
    num = prompt("Enter the number u want to insert in array");
}

console.log(arr)

let n = prompt("Enter the value till which u want to print");

console.log(arr.slice(0,n));