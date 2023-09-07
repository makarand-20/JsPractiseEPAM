const obj1 = {
    name: "Makarand",
    getName:function(){
        return this.name
    }
}
console.log("obj 1 :", obj1);


const obj2 = {
    age: 22,
    getAge:function(){
        return this.age
    },
    __proto__: obj1 
}
console.log("obj 2 :", obj2);


const obj3 = {
    degree: "IT",
    getDegree:function(){
        return this.degree
    },
    __proto__:obj2
}
console.log("obj 3 :", obj3);


const obj4 = {
    __proto__:obj3
}

console.log("Object 4 👇")

//prototype Inheritance
console.log("From obj 1 :", obj4.name);
console.log("From obj 2 :", obj4.age);
console.log("From obj 3 :", obj4.degree);

console.log(obj4.getName());
console.log(obj4.getAge());
console.log(obj4.getDegree());

console.log("Prototype Inheritance", obj4)


console.log("Prototypes :")
// all the objects in javascript are inherited from Object.prototype

//checking prototypes of string
const str = new String();
console.log(str);

//checking prototypes of number
const num = new Number();
console.log(num);

//checking prototypes of boolean
const bool = new Boolean();

//checking prototypes of object
const obj = new Object();
console.log(obj);

//checking prototypes of function
const func = new Function();
console.log(func);

//checking prototypes of array
const arr = new Array();
console.log(arr);

//checking prototypes of regex
const regex = new RegExp();
console.log(regex);

//checking prototypes of map
const map = new Map();
console.log(map);

//checking prototypes of set
const set = new Set();
console.log(set);


console.log("Custom Prototypes for sorting :")

//creating a prototype of our own
const arr2 = [1,2,3,4,5];

Array.prototype.dSort = function(){
    return this.sort((a,b)=>b-a);
}
Array.prototype.iSort = function(){
    return this.sort((a,b)=>a-b);
}

console.log(arr2.iSort());
console.log(arr2.dSort());


//converting array into object
console.log("Converting array into objects :")

Array.prototype.toObj = function(){
    let obj = {};
    this.forEach(elements => {
        obj[elements] = elements;
    }
    );
    return obj;
}

console.log(arr2.toObj());


//full new prototype
console.log("Full new own prototype :")

class MyPrototype {
    constructor() {
        this.name = "Makarand";
        this.age = 22;
        this.degree = "IT";
    }
}

const myProto = new MyPrototype();
console.log(myProto);