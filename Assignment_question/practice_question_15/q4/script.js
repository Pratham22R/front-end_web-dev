let str = 'samjaskjcsasjqwaakackjbfajkcbsjk';

let count = 0;

function countVowel(str) {
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
        }
    }
    return count;
}

countVowel(str);
console.log(count)