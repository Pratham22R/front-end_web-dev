let todo=[];
let req=prompt("Enter your request");
while(true){
    if(req=="quit"){
        console.log("App closing...");
        break;
    }
    else if(req=="list"){
        console.log("___________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("___________");
    }
    else if(req=="add"){
        let item=prompt("Enter item");
        todo.push(item);
    }
    else if(req=="delete"){
        let idx=prompt("Enter the no.of the item");
        todo.splice(idx,1);
    }
    else{
        console.log("Invalid request");
    }
    req=prompt("Enter your request");
}