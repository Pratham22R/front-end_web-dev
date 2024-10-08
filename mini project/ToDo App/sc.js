let todo=[];
let req=prompt("Enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting app...");
        break;
    }
    if(req=="list"){
        console.log("___________");
        for(i of todo){
            console.log(i);
        }
        console.log("___________");
    }
    else if(req=="add"){
        let task=prompt("Enter task");
        todo.push(task);
        console.log("Task added");
    }
    req=prompt("Enter your request");
}