let start =1;
let end =15;
function rand(start,end){
    return Math.floor(Math.random()*end+start)
}
rand(start,end);
console.log(rand(start,end));