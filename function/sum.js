let n = prompt("Enter your number");
let sum=0;
function sumToN(n){
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sumToN(n));