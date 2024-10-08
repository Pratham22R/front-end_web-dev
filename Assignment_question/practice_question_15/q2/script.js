let str= 'abcdabcdefgggh';
let ans ='';
function getUnique(str){
    for(let i=0;i<str.length;i++){
        let curr = str[i];
        if(ans.indexOf(curr)==-1){
            ans = ans+curr;
        }
    }
}

getUnique(str);
console.log(ans);