let n = prompt("Enter the number of which u want to find the factorial");
let count = 1;
for (let i = n; i >= 0; i--) {
    if (i == 0) {
        break;
    } else {
        count = count * i;
    }
}
console.log(`Factorial of ${n} is ${count}`);
