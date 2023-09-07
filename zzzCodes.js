// addition program...
function sumOfTwo(a,b){
    return a+b;
}
console.log("Sum :", sumOfTwo(1,2));


// find maximum of array
let arr = [1,2,3,4,5,66,7,8,9,10];
function findMax(arr){
    return Math.max(...arr);
}
console.log("Max no :", findMax(arr));


// find minimum of array
function findMin(arr){
    return Math.min(...arr);
}
console.log("Min no :", findMin(arr));


// string palindrome or not
let str = "madam";
function isPalindrome(str){
return str === str.split("").reverse().join("");
}
console.log("Palindrome :", isPalindrome(str));


//string reverse
let str2 = "hello";
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log("Reverse :", reverseString(str2));


// return even numbers in array
let arr2 = [1,2,3,4,5,6,7,8,9,10];
function evenReturn(arr){
    return arr.filter(num => num%2==0);
}
console.log("Even no :", evenReturn(arr2));


// factorial of a number
let num = 5;
function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num-1);
}
console.log("Factorial :", factorial(num));


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
console.log("Prime no :", primeReturn(arr));


//find the largest element in a nested array
let arr3 = [[1,2,3],[4,15,6],[7,8,9]];
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
console.log("Max no :", findMax2DArray(arr3));


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
console.log("Min no :", findMin2DArray(arr3));


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
let arr4 = [1,2,3,4,5,6,7,8,9,10];
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
console.log("Sorted array :", sortArray(arr4));


// array sort
function sortArray2(arr){
    return arr.sort((a,b) => a-b);
}
console.log("Sort():", sortArray2(arr4));


// remove duplicate elements from array
let arr5 = [1,2,3,4,5,6,1,2,3,4];
function removeDuplicates(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("Unique array :", removeDuplicates(arr5));


// remove duplicate elements from array using set
function removeDuplicates2(arr){
    const arrr = new Set(arr);
    return [...arrr];
    //or
    return [...new Set(arr)];
}
console.log("set() :", removeDuplicates2(arr5));


// remove duplicate elements from array using filter
let arr6 = [1,2,3,4,4,5,1,2,3,4];
function removeDuplicates3(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log("filter() :", removeDuplicates3(arr6));


// deep clone an object
let obj = {
    name: "Rahul",
    age: 22,
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}
// using JSON.parse() and JSON.stringify()
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
console.log("Deep clone :", deepClone(obj));


// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions
let arr7 = [1,2,3,4,5,6,7,8,9,10];
let arr8 = [11,12,13,14,15,16,17,18,19,20];
function mergeSortedArrays(arr7, arr8){
    return [...arr7, ...arr8].sort((a,b) => a-b);
}
console.log("Merge sorted array :", mergeSortedArrays(arr7, arr8));


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
let arr9 = [1,2,3,[4,5,6,[7,8,9]]];
function flattenArray(arr){
    return arr.flat(Infinity);
}
console.log("Flatten array :", flattenArray(arr9));


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
console.log("Sum of array :", sumOfArray(arr7));


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
let arr10 = [1,2,3,4,5,6,7,8,9,10];
function largestDifference(arr){
    return Math.max(...arr) - Math.min(...arr);
}
console.log("Largest difference :", largestDifference(arr10));


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
console.log("Second smallest :", secondSmallest(arr10));


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
console.log("Second largest :", secondLargest(arr10));


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
let arr11 = [1,2,3,4,5,0,undefined,NaN,"",false,null];
function removeFalsy(arr){
    return arr.filter(Boolean);
}
console.log("Remove falsy :", removeFalsy(arr11));