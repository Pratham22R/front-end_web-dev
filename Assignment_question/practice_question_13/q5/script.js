let arr = [1,2,3,4,5,6,2,3];
let largest = 0 ;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest);