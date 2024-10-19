function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            if(num<3){
                reject(num);
            }
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
console.log(demo());