let num = prompt("Enter your number");

function table(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

table(num);

