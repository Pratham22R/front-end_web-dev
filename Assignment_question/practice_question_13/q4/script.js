let number = 2871216616515652;
let arr= number.toString().split("");
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum = sum + parseInt(arr[i]);
}
console.log(sum)