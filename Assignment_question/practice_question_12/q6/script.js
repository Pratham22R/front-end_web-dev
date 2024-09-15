let arr = [];
let task = prompt("Enter your taks");
while (true) {
  if (task == "quit") {
    console.log("Insertion Ended!!!");
    break;
  }
  if (task == add) {
    let element = prompt("Enter the element u want to insert in array");
    arr.push(element);
    task = prompt("Enter what u want to perfom next");
  }
  else{
    console.error("Invalid input,Pls give your input in 'add;quit' format");
  }
}

console.log(arr);

let n = prompt("Enter the word u want to check in array");

if (arr.includes(n)) {
  console.log(`Yes!! ${n} is in array`);
} else {
  console.log(`No!! ${n} is not in array`);
}
