function saveToDb(data){
    return new Promise ((resolve, reject) =>{
        let internetspd = Math.floor(Math.random()*10)+1;
        if(internetspd > 5){
            resolve("success : data saved");
        }else{
            reject("failure : weak connection");
        }
    });
}

saveToDb("apna cllg")
    .then((result) => {
        console.log('Data saved');
        console.log(result);
        return saveToDb("Hello world");
    })
    .then((result) => {
        console.log('Data saved');
        console.log(result);
    })
    .catch((error) => {
        console.log('Data not saved');
        console.log(error);
    })