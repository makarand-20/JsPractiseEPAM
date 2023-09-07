//call() method is used to call a function with a given this value and arguments provided individually.
//call() method can be used to invoke (call) a function with an owner object as an argument (parameter).

console.log("** Example 1 **");
//example 1.............
let person = {
    name: 'John',
    age: 20,
    printDetails: function(){
        console.log(this);
    }
}
person.printDetails();

let person2 = {
    name: 'Smith',
    age: 30,
}
person.printDetails.call(person2);



console.log("** Example 2 **");
// example 2.............
//function as a global
let printDetails = function(city){
    console.log(this);
    console.log(this.name + " " + city);
}
//objects
let user1 = {
    name: 'Makarand',
    age: 21,
}
let user2 = {
    name: 'Sid',
    age: 21,
}
//call() (function borrowing)
printDetails.call(user1);
printDetails.call(user2);



console.log("** Example 3 **");
// example 3.............
//function as a global
let printDetail = function(city){
    console.log(this.name + " " + city);
}
let printAllDetails = function(city, state, country, pincode){
    console.log(this.name + ", " + city + ", " + state + ", " + country + ", " + pincode);
}
//objects
let user11 = {
    name: 'Khiste',
    age: 21,
}
let user12 = {
    name: 'Sonawane',
    age: 21,
}
//call() (function borrowing)
printDetail.call(user11, "Pandharpur");
printDetail.call(user12, "Nashik");



console.log("** Example 4 **");
//apply() method is similar to call() method.
//In call() method, we pass arguments separately whereas in apply() method we pass arguments as an array.
let maku = {
    name: 'Makarand Khiste',
    age: 21,
}
printAllDetails.apply(maku, ["Pandharpur", "Maharashtra", "India", 413304]);



console.log("** Example 5 **");
//bind() method is used to bind a function to an object.
//bind() method returns a new function, where the value of this argument will be bound to the owner object, which is provided as a parameter.

let printMakuDetails = printDetails.bind(maku, "Pandharpur");
printMakuDetails();
