let max = prompt("Enter the maximum value");

let guess = prompt("Enter your guess");
let rand = Math.floor(Math.random()*max)+1;
while (true) {
    if (guess == "quit") {
        console.log("App closing...");
        break;
    }
    else if(guess==rand){
        console.log("Correct guess");
        break;
    }
    else if(guess>rand){
        console.log("wrong guess");
        guess = prompt("Hint: too high!! Enter a bit lesser");
    }
    else if(guess<rand){
        console.log("wrong guess");
        guess = prompt("Hint: too low!! Enter a bit higher");
    }
}