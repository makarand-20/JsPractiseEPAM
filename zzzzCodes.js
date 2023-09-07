//callback function with simple example
function simpleCallback(callback){
    callback();
}
function callback(){
    console.log("callback function called...");
}
simpleCallback(callback);


//How to check if an object is an array or not? Provide some code.
let arr = [1,2,3,4,5];
console.log(Array.isArray(arr));
//or
console.log(arr instanceof Array);
//or
console.log(arr.constructor === Array);


////How to check if an object is an string or not? Provide some code.
let str = "Hello World";
console.log(typeof str === 'string');


//How to check if an object is an integer or not? Provide some code.
let num = 10;
console.log(typeof num === 'number');


//How to check if an object is an boolean or not? Provide some code.
let bool = true;
console.log(typeof bool === 'boolean');


//How to check if an object is an function or not? Provide some code.
let func = function(){
    console.log("Hello World");
}
console.log(typeof func === 'function');


//How to check if an object is an null or not? Provide some code.
let nul = null;
console.log(typeof nul === 'object');


//how to empty an array in js
let arr2 = [1,2,3,4,5];
console.log(arr2);
arr2 = [];
console.log(arr2);
//or
arr2.length = 0;
console.log(arr2);
//or
arr2.splice(0,arr2.length);
console.log(arr2);
//or 
while(arr2.length){
    arr2.pop();
}
console.log(arr2);


//How to empty an object in js
let obj = {
    name: "John",
    age: 25,
    city: "New York"
}
console.log(obj);
obj = {};
console.log(obj);
//or
for(let key in obj){
    delete obj[key];
}
console.log(obj);


//implement queue using 2 stacks
class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(val){
        this.stack1.push(val);
    }
    dequeue(){
        if(this.stack2.length === 0){
            if(this.stack1.length === 0){
                return "Queue is empty";
            }
            while(this.stack1.length > 0){
                let x = this.stack1.pop();
                this.stack2.push(x);
            }
        }
        return this.stack2.pop();
    }
}
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());


// duplicate array elements
let arr3 = [1,2,3,4,5];
function duplicate(arr){
    return arr.concat(arr);
}
console.log(duplicate(arr3));


//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3 , "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
let arr4 = [];

for(let i=1;i<=100;i++){
    if(i%3 === 0 && i%5 === 0){
        // console.log("fizzbuzz");
        arr4.push("fizzbuzz");
    }
    else if(i%3 === 0){
        // console.log("fizz");
        arr4.push("fizz");
    }
    else if(i%5 === 0){
        // console.log("buzz");
        arr4.push("buzz");
    }
    else{
        // console.log(i);
        arr4.push(i);
    }
}
console.log(arr4);


//How to check if a string contains a substring
let str2 = "Hello World";
console.log(str2.includes("Hello"));
console.log(str2.includes("Hello World!"));


//creating a clouser for private variables (data abstraction).....
function clouserPractise(){
    let count = 0;
    return{
        add: function(increment){
            count += increment;
        },
        show: function(){
            return count;
        }
    }
}
let c = clouserPractise();
c.add(10);
c.add(20);
console.log(c.show());


//guess output
(function(){
    var a = b = 5;
})();
console.log(b); // b is not defined if function is not called...


//count array frequency
let arr5 = ["hello", "world", "java", "hello", "world", "hello", "world", "hello"];
function countFrequency(arr){
    let obj = {};
    arr5.forEach((item)=>{
        if(obj[item]){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    })
    return obj;
}
console.log(countFrequency(arr5));


//Group items on the basis of age of given array of objects
let arr6 = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Smith",
        age: 30
    },
    {
        name: "David",
        age: 25
    },
    {
        name: "Smith",
        age: 30
    },
    {
        name: "Smith",
        age: 25
    }
];
function groupByAge(arr){
    let obj = {};
    arr.forEach((item)=>{
        if(obj[item.age]){
            obj[item.age].push(item);
        }
        else{
            obj[item.age] = [item];
        }
    })
    return obj;
}
console.log(groupByAge(arr6));


//Program to check a string with balanced brackets.
function checkBalanced(str){
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let i=0; i<str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
            stack.push(str[i]);
        }
        else{
            let last = stack.pop();
            if(str[i] !== map[last]){
                return false;
            }
        }
    }
    if(stack.length !== 0){
        return false;
    }
    return true;
}
console.log(checkBalanced("()[]{}"));
console.log(checkBalanced("([)]"));
console.log(checkBalanced("([{}])"));
console.log(checkBalanced("([{}])("));


//Collect books from array of objects and return collection of books as an array of objects
let arr7 = [
    {
        name: "Smith",
        books: [ "Harry Potter", "Game of Thrones", "Lord of the Rings" ],
        age: 25
    },
    {
        name: "David",
        books: [ "The Notebook", "The Secret" ],
        age: 30
    },
    {
        name: "John",
        books: [ "Harry Potter", "Warcross", "The Maze Runner" ],
        age: 28
    }
];
let result = arr7.reduce((acc, curr) => {
    return acc.concat(curr.books);
    //or
    return [...acc, ...curr.books];
},[])
console.log(result);


//Print all duplicate elements of an array using filter
let arr8 = [1,1,5,6,7,7,8,9,3,4,4];
let result2 = arr8.filter((value, index) => {
    return arr8.indexOf(value) !== index;
}
)
console.log(result2);


//Remove duplicates from an array and return unique values in O(n) complexity
let result3 = arr8.filter((value, index) => {
    return arr8.indexOf(value) === index;
}
)
console.log(result3);


//Find the nth largest element in an unsorted array
let arr9 = [61,82,33,14,56,68,7,48,92];
function nthLargest(arr, n){
    let sortedArr = arr.sort((a, b) => {
        return a-b;
    })
    return sortedArr[n-1];
}
console.log("nth largest", nthLargest(arr9, 8));


//Find the nth smallest element in an unsorted array
function nthSmallest(arr, n){
    let sortedArr = arr.sort((a, b) => {
        return b-a;
    })
    return sortedArr[n-1];
}
console.log("nth smallest", nthSmallest(arr9, 1));


//Find the missing number from sorted array with O(n) complexity
let arr10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16];
function missingNumber(arr){
    let n = arr.length;
    let total = (n+1)*(n+2)/2;
    for(let i=0; i<n; i++){
        total -= arr[i];
    }
    return total;
}
console.log("missing number", missingNumber(arr10));

//Find the missing number from unsorted array with O(n) complexity 
// (same as above)
let arr11 = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
function missingNumber3(arr){
    let n = arr.length;
    let total = (n+1)*(n+2)/2;
    for(let i=0; i<n; i++){
        total -= arr[i];
    }
    return total;
}
console.log("missing number", missingNumber3(arr11));


//Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)
let arr12 = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
function twoSum(arr, target){
    let result = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}
console.log("two sum n^2", twoSum(arr12, 8));

//o(n)
function twoSum2(arr, target){
    let result = [];
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            result.push([obj[arr[i]], arr[i]]);
        }
        else{
            obj[target-arr[i]] = arr[i];
        }
    }
    return result;
}
console.log("two sum o(n)", twoSum2(arr12, 8));


