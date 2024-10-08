let country = ["USA", "UK", "India", "Australia", "Japan"];
let max =0;
function longestName(country){
    for(let i=0;i<country.length;i++){
        let ansLen = country[max].length;
        let currLen = country[i].length;
        if(ansLen < currLen){
            max = i;
        }
    }
    return country[max];
}

longestName(country);

console.log(country[max]);