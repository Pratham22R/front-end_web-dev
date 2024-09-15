let str = prompt("Enter your string");

let n = prompt("Enter the index u want to check");

if(str[n]==str[n].toLowerCase()){
    console.log(`Yes!! ${str[n]} is in lowercase`)
}
else{
    console.log(`No!! ${str[n]} is not in lowercase`)
}