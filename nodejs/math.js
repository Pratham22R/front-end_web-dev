const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}
const g =9.8;

let m = {
    sum:sum,
    sub:sub,
    g:g,

    mul:(a,b)=>{
        return a*b;
    }
}
module.exports = {sum,sub,g,m}