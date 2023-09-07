// All about the functions in javascript, beacuse functions are the ❤️ of javascript


// 1. function declaration
function a() {
    console.log('function declaration called');
}
a();


// 2. function expression
let b = function () {
    console.log('function expression called');
}
b();


// 3. anonymous function
(function () {
    console.log("Anonymous function");
})();


// 4. named function
let named = function n() {
    console.log("Named function");
}
named();


// 5. function constructor
let c = new Function('a', 'b', 'console.log("Constructor called : ",a+b)');
c(10, 20);


// 6. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log('IIFE function called');
})();


// 7. first class function

// Definition 👉 : The ability of functions to be used as values and can be passed as arguments to other functions and can be returned from other functions as well is called first class function...
function q() {
    return function xyz() {
        console.log("First class function");
    }
}
console.log("First class function :", q());


// 8. Arrow function
let d = () => {
    console.log('Arrow function');
}
d();


// 9. higher order function
// Definition 👉 : A function that takes another function as an argument or returns another function as a result is called higher order function...
function g() {
    console.log('higher order function');
    return function () {
        console.log('higher order function called');
    }
}
g()();


// 10. pure function
function k(a, b) {
    return a + b;
}
console.log("Pure Functions : ", k(10, 50));

// 11. impure function
function l(a, b) {
    return a + b + Math.random().toFixed(2);
}
console.log(l("Impure Functions : ", 100, 20));


// 12. callback function
setTimeout(function () {
    console.log('callback fun. timer... (after 5 sec)');
}, 5000);

function call_bak(y) {
    console.log('x called');
    y();
}
call_bak(function ww() {
    console.log('y called');
});


// 13. currying function (function returning function)
function i(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                console.log("Currying..", a + b + c + d);
            }
        }
    }
}
i(10)(20)(30)(40);

// curring using just 2 functions
let sum = function(a) {
    return function(b) {
        if(!b){
            return a;
        }
        return sum(a + b);
    }
}
console.log(sum(10)(20)(35)(345)());


// using es6 arrow function
let sum2 = a => b => b ? sum2(a + b) : a;
console.log(sum2(10)(20)(35)(345)(234)());



// 14. function composition (function returning function)
function step1(a) {
    return a + 10;
}

function step2(b) {
    return b + 20;
}

function step3(c) {
    return c + 30;
}

function step4(d) {
    console.log("Composition..", d);
}

// Compose the functions
const composedFunction = (a) => step4(step3(step2(step1(a))));

// Use the composed function
composedFunction(10);



// 15. function chaining 
const calculator = {
    value: 0,

    add: function (x) {
        this.value += x;
        return this; // Return the modified object to enable chaining
    },
    subtract: function (x) {
        this.value -= x;
        return this;
    },
    multiply: function (x) {
        this.value *= x;
        return this;
    },
    divide: function (x) {
        if (x !== 0) {
            this.value /= x;
        } else {
            console.error("Division by zero is not allowed.");
        }
        return this;
    },
    getValue: function () {
        return this.value;
    },
};
const result = calculator.add(10).subtract(5).multiply(2).divide(4).getValue();

console.log(result);



// 16. recursive function
function m(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * m(n - 1);
    }
}
console.log("Recursive Funtion :", m(5));


// 17. function hoisting
t();
function t() {
    console.log("Function hoisting called");
}


// 18. memoization
function j() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            console.time();
            console.log("from cache");
            console.timeEnd();
            return cache[n];
        } else {
            console.time();
            console.log("from calculation");
            cache[n] = n + 10;
            console.timeEnd();
            return cache[n];
        }
    }
}
let memo = j();
console.log(memo(10));
console.log(memo(10));
console.log(memo(30));


// 19. function prototype
function w() {
    console.log("Function prototype");
}
w.prototype.x = 10;
console.log(w.prototype.x);


// 20. async function
async function asyncFunc() {
    return "Async function";
}
asyncFunc().then((value) => {
    console.log(value);
}
);