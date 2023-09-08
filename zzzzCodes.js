// addition program...
function sumOfTwo(a,b){
    return a+b;
}
console.log("Sum :", sumOfTwo(1,2));


// find maximum of array
let arr01 = [1,2,3,4,5,66,7,8,9,10];
function findMax(arr){
    return Math.max(...arr);
}
console.log("Max no :", findMax(arr01));


// find minimum of array
function findMin(arr){
    return Math.min(...arr);
}
console.log("Min no :", findMin(arr01));


// string palindrome or not
let str01 = "madam";
function isPalindrome(str){
return str === str.split("").reverse().join("");
}
console.log("Palindrome :", isPalindrome(str01));


//string reverse
let str22 = "hello";
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log("Reverse :", reverseString(str22));


// return even numbers in array
let arr22 = [1,2,3,4,5,6,7,8,9,10];
function evenReturn(arr){
    return arr.filter(num => num%2==0);
}
console.log("Even no :", evenReturn(arr22));


// factorial of a number
let num1 = 5;
function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num-1);
}
console.log("Factorial :", factorial(num1));


// fibonacci series
function fibonacci(num){
    let arr = [0,1];
    for(let i = 2; i < num; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr;
}
console.log("Fibonacci :", fibonacci(10));


// prime number or not
function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log("Prime :", isPrime(13));


// find prime numbers in array
function primeReturn(arr){
    return arr.filter(num => isPrime(num));
}
console.log("Prime no :", primeReturn(arr01));


//find the largest element in a nested array
let arr33 = [[1,2,3],[4,15,6],[7,8,9]];
function findMax2DArray(nestedArr){
    let maxi = nestedArr[0][0];
    for(let i = 0; i < nestedArr.length; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
            if(nestedArr[i][j] > maxi){
                maxi = nestedArr[i][j];
            }
        }
    }
    return maxi;
}
console.log("Max no :", findMax2DArray(arr33));


// find the smallest element in a nested array
function findMin2DArray(nestedArr){
    let mini = nestedArr[0][0];
    for(let i = 0; i < nestedArr.length; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
            if(nestedArr[i][j] < mini){
                mini = nestedArr[i][j];
            }
        }
    }
    return mini;
}
console.log("Min no :", findMin2DArray(arr33));


// find the longest word in a string
let str3 = "The quick brown foxxxxxx jumped over the lazy dog";
function findLongestWord(str){
    let arr = str.split(" ");
    let longestWord = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}
console.log("Longest word :", findLongestWord(str3));


// converting string to title case
function toTitleCase(str) { 
    return str.replace(/\b\w/g, l => l.toUpperCase()); 
}
console.log(toTitleCase("hello world"));


// implement debounce function
function debounce(func, delay){
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        setTimeout(() =>{
            func();
        }, delay);
    }
}
function print(){
    console.log("After delay of debounce function 🏐");
}
debounce(print, 2000)();


// implement throttle function
function throttle(func, delay){
    let timer;
    return function(){
        if(timer){
            return;
        }
        else{
            timer = setTimeout(() =>{
                func();
                timer = null;
            }, delay);
        }
    }
}
function print2(){
    console.log("After delay of throttle function 🍾");
}
throttle(print2, 3000)();


// array sort without using sort method
let arr44 = [1,2,3,4,5,6,7,8,9,10];
function sortArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log("Sorted array :", sortArray(arr44));


// array sort
function sortArray2(arr){
    return arr.sort((a,b) => a-b);
}
console.log("Sort():", sortArray2(arr44));


