// //heavy task....
// function task(message) {
//     // emulate time consuming task
//     console.time();
//     let n = 1000000000;
//     while (n > 0){
//         n--;
//     }
//     console.timeEnd();
//     console.log(message);
// }

// console.log('Start script...');
// task('Call an API');
// console.log('Done!');


// // 18. memoization
// function j() {
//     let cache = {};
//     return function (n) {
//         if (n in cache) {
//             console.log("from cache");
//             return cache[n];
//         } else {
//             console.log("from calculation");
//             cache[n] = n * 100;
//             return cache[n];
//         }
//     }
// }
// let memo = j();
// console.log(memo(10));
// console.log(memo(20));
// console.log(memo(30));
// console.log(memo(10));
// console.log(memo(150));



// const stri = "Programming";
// console.log(...stri);


// function abc(){
//     for(let i = 1; i <= 5; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i * 1000)
//         }
//         close(i);
//     }
// }
// abc();


// function abcd(){
//     console.log(this);
// }
// abcd();


// js magic
function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
}
runFunc();


//truthy and falsy
let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));


// magic
var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 


// apply function
let hero = {
powerLevel: 99,
getPower(){
    return this.powerLevel;
}
}

let getPower = hero.getPower;

let hero2 = {powerLevel:42};
console.log(getPower());
console.log(getPower.apply(hero2));
  

//
const aa = function(){
console.log(this);

    const b = {
        func1: function(){
        console.log(this);
        }  
    }

    const c = {
        func2: ()=>{
        console.log(this);
        }
    }

    b.func1();
    c.func2();
}
aa();


//
(function(a){
    return (function(){
      console.log(a);
      a = 23;
    })()
  })(45);

// hoisting magic

var aaa = 10;
{
    var aaa = -10;
}
let bb = aaa;
{
    let bb = -20;
}

console.log(bb)


// magic magic....
let obj = {
    a: 100,
    fun1() {
        let a = 20;
        let fun2 = () => {
            console.log(this.a);
        }
        fun2();
    }
}
obj.fun1();


//new one (eval function takes string as input and executes it as js code)
var x=12;
var y=8;
var res=eval("x*y");
console.log(res);


//
(function(a){
    return (function(){
        a++;
        console.log(a);
        a = 6;
    })()
})(21);


//
var maxi = Math.max();
var mini = Math.min();
console.log(maxi);
console.log(mini);

//
var test = true + true + true * 3;
console.log(test);

//
const example = ({ a, b, c }) => {
 console.log(a, b, c);
};
example({ a:1, b:2, c:3 });
example(1,2,3);

//