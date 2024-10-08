let mergeObject = (obj1, obj2) => {

    return {...obj1, ...obj2};
};

let obj1 = {
    name: "John",
    age: 30
};
let obj2 = {
    city: "New York",
    country: "USA"
};
console.log(mergeObject(obj1, obj2));