// remove duplicate elements from array
let arr55 = [1,2,3,4,5,6,1,2,3,4];
function removeDuplicates(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("Unique array :", removeDuplicates(arr55));


// remove duplicate elements from array using set
function removeDuplicates2(arr){
    const arrr = new Set(arr);
    return [...arrr];
    //or
    return [...new Set(arr)];
}
console.log("set() :", removeDuplicates2(arr55));


// remove duplicate elements from array using filter
let arr66 = [1,2,3,4,4,5,1,2,3,4];
function removeDuplicates3(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log("filter() :", removeDuplicates3(arr66));


// deep clone an object
let obj11 = {
    name: "Rahul",
    age: 22,
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}
// using JSON.parse() and JSON.stringify()
function deepClone(obj11){
    return JSON.parse(JSON.stringify(obj11));
}
console.log("Deep clone :", deepClone(obj11));


// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions
let arr77 = [1,2,3,4,5,6,7,8,9,10];
let arr88 = [11,12,13,14,15,16,17,18,19,20];
function mergeSortedArrays(arr7, arr8){
    return [...arr7, ...arr8].sort((a,b) => a-b);
}
console.log("Merge sorted array :", mergeSortedArrays(arr77, arr88));


// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions
function mergeSortedArrays2(arr7, arr8){
    let i = 0;
    let j = 0;
    let mergedArr = [];
    while(i < arr7.length && j < arr8.length){
        if(arr7[i] < arr8[j]){
            mergedArr.push(arr7[i]);
            i++;
        }
        else{
            mergedArr.push(arr8[j]);
            j++;
        }
    }
    return [...mergedArr, ...arr7.slice(i), ...arr8.slice(j)];
}


//Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.
let str4 = "Makarand";
function isPalindrome2(str){
    let newStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    return newStr === newStr.split("").reverse().join("");
}
console.log("Alpha numeric Palindrome :", isPalindrome2(str4));


//Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.
let arr99 = [1,2,3,[4,5,6,[7,8,9]]];
function flattenArray(arr){
    return arr.flat(Infinity);
}
console.log("Flatten array :", flattenArray(arr99));


//Write a function that determines if two strings are anagrams of each other.
let str5 = "listen";
let str6 = "silent";
function isAnagram(str1, str2){
    return str1.split("").sort().join("")
    === str2.split("").sort().join("");
}
console.log("Anagram :", isAnagram(str5, str6)); 


//Write a function that returns the nth number in the Fibonacci sequence, given n.
function fibonacci2(num){
    let arr = [0,1];
    for(let i = 2; i < num; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[num-1];
}
console.log("Fibonacci :", fibonacci2(10));


//Implement a function to reverse a string without using the built-in reverse() method.
let str7 = "Makarand";
function reverseString2(str){
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log("Reverse string :", reverseString2(str7));


//implement a function to return the sum of all the elements in an array
function sumOfArray(arr){
    return arr.reduce((sum, curr) => sum + curr, 0);
}
console.log("Sum of array :", sumOfArray(arr77));


//Given a string, write a function to count the occurrences of each character in the string.
let str8 = "Makarand";
function countChar(str){
    let obj = {};
    for(let char of str){
        obj[char] = obj[char] + 1 || 1;
    }
    return obj;
}
console.log("Count char :", countChar(str8));


//Write a function that reverses the order of words in a sentence without using the built-in reverse() method.
let sentence = "I am Makarand, who are you ?";
function reverseSentence(str){
    return str.split(" ").reverse().join(" ");
}
console.log("Reverse sentence :", reverseSentence(sentence));


//Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.
let arr101 = [1,2,3,4,5,6,7,8,9,10];
function largestDifference(arr){
    return Math.max(...arr) - Math.min(...arr);
}
console.log("Largest difference :", largestDifference(arr101));


//Implement a function that finds the second smallest element in an array of integers.
function secondSmallest(arr){
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if(arr[i] < secondSmallest){
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}
console.log("Second smallest :", secondSmallest(arr101));


//Implement a function that finds the second largest element in an array of integers.
function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log("Second largest :", secondLargest(arr101));


//Implement a function that takes two strings, s1 and s2 and returns the longest common subsequence of s1 and s2.
let s1 = "ABAZDC";
let s2 = "BACBAD";
function longestCommonSubsequence(s1, s2){
    let arr = [];
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]){
                arr.push(s1[i]);
                break;
            }
        }
    }
    return arr.join("");
}
console.log("Longest common subsequence :", longestCommonSubsequence(s1, s2));


//Write a function that generates a random alphanumeric string of a given length.
function randomString(length){
    let str = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < length; i++){
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}
console.log("Random string :", randomString(10));


//Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 
let arr111 = [1,2,3,4,5,0,undefined,NaN,"",false,null];
function removeFalsy(arr){
    return arr.filter(Boolean);
}
console.log("Remove falsy :", removeFalsy(arr111));


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
        obj[item] = obj[item] ? obj[item]+1 : 1;
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


//Write a function that performs binary search on a sorted array of integers
let arr13 = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return -1;
}
console.log("binary search", binarySearch(arr13, 8));


//Implement a function that returns an updated array with r right rotations on an array of integers a .
function rotateRight(arr,rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations;i++){
      let element = arr.pop();
      arr.unshift(element);
    }
    return arr;
  }
console.log(rotateRight([2, 3, 4, 5, 7], 3));
console.log(rotateRight([44, 1, 22, 111], 5));


// Write the code to find the vowels
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}
console.log(findVowels('Makarand'))


//In JavaScript, how do you turn an Object into an Array []?
const objj = {
    name: 'Makarand',
    age: 25,
    city: 'Pune'
}
console.log(Object.keys(objj));
console.log(Object.values(objj));
console.log(Object.entries(objj));


//How to remove duplicate characters from String?
const removeDuplicate = str => {
    let result = ''
    for(let char of str) {
      if(result.indexOf(char) === -1) {
        result += char
      }
    }
    return result
}
console.log(removeDuplicate('Makarand'))


//
for (let i = 0; i < 10; i++) {
    const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